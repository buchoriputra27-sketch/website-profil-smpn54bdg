import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Youtube } from "lucide-react";
import { Logo } from "./Logo";
import { NAV } from "./nav";
import { SCHOOL } from "@/lib/school-data";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ocean text-primary-foreground">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1.3fr]">
        <div className="space-y-5">
          <Logo light />
          <p className="max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            Sekolah berbudaya BISA dan berkarakter Bandung Masagi — religius, santun, berwawasan
            lingkungan, dan berprestasi.
          </p>
          <div className="flex gap-3">
            <a href={SCHOOL.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram" className="glass-dark flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gold hover:text-gold-foreground">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={SCHOOL.youtube.url} target="_blank" rel="noreferrer" aria-label="YouTube" className="glass-dark flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gold hover:text-gold-foreground">
              <Youtube className="h-4 w-4" />
            </a>
            <a href={`mailto:${SCHOOL.email}`} aria-label="Email" className="glass-dark flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gold hover:text-gold-foreground">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-gold">Jelajahi</h3>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-primary-foreground/80 transition hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-gold">Hubungi Kami</h3>
          <ul className="space-y-4 text-sm text-primary-foreground/80">
            <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SCHOOL.address}</li>
            <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SCHOOL.email}</li>
            <li className="flex gap-3"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{SCHOOL.hours}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} {SCHOOL.name}. Hak cipta dilindungi.</span>
          <span className="font-display italic text-gold">five, four, best</span>
        </div>
      </div>
    </footer>
  );
}
