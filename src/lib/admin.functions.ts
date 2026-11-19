import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

type AdminSession = { unlocked?: boolean };

// Built per call: on the Worker runtime env vars are only present inside a request.
function sessionConfig() {
  return {
    password: process.env["SESSION_SECRET"]!,
    name: "smpn54-admin",
    maxAge: 60 * 60 * 8,
    cookie: { httpOnly: true, secure: true, sameSite: "none" as const, path: "/", partitioned: true },
  };
}

function passwordMatches(input: string, expected: string): boolean {
  const a = createHash("sha256").update(input, "utf8").digest();
  const b = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(a, b);
}

export const getAdminStatus = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  return { unlocked: session.data.unlocked === true };
});

export const loginAdmin = createServerFn({ method: "POST" })
  .inputValidator((data: { password: string }) => ({ password: String(data?.password ?? "").slice(0, 200) }))
  .handler(async ({ data }) => {
    const expected = process.env["ADMIN_PASSWORD"];
    if (!expected) throw new Error("ADMIN_PASSWORD belum diatur");
    if (!passwordMatches(data.password, expected)) return { ok: false as const };
    const session = await useSession<AdminSession>(sessionConfig());
    await session.update({ unlocked: true });
    return { ok: true as const };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const getAdminMessages = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  if (session.data.unlocked !== true) return { unlocked: false as const, messages: [] };

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("messages")
    .select("id, name, email, subject, message, created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) throw new Error("Gagal memuat pesan");
  return { unlocked: true as const, messages: data ?? [] };
});
