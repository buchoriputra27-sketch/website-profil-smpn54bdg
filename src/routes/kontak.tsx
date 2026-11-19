import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Clock, Instagram, Loader2, Mail, MapPin, Send, Youtube } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SCHOOL } from "@/lib/school-data";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak & Bantuan — SMP Negeri 54 Kota Bandung" },
      { name: "description", content: "Alamat, email, Instagram, YouTube, dan jam operasional SMPN 54 Bandung. Kirim pesan langsung lewat formulir." },
      { property: "og:title", content: "Hubungi SMP Negeri 54 Kota Bandung" },
      { property: "og:description", content: "Jl. Raya Utsman Bin Affan, Rancanumpang, Gedebage, Bandung · smpn54bandung@gmail.com" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const INFO = [
  { icon: MapPin, label: "Alamat", value: SCHOOL.address, href: SCHOOL.mapsUrl },
  { icon: Mail, label: "Email", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
  { icon: Instagram, label: "Instagram", value: SCHOOL.instagram.handle, href: SCHOOL.instagram.url },
  { icon: Youtube, label: "YouTube", value: SCHOOL.youtube.handle, href: SCHOOL.youtube.url },
  { icon: Clock, label: "Jam Operasional", value: SCHOOL.hours },
] as const;

const field =
  "w-full rounded-2xl border border-input bg-background/70 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/20";

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Mohon lengkapi nama, email, dan pesan.");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("messages").insert(payload);
    setSending(false);
    if (error) {
      toast.error("Pesan gagal terkirim. Silakan coba lagi.");
      return;
    }
    form.reset();
    setSent(true);
    toast.success("Pesan berhasil terkirim! Terima kasih telah menghubungi kami.");
  }

  return (
    <>
      <PageHero eyebrow="Kontak & Bantuan" title={<>Mari <span className="italic text-gold-gradient">terhubung</span></>}>
        Punya pertanyaan seputar sekolah? Kirimkan pesan Anda — tim kami akan menindaklanjuti pada jam operasional.
      </PageHero>

      <section className="relative z-10 mx-auto -mt-12 grid max-w-6xl gap-6 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {INFO.map((item, i) => {
            const Inner = (
              <div className="glass group flex items-start gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-luxe">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean text-gold transition group-hover:scale-110">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="eyebrow text-[0.62rem] text-primary">{item.label}</p>
                  <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">{item.value}</p>
                </div>
              </div>
            );
            return (
              <Reveal key={item.label} delay={i * 80}>
                {"href" in item ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">
                    {Inner}
                  </a>
                ) : (
                  Inner
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="glass rounded-[2rem] p-7 shadow-luxe sm:p-10">
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center animate-fade-up">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-soft text-success">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h2 className="mt-6 text-3xl font-semibold text-ocean-deep">Pesan terkirim!</h2>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Terima kasih. Pesan Anda sudah kami terima dan akan dibalas melalui email.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-8 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:shadow-luxe">
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <h2 className="text-3xl font-semibold text-ocean-deep">Kirim Pesan</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Semua kolom bertanda * wajib diisi.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-medium">Nama *<input name="name" required maxLength={100} className={`${field} mt-1.5`} placeholder="Nama lengkap" /></label>
                  <label className="block text-sm font-medium">Email *<input name="email" type="email" required maxLength={255} className={`${field} mt-1.5`} placeholder="nama@email.com" /></label>
                </div>
                <label className="block text-sm font-medium">Subjek<input name="subject" maxLength={150} className={`${field} mt-1.5`} placeholder="Contoh: Informasi PPDB" /></label>
                <label className="block text-sm font-medium">Pesan *<textarea name="message" required maxLength={2000} rows={5} className={`${field} mt-1.5 resize-none`} placeholder="Tulis pesan Anda…" /></label>
                <button
                  type="submit"
                  disabled={sending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-bold text-gold-foreground shadow-gold transition hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 transition group-hover:translate-x-1" />}
                  {sending ? "Mengirim…" : "Kirim Pesan"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>
    </>
  );
}
