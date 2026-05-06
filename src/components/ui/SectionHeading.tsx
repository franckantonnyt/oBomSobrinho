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
        <span className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          <span className="eyebrow-shimmer">{eyebrow}</span>
        </span>
      ) : null}
      <h2 className="reveal-d1 font-display text-4xl uppercase leading-[1.04] text-white sm:text-5xl lg:text-[56px]">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "reveal-d2 mt-4 text-base leading-relaxed text-fg-muted",
            align === "center" ? "mx-auto max-w-2xl" : ""
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
