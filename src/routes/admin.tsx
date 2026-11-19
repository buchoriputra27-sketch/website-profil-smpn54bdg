import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Inbox, Loader2, Lock, LogOut, Mail, Radio, Search } from "lucide-react";
import { getAdminMessages, getAdminStatus, loginAdmin, logoutAdmin } from "@/lib/admin.functions";

export const Route = createFileRoute("/admin")({
  ssr: false,
  loader: () => getAdminStatus(),
  head: () => ({
    meta: [
      { title: "Admin — SMP Negeri 54 Kota Bandung" },
      { name: "description", content: "Halaman pengelola pesan masuk." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { unlocked } = Route.useLoaderData();
  return (
    <section className="mesh-bg min-h-screen px-6 pb-20 pt-32">
      {unlocked ? <Inboxes /> : <LoginCard />}
    </section>
  );
}

function LoginCard() {
  const router = useRouter();
  const login = useServerFn(loginAdmin);
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(false);
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    const res = await login({ data: { password } });
    setBusy(false);
    if (res.ok) await router.invalidate();
    else setError(true);
  }

  return (
    <form onSubmit={onSubmit} className="glass mx-auto max-w-md animate-fade-up rounded-[2rem] p-10 text-center shadow-luxe">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-ocean text-gold"><Lock className="h-7 w-7" /></span>
      <h1 className="mt-6 text-3xl font-semibold text-ocean-deep">Area Admin</h1>
      <p className="mt-2 text-sm text-muted-foreground">Masukkan kata sandi untuk melihat pesan masuk.</p>
      <input
        name="password"
        type="password"
        autoComplete="current-password"
        required
        placeholder="Kata sandi"
        className="mt-6 w-full rounded-2xl border border-input bg-background/70 px-4 py-3 text-center text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/20"
      />
      {error && <p className="mt-3 text-sm font-medium text-destructive">Kata sandi salah.</p>}
      <button type="submit" disabled={busy} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition hover:-translate-y-0.5 disabled:opacity-60">
        {busy && <Loader2 className="h-4 w-4 animate-spin" />} Masuk
      </button>
    </form>
  );
}

function Inboxes() {
  const router = useRouter();
  const fetchMessages = useServerFn(getAdminMessages);
  const logout = useServerFn(logoutAdmin);
  const [q, setQ] = useState("");
  const { data, isLoading, dataUpdatedAt } = useQuery({
    queryKey: ["admin-messages"],
    queryFn: () => fetchMessages(),
    refetchInterval: 5000,
    refetchIntervalInBackground: false,
  });

  if (data && !data.unlocked) {
    void router.invalidate();
  }

  const messages = (data?.messages ?? []).filter((m) =>
    `${m.name} ${m.email} ${m.subject} ${m.message}`.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-5xl animate-fade-up">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow text-primary">Dasbor Admin</p>
          <h1 className="mt-2 text-4xl font-semibold text-ocean-deep">Pesan Masuk</h1>
          <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <Radio className="h-3.5 w-3.5 animate-pulse text-success" /> Diperbarui otomatis setiap 5 detik
            {dataUpdatedAt ? ` · terakhir ${new Date(dataUpdatedAt).toLocaleTimeString("id-ID")}` : ""}
          </p>
        </div>
        <button
          type="button"
          onClick={async () => {
            await logout();
            await router.invalidate();
          }}
          className="inline-flex items-center gap-2 self-start rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-destructive hover:text-destructive-foreground"
        >
          <LogOut className="h-4 w-4" /> Keluar
        </button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr]">
        <div className="glass flex items-center gap-4 rounded-2xl px-6 py-4">
          <Inbox className="h-6 w-6 text-primary" />
          <div>
            <p className="font-display text-3xl font-semibold text-ocean-deep">{data?.messages.length ?? 0}</p>
            <p className="text-xs text-muted-foreground">Total pesan</p>
          </div>
        </div>
        <label className="glass flex items-center gap-3 rounded-2xl px-5">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari nama, email, atau isi pesan…" className="h-full w-full bg-transparent py-4 text-sm outline-none" />
        </label>
      </div>

      <div className="mt-6 space-y-4">
        {isLoading && (
          <div className="flex items-center justify-center gap-2 py-16 text-muted-foreground"><Loader2 className="h-5 w-5 animate-spin" /> Memuat pesan…</div>
        )}
        {!isLoading && messages.length === 0 && (
          <div className="glass rounded-3xl py-16 text-center text-muted-foreground">Belum ada pesan.</div>
        )}
        {messages.map((m) => (
          <article key={m.id} className="glass rounded-3xl p-6 transition hover:shadow-luxe">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h2 className="font-sans text-lg font-bold text-ocean-deep">{m.subject || "(Tanpa subjek)"}</h2>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{m.name}</span>
                  <a href={`mailto:${m.email}`} className="inline-flex items-center gap-1 text-primary hover:underline"><Mail className="h-3.5 w-3.5" />{m.email}</a>
                </p>
              </div>
              <time className="shrink-0 rounded-full bg-gold-soft px-3 py-1 text-xs font-semibold text-gold-foreground">
                {new Date(m.created_at).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}
              </time>
            </div>
            <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-foreground/85">{m.message}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
