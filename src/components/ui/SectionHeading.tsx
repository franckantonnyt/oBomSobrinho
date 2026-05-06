import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="reveal mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm sm:mb-5 sm:px-3 sm:text-[11px] sm:tracking-[0.22em]">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          <span className="eyebrow-shimmer">{eyebrow}</span>
        </span>
      ) : null}
      <h2 className="reveal-d1 font-display text-[1.6875rem] uppercase leading-[1.08] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "reveal-d2 mt-3 text-[0.9375rem] leading-relaxed text-fg-muted sm:mt-4 sm:text-base md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : ""
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
