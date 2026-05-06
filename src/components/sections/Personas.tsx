import { personas } from "@/content/personas";

export function Personas() {
  // Triple the list so the marquee loops seamlessly on wide screens.
  const loop = [...personas.segments, ...personas.segments, ...personas.segments];

  return (
    <section
      aria-label="Setores atendidos"
      className="relative overflow-hidden border-t border-white/5 py-10"
    >
      <div className="container-page">
        <p className="reveal mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-fg-dim">
          {personas.lead}
        </p>
      </div>

      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, #000 12%, #000 88%, transparent 100%)",
        }}
      >
        <ul
          className="marquee-track flex w-max items-center gap-x-10"
          aria-hidden
        >
          {loop.map((s, i) => (
            <li
              key={`${s}-${i}`}
              className="inline-flex shrink-0 items-center gap-x-10 text-[15px]"
            >
              <span className="font-display uppercase tracking-[0.18em] text-fg-muted transition-colors hover:text-white">
                {s}
              </span>
              <span aria-hidden className="size-1.5 rounded-full bg-accent/50" />
            </li>
          ))}
        </ul>

        {/* Static list for screen readers */}
        <ul className="sr-only">
          {personas.segments.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
