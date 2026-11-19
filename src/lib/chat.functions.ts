import { createServerFn } from "@tanstack/react-start";

type ChatTurn = { role: "user" | "assistant"; content: string };

export const askSchoolBot = createServerFn({ method: "POST" })
  .inputValidator((input: { messages: ChatTurn[] }) => {
    if (!Array.isArray(input?.messages) || input.messages.length === 0) {
      throw new Error("Pesan kosong");
    }
    const messages = input.messages
      .slice(-10)
      .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m) => ({ role: m.role, content: m.content.slice(0, 1000) }));
    return { messages };
  })
  .handler(async ({ data }) => {
    const { generateResponse, GatewayError } = await import("@lovable.dev/ai-gateway");
    const { schoolKnowledge } = await import("./school-data");

    const instructions = [
      "Kamu adalah 'Asisten 54', asisten virtual resmi SMP Negeri 54 Kota Bandung.",
      "Jawab dalam Bahasa Indonesia yang ramah, santun, singkat (maksimal 5 kalimat atau daftar poin pendek).",
      "Gunakan HANYA data resmi di bawah. Jika informasi tidak tersedia, katakan dengan jujur dan sarankan mengirim pesan lewat halaman Kontak atau email sekolah.",
      "JANGAN PERNAH memberikan atau mengarang nomor telepon/WhatsApp sekolah. Jika ditanya nomor telepon, arahkan ke email, Instagram, atau formulir Kontak.",
      "Jangan gunakan format markdown tebal; boleh memakai poin '•' dan emoji secukupnya.",
      "",
      "DATA RESMI SEKOLAH:",
      schoolKnowledge(),
    ].join("\n");

    try {
      const res = await generateResponse({
        model: "openai/gpt-6.1-sol",
        instructions,
        input: data.messages.map((m) => ({ role: m.role, content: m.content })),
      });
      let text = "";
      for (const item of res.output ?? []) {
        if (item.type === "message") {
          for (const c of item.content) if (c.type === "output_text") text += c.text;
        }
      }
      return { ok: true as const, reply: text.trim() || "Maaf, saya belum bisa menjawab itu. Silakan hubungi kami lewat halaman Kontak." };
    } catch (err) {
      if (err instanceof GatewayError) console.error("Chatbot gateway error", err.code, err.ids);
      else console.error("Chatbot error", err);
      return {
        ok: false as const,
        reply: "Maaf, asisten sedang sibuk. Coba tombol cepat di bawah atau kirim pesan lewat halaman Kontak ya.",
      };
    }
  });
