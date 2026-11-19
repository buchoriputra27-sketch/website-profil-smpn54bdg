import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { FACILITIES } from "@/lib/school-data";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SmartImage } from "@/components/site/SmartImage";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/fasilitas")({
  head: () => ({
    meta: [
      { title: "Fasilitas Sekolah — SMP Negeri 54 Kota Bandung" },
      { name: "description", content: "Galeri sarana dan prasarana SMPN 54 Bandung: laboratorium IPA, laboratorium komputer, perpustakaan, ruang kelas, toilet, dan UKS." },
      { property: "og:title", content: "Fasilitas SMP Negeri 54 Kota Bandung" },
      { property: "og:description", content: "Lihat galeri laboratorium, perpustakaan, ruang kelas, dan UKS SMPN 54 Bandung." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Facilities,
});

function Facilities() {
  const [active, setActive] = useState<number | null>(null);
  const total = FACILITIES.length;
  const go = useCallback((dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + total) % total)), [total]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, go]);

  const current = active === null ? null : FACILITIES[active];

  return (
    <>
      <PageHero eyebrow="Sarana & Prasarana" title={<>Fasilitas <span className="italic text-gold-gradient">Sekolah</span></>}>
        Ruang belajar yang bersih, indah, sehat, dan asri. Klik foto untuk melihat ukuran penuh.
      </PageHero>

      <section className="relative z-10 mx-auto -mt-12 max-w-7xl px-6">
        <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((f, i) => (
            <Reveal key={f.src} delay={(i % 3) * 110} className={cn(i === 0 && "sm:row-span-2", i === 3 && "lg:row-span-2")}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block h-full w-full overflow-hidden rounded-3xl text-left shadow-luxe focus:outline-none focus-visible:ring-4 focus-visible:ring-gold"
                aria-label={`Lihat foto ${f.title}`}
              >
                <SmartImage src={f.src} alt={f.title} className="h-full w-full" imgClassName="transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-hero-overlay opacity-60 transition group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                  <span className="glass-dark rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider">{f.category}</span>
                  <h3 className="mt-3 text-2xl font-semibold">{f.title}</h3>
                </div>
                <span className="glass-dark absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-primary-foreground opacity-0 transition group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {current && active !== null && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ocean-deep/85 p-4 backdrop-blur-xl animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-5xl animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <SmartImage key={current.src} src={current.src} alt={current.title} loading="eager" className="max-h-[68vh] w-full rounded-3xl bg-ocean-deep" imgClassName="max-h-[68vh] object-contain" />
            <div className="glass mt-4 rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-primary">{current.category} · {active + 1}/{total}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-ocean-deep">{current.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.desc}</p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button type="button" onClick={() => go(-1)} aria-label="Sebelumnya" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition hover:bg-gold hover:text-gold-foreground"><ChevronLeft className="h-5 w-5" /></button>
                  <button type="button" onClick={() => go(1)} aria-label="Berikutnya" className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition hover:bg-gold hover:text-gold-foreground"><ChevronRight className="h-5 w-5" /></button>
                </div>
              </div>
            </div>
            <button type="button" onClick={() => setActive(null)} aria-label="Tutup" className="absolute -top-3 -right-3 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-gold transition hover:scale-110">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
