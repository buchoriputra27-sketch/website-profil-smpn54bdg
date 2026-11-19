import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Quote } from "lucide-react";
import { BISA, SCHOOL, STATS, VISION } from "@/lib/school-data";
import { SmartImage } from "@/components/site/SmartImage";
import { Reveal } from "@/components/site/Reveal";
import { StatCard } from "@/components/site/StatCard";
import { Icon } from "@/components/site/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SMP Negeri 54 Kota Bandung — five, four, best" },
      { name: "description", content: "Selamat datang di SMP Negeri 54 Kota Bandung: 777 siswa, 24 rombel, berbudaya BISA (Bersih, Indah, Sehat, Asri) di Gedebage." },
      { property: "og:title", content: "SMP Negeri 54 Kota Bandung — five, four, best" },
      { property: "og:description", content: "Sekolah berbudaya BISA dan berkarakter Bandung Masagi di Rancanumpang, Gedebage, Bandung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <SmartImage
          src={SCHOOL.gate}
          alt="Gerbang SMP Negeri 54 Kota Bandung"
          loading="eager"
          className="absolute inset-0 h-full w-full"
          imgClassName="scale-105"
          fallback={<div className="h-full w-full bg-ocean" />}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold/25 blur-3xl" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-48 pt-32">
          <div className="max-w-3xl animate-fade-up text-primary-foreground">
            <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide">
              <span className="h-2 w-2 rounded-full bg-gold" /> Website Resmi · Gedebage, Kota Bandung
            </span>
            <h1 className="mt-6 text-6xl font-semibold leading-[0.95] sm:text-8xl">
              <span className="italic text-gold-gradient animate-shimmer">five, four,</span>
              <br />
              best.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              Selamat datang di <strong className="font-semibold text-primary-foreground">{SCHOOL.name}</strong> — rumah kedua
              bagi generasi yang religius, santun, peduli lingkungan, dan siap berprestasi.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/tentang-kami"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
              >
                Jelajahi Sekolah <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/kontak"
                className="glass-dark inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/20"
              >
                <Compass className="h-4 w-4" /> Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating stats */}
      <section className="relative z-10 -mt-36 px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 120}>
              <StatCard value={s.value} label={s.label} note={s.note} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto mt-28 grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="eyebrow text-primary">Sambutan</p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-ocean-deep sm:text-5xl">
            Tempat tumbuh yang <span className="italic text-primary">bersih</span>, nyaman, dan penuh makna.
          </h2>
        </Reveal>
        <Reveal delay={150} className="glass relative rounded-3xl p-8">
          <Quote className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-gold p-2 text-gold-foreground" />
          <p className="font-display text-xl italic leading-relaxed text-foreground/90">“{VISION}”</p>
          <p className="mt-5 text-sm text-muted-foreground">
            Visi sekolah yang kami wujudkan bersama seluruh warga sekolah melalui pembiasaan Budaya BISA dan
            pendidikan karakter Bandung Masagi.
          </p>
          <Link to="/tentang-kami" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
            Baca visi & misi lengkap <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* BISA */}
      <section className="mesh-bg mt-28 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <p className="eyebrow text-primary">Budaya Sekolah</p>
            <h2 className="mt-3 text-4xl font-semibold text-ocean-deep sm:text-5xl">
              Budaya <span className="text-gold-gradient">BISA</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Empat nilai sederhana yang kami hidupkan setiap hari agar sekolah menjadi ruang belajar terbaik.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BISA.map((b, i) => (
              <Reveal key={b.title} delay={i * 120}>
                <div className="glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean text-gold shadow-luxe transition group-hover:rotate-6 group-hover:scale-110">
                      <Icon name={b.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-display text-6xl font-semibold text-primary/10 transition group-hover:text-gold/40">{b.letter}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-ocean-deep">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto mt-24 max-w-6xl px-6">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ocean px-8 py-14 text-primary-foreground shadow-luxe sm:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">Temukan ekskul favoritmu.</h2>
              <p className="mt-2 text-primary-foreground/75">10 kegiatan ekstrakurikuler, dari Tarung Derajat hingga Marching Band.</p>
            </div>
            <Link
              to="/ekstrakurikuler"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-gold-foreground shadow-gold transition hover:-translate-y-0.5"
            >
              Lihat Jadwal <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
