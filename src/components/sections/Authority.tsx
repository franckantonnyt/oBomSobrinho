import { authority } from "@/content/authority";

export function Authority() {
  // Triple the list so the marquee loops seamlessly on wide screens.
  const loop = [...authority.examples, ...authority.examples, ...authority.examples];

  return (
    <section
      aria-label="Soluções que construímos"
      className="relative overflow-hidden border-y border-white/5 bg-white/[0.015] py-10"
    >
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-base uppercase tracking-[0.18em] text-white sm:text-lg">
            {authority.line}
          </p>
          <p className="mt-1.5 text-[12.5px] text-fg-muted">
            {authority.sub}
          </p>
        </div>
      </div>

      {/* Horizontal marquee with edge fade — examples flow continuously */}
      <div
        className="relative mt-7"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <ul
          className="marquee-track flex w-max items-center gap-2.5"
          aria-hidden
        >
          {loop.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={`${s.name}-${i}`}
                className="group/pill shrink-0 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-3.5 transition-colors hover:border-accent/40 hover:bg-accent/[0.08]"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-border-strong bg-gradient-to-br from-brand/30 to-accent/10 text-accent transition-colors group-hover/pill:text-white">
                  <Icon className="size-3.5" aria-hidden />
                </span>
                <span className="text-[12px] font-semibold text-white">
                  {s.name}
                </span>
                <span className="text-[11px] text-fg-dim">
                  · {s.segment}
                </span>
                <span className="hidden text-[11px] text-wa/80 sm:inline">
                  → {s.result}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Static list for screen readers */}
        <ul className="sr-only">
          {authority.examples.map((s) => (
            <li key={s.name}>
              {s.name}, {s.segment}: {s.result}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
