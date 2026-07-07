import { services } from "@/content/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section
      id="servicos"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24 sm:py-28"
    >
      {/* Subtle top-center radial glow — creates section depth variation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[320px] bg-[radial-gradient(ellipse_55%_55%_at_50%_0%,rgba(107,33,232,0.1),transparent_70%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          subtitle={services.subtitle}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.items.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <li
                key={svc.title}
                className={`${i % 2 === 0 ? "reveal" : "reveal-d1"} glass-card group p-7`}
              >
                <div className="relative flex items-start gap-4">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-border-strong bg-gradient-to-br from-brand/25 to-accent/10 text-white transition-[border-color,box-shadow] duration-300 group-hover:border-brand-400/60 group-hover:shadow-[0_0_14px_-4px_rgba(168,85,247,0.4)]">
                    <Icon className="icon-wobble size-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-white sm:text-[22px]">
                      {svc.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-fg-muted">
                      {svc.outcome}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
