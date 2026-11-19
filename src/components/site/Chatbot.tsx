import { useEffect, useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";
import { askSchoolBot } from "@/lib/chat.functions";
import { QUICK_REPLIES, quickReplyAnswer, type QuickReply } from "@/lib/school-data";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content: "Halo! 👋 Saya Asisten 54, siap membantu informasi seputar SMP Negeri 54 Kota Bandung. Pilih topik cepat atau ketik pertanyaanmu.",
};

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const ask = useServerFn(askSchoolBot);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading, open]);

  function quick(topic: QuickReply) {
    setMessages((m) => [...m, { role: "user", content: topic }, { role: "assistant", content: quickReplyAnswer(topic) }]);
  }

  async function send(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await ask({ data: { messages: next.slice(1) } });
      setMessages((m) => [...m, { role: "assistant", content: res.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Maaf, koneksi sedang bermasalah. Coba lagi sebentar ya." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end sm:bottom-6 sm:right-6">
      <div
        className={cn(
          "glass mb-3 flex w-[min(92vw,380px)] origin-bottom-right flex-col overflow-hidden rounded-3xl shadow-luxe transition-all duration-500",
          open ? "h-[min(70vh,560px)] scale-100 opacity-100" : "pointer-events-none h-0 scale-90 opacity-0",
        )}
        role="dialog"
        aria-label="Asisten 54"
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3 bg-ocean px-5 py-4 text-primary-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-gold-foreground">
            <Bot className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="font-display text-base font-semibold">Asisten 54</p>
            <p className="flex items-center gap-1.5 text-xs text-primary-foreground/75">
              <span className="h-2 w-2 rounded-full bg-success" /> Online · data resmi sekolah
            </p>
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Tutup chat" className="rounded-full p-1.5 transition hover:bg-primary-foreground/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-background/60 px-4 py-4">
          {messages.map((m, i) => (
            <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
              <div
                className={cn(
                  "max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                  m.role === "user" ? "rounded-br-md bg-ocean text-primary-foreground" : "rounded-bl-md bg-card text-card-foreground shadow-soft",
                )}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Asisten sedang mengetik…
            </div>
          )}
        </div>

        <div className="border-t border-border/60 bg-card/70 px-3 pb-3 pt-2.5">
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => quick(q)}
                className="rounded-full border border-gold/50 bg-gold-soft px-3 py-1 text-xs font-semibold text-gold-foreground transition hover:bg-gold"
              >
                {q}
              </button>
            ))}
          </div>
          <form onSubmit={send} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pertanyaan…"
              maxLength={500}
              className="h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Kirim"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-ocean text-primary-foreground transition hover:shadow-luxe disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Tutup asisten" : "Buka asisten sekolah"}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-ocean text-primary-foreground shadow-luxe ring-4 ring-gold/40 transition hover:scale-105"
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-primary-glow/30" />}
        {open ? <X className="relative h-6 w-6" /> : <MessageCircle className="relative h-7 w-7" />}
        {!open && <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-card bg-gold" />}
      </button>
    </div>
  );
}
