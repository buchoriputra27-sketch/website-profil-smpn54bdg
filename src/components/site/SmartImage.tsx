import { useEffect, useRef, useState, type ReactNode } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallback?: ReactNode;
  loading?: "lazy" | "eager";
};

/** Image that swaps to an elegant placeholder when the file is missing. */
export function SmartImage({ src, alt, className, imgClassName, fallback, loading = "lazy" }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  // An error that fired before hydration is never seen by React's onError.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {failed ? (
        fallback ?? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-ocean text-primary-foreground/80">
            <ImageIcon className="h-8 w-8 opacity-70" aria-hidden />
            <span className="px-4 text-center text-xs font-medium tracking-wide">{alt}</span>
          </div>
        )
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={loading}
          onError={() => setFailed(true)}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      )}
    </div>
  );
}
