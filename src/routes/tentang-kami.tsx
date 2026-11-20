import { createFileRoute } from "@tanstack/react-router";
import { Crown, Eye, Target } from "lucide-react";
import { BISA, LEADERS, MASAGI, MISSIONS, PRINCIPALS, TIMELINE, VISION } from "@/lib/school-data";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SmartImage } from "@/components/site/SmartImage";
import { Icon } from "@/components/site/icons";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — SMP Negeri 54 Kota Bandung" },
      { name: "description", content: "Visi, misi, Budaya BISA, karakter Bandung Masagi, sejarah, dan pimpinan SMP Negeri 54 Kota Bandung." },
      { property: "og:title", content: "Tentang SMP Negeri 54 Kota Bandung" },
      { property: "og:description", content: "Visi & misi, sejarah sejak 2013, dan struktur pimpinan SMPN 54 Bandung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-semibold text-ocean-deep sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}

function About() {
  const [head, ...staff] = LEADERS;
  return (
    <>
      <PageHero eyebrow="Tentang Kami" title={<>Mengenal <span className="italic text-gold-gradient">SMPN 54</span> Bandung</>}>
        Sekolah negeri di Rancanumpang, Gedebage, yang tumbuh dari rintisan filial menjadi sekolah berbudaya BISA.
      </PageHero>

      {/* Vision & mission */}
      <section className="relative z-10 mx-auto -mt-14 max-w-6xl px-6">
        <Reveal className="glass rounded-[2rem] p-8 shadow-luxe sm:p-12">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold text-gold-foreground"><Eye className="h-6 w-6" /></span>
            <p className="eyebrow text-primary">Visi</p>
          </div>
          <p className="mt-5 font-display text-2xl italic leading-snug text-ocean-deep sm:text-3xl">“{VISION}”</p>
        </Reveal>

        <div className="mt-14">
          <Reveal className="mb-8 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean text-gold"><Target className="h-6 w-6" /></span>
            <h2 className="text-3xl font-semibold text-ocean-deep">Misi Sekolah</h2>
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-2">
            {MISSIONS.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 90} className={i === 4 ? "md:col-span-2" : ""}>
                <div className="glass group flex h-full gap-5 rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-luxe">
                  <span className="font-display text-4xl font-semibold text-gold transition group-hover:text-primary">0{i + 1}</span>
                  <div className="pt-1">
                    <h3 className="font-display text-xl font-semibold text-ocean-deep">{m.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-foreground/85">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* BISA detail */}
      <section className="mesh-bg mt-24 px-6 py-24">
        <SectionTitle eyebrow="Budaya Sekolah" title={<>Konsep <span className="text-gold-gradient">BISA</span></>} sub="Sekolah berwawasan lingkungan: Bersih, Indah, Sehat, dan Asri — dijalankan bersama oleh siswa, guru, dan tenaga kependidikan." />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-2">
          {BISA.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="glass flex h-full gap-5 rounded-3xl p-7">
                <span className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-ocean text-gold">
                  <span className="font-display text-2xl font-bold leading-none">{b.letter}</span>
                  <Icon name={b.icon} className="mt-1 h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-ocean-deep">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bandung Masagi */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <SectionTitle
          eyebrow="Pendidikan Karakter"
          title={<>Karakter <span className="italic text-primary">Bandung Masagi</span></>}
          sub="Model pendidikan karakter Kota Bandung berbasis kearifan lokal Sunda — silih asih, silih asah, silih asuh, dan silih wawangi — yang diwujudkan dalam empat program utama."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MASAGI.map((m, i) => (
            <Reveal key={m.title} delay={i * 110}>
              <div className="group relative h-full overflow-hidden rounded-3xl bg-ocean p-7 text-primary-foreground shadow-luxe transition hover:-translate-y-2">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/25 blur-2xl transition group-hover:bg-gold/45" />
                <p className="eyebrow text-gold">{m.value}</p>
                <h3 className="mt-3 text-2xl font-semibold">{m.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto mt-28 max-w-4xl px-6">
        <SectionTitle eyebrow="Sejarah" title="Perjalanan Kami" />
        <ol className="relative mt-14 space-y-10 border-l-2 border-gold/50 pl-8 sm:pl-12">
          {TIMELINE.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 80} className="relative">
              <span className="absolute -left-[2.6rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-gold-soft sm:-left-[3.6rem]" />
              <div className="glass rounded-2xl p-6 transition hover:shadow-luxe">
                <p className="font-display text-lg font-semibold text-primary">{t.year}</p>
                <h3 className="mt-1 text-xl font-semibold text-ocean-deep">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Principal history */}
      <section className="mesh-bg mt-28 px-6 py-24">
        <SectionTitle eyebrow="Riwayat Pimpinan" title="Kepala Sekolah dari Masa ke Masa" />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPALS.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <div className={`h-full rounded-3xl p-7 transition hover:-translate-y-1 ${"current" in p ? "bg-ocean text-primary-foreground shadow-luxe" : "glass"}`}>
                <p className={`font-display text-sm font-semibold ${"current" in p ? "text-gold" : "text-primary"}`}>{p.period}</p>
                <h3 className={`mt-3 text-xl font-semibold leading-snug ${"current" in p ? "" : "text-ocean-deep"}`}>{p.name}</h3>
                <p className={`mt-2 text-xs ${"current" in p ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  Kepala Sekolah ke-{i + 1}{"current" in p ? " · Menjabat (Plt.)" : ""}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Active leadership */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <SectionTitle eyebrow="Struktur Pimpinan Aktif" title="Tim Pimpinan Sekolah" />
        {head && (
          <Reveal className="mx-auto mt-14 max-w-xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-ocean p-10 text-center text-primary-foreground shadow-luxe">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/30 blur-3xl" />
              <Crown className="relative mx-auto h-9 w-9 text-gold" />
              <p className="eyebrow relative mt-4 text-gold">{head.role}{head.note ? ` (${head.note})` : ""}</p>
              <h3 className="relative mt-3 text-3xl font-semibold">{head.name}</h3>
            </div>
          </Reveal>
        )}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {staff.map((l, i) => (
            <Reveal key={l.name} delay={i * 90}>
              <div className="glass group h-full overflow-hidden rounded-3xl transition hover:-translate-y-2 hover:shadow-luxe">
                {l.photo && (
                  <SmartImage src={l.photo} alt={l.name} className="aspect-[3/4] w-full" imgClassName="object-top transition duration-700 group-hover:scale-105" />
                )}
                <div className="p-5">
                  <p className="eyebrow text-[0.62rem] text-primary">{l.role}</p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-ocean-deep">{l.name}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
