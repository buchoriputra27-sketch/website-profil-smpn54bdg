import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CalendarDays, Clock, MapPin, Quote } from "lucide-react";
import { DAY_FILTERS, EKSKUL, TESTIMONIALS, filterEkskul, type DayFilter } from "@/lib/school-data";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SmartImage } from "@/components/site/SmartImage";
import { Icon } from "@/components/site/icons";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ekstrakurikuler")({
  head: () => ({
    meta: [
      { title: "Ekstrakurikuler & Kata Mereka — SMP Negeri 54 Kota Bandung" },
      { name: "description", content: "Jadwal 10 ekstrakurikuler SMPN 54 Bandung (Selasa–Jumat) dan testimoni asli siswa tentang sekolah dan Budaya BISA." },
      { property: "og:title", content: "Ekstrakurikuler & Testimoni Siswa SMPN 54 Bandung" },
      { property: "og:description", content: "Tarung Derajat, Marching Band, Pramuka, Karawitan, Futsal, dan lainnya — plus cerita siswa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Ekskul,
});

function Ekskul() {
  const [day, setDay] = useState<DayFilter>("Semua");
  const list = filterEkskul(day);

  return (
    <>
      <PageHero eyebrow="Ekstrakurikuler" title={<>Kembangkan <span className="italic text-gold-gradient">bakatmu</span></>}>
        {EKSKUL.length} kegiatan ekstrakurikuler setiap Selasa hingga Jumat. Pilih hari untuk melihat jadwal.
      </PageHero>

      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-6">
        <div className="glass mx-auto flex w-fit flex-wrap justify-center gap-1.5 rounded-full p-1.5 shadow-luxe" role="tablist" aria-label="Filter hari">
          {DAY_FILTERS.map((d) => (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={day === d}
              onClick={() => setDay(d)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300",
                day === d ? "bg-ocean text-primary-foreground shadow-luxe" : "text-foreground/70 hover:bg-secondary hover:text-primary",
              )}
            >
              {d}
              <span className={cn("ml-1.5 text-xs", day === d ? "text-gold" : "text-muted-foreground")}>{filterEkskul(d).length}</span>
            </button>
          ))}
        </div>

        <div key={day} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((e, i) => (
            <div
              key={e.name}
              className="glass group animate-fade-up rounded-3xl p-6 transition hover:-translate-y-2 hover:shadow-luxe"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean text-gold transition group-hover:scale-110 group-hover:rotate-6">
                  <Icon name={e.icon} className="h-6 w-6" />
                </span>
                <span className="rounded-full bg-gold-soft px-3 py-1 text-xs font-bold text-gold-foreground">{e.day}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-ocean-deep">{e.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {e.time} WIB</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {e.place}</li>
                <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" /> Setiap hari {e.day}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mesh-bg mt-28 px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary">Testimoni Siswa</p>
          <h2 className="mt-3 text-4xl font-semibold text-ocean-deep sm:text-5xl">
            Kata <span className="italic text-gold-gradient">Mereka</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Kutipan wawancara asli dari perwakilan siswa tentang kesan bersekolah dan Budaya BISA.</p>
        </Reveal>
        <div className="mx-auto mt-14 max-w-6xl columns-1 gap-5 md:columns-2 lg:columns-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 110} className="mb-5 break-inside-avoid">
              <figure className="glass relative rounded-3xl p-7 transition hover:shadow-luxe">
                <Quote className="h-8 w-8 text-gold" />
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-foreground/85">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                  <SmartImage
                    src={t.photo}
                    alt={t.name}
                    className="h-14 w-14 shrink-0 rounded-full ring-2 ring-gold"
                    imgClassName="object-top"
                    fallback={<span className="flex h-full w-full items-center justify-center bg-ocean font-display text-lg text-gold">{t.name[0]}</span>}
                  />
                  <div>
                    <p className="font-display text-lg font-semibold text-ocean-deep">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Siswa SMPN 54 Bandung</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
