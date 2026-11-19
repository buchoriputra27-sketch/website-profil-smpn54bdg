import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ocean px-6 pb-24 pt-36 text-primary-foreground sm:pt-44">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" />
      <div className="relative mx-auto max-w-5xl animate-fade-up text-center">
        <p className="eyebrow mb-4 text-gold">{eyebrow}</p>
        <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">{title}</h1>
        {children && <div className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">{children}</div>}
      </div>
    </section>
  );
}
