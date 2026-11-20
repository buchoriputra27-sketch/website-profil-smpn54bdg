import { SCHOOL } from "@/lib/school-data";
import { SmartImage } from "./SmartImage";
import { cn } from "@/lib/utils";

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <SmartImage
        src={SCHOOL.logo}
        alt="Logo SMPN 54 Bandung"
        loading="eager"
        className="h-11 w-[3.2rem] shrink-0"
        imgClassName="object-contain drop-shadow-md"
        fallback={
          <span className="flex h-full w-full items-center justify-center rounded-full bg-ocean font-display text-base font-bold text-gold">
            54
          </span>
        }
      />
      <span className="leading-tight">
        <span className={cn("block font-display text-lg font-semibold", light ? "text-primary-foreground" : "text-ocean-deep")}>
          SMPN 54 Bandung
        </span>
        <span className={cn("block text-[0.65rem] font-semibold uppercase tracking-[0.25em]", light ? "text-gold" : "text-primary")}>
          {SCHOOL.slogan}
        </span>
      </span>
    </span>
  );
}
