import { useEffect, useRef, useState } from "react";

export function StatCard({ value, label, note, index }: { value: number | string; label: string; note: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<number | string>(typeof value === "number" ? 0 : value);

  useEffect(() => {
    if (typeof value !== "number") return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1600;
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe animate-float"
      style={{ animationDelay: `${index * 0.8}s` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gold opacity-0 transition group-hover:opacity-100" />
      <p className="font-display text-5xl font-semibold text-ocean-deep transition group-hover:text-primary">{shown}</p>
      <p className="mt-2 text-sm font-bold text-foreground">{label}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}
