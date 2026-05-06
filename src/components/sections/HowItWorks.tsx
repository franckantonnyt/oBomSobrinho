import { howItWorks } from "@/content/howItWorks";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24 sm:py-28"
    >
      {/* Asymmetric right-side glow — contrasts with Services' centred glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 h-full w-[480px] bg-[radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(168,85,247,0.07),transparent_70%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
        />

        <div className="mt-14">
          {/* Connector — flows horizontally between the 3 step pills (desktop only) */}
          <div
            aria-hidden
            className="mb-4 hidden items-center justify-center gap-3 md:flex"
          >
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(168,85,247,0.6)]" />
            <svg
              viewBox="0 0 600 8"
              preserveAspectRatio="none"
              className="h-2 w-72"
            >
              <line
                x1="0"
                y1="4"
                x2="600"
                y2="4"
                stroke="rgba(168, 85, 247, 0.55)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="flow-dash"
              />
            </svg>
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(168,85,247,0.6)]" />
            <svg
              viewBox="0 0 600 8"
              preserveAspectRatio="none"
              className="h-2 w-72"
            >
              <line
                x1="0"
                y1="4"
                x2="600"
                y2="4"
                stroke="rgba(168, 85, 247, 0.55)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="flow-dash"
                style={{ animationDelay: "0.3s" }}
              />
            </svg>
            <span className="size-2 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(168,85,247,0.6)]" />
          </div>

          <ol className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3">
            {howItWorks.steps.map((step, i) => (
              <li
                key={step.number}
                className={`${i === 0 ? "reveal" : i === 1 ? "reveal-d1" : "reveal-d2"} group relative bg-bg p-7 transition-[background,box-shadow] duration-300 hover:bg-white/[0.025] hover:shadow-[inset_0_0_30px_-12px_rgba(168,85,247,0.14)]`}
              >
                <span className="step-pop inline-block bg-gradient-to-br from-accent to-brand-400 bg-clip-text font-display text-6xl leading-none text-transparent transition-transform duration-300 group-hover:scale-105">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-2xl uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-fg-muted">
                  {step.line}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
