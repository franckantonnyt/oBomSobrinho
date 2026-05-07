import { ArrowDown, Check } from "lucide-react";
import { operationFlow } from "@/content/operationFlow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OperationFlow() {
  const SystemIcon = operationFlow.systemIcon;
  const SuccessIcon = operationFlow.successIcon;

  return (
    <section
      id="fluxo"
      className="relative scroll-mt-20 overflow-x-clip border-t border-white/5 py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(107,33,232,0.18),transparent_70%)]"
      />

      <div className="container-page relative">
        <SectionHeading
          eyebrow={operationFlow.eyebrow}
          title={operationFlow.title}
          subtitle={operationFlow.subtitle}
        />

        {/* SCHEMATIC FLOW */}
        <div className="mx-auto mt-20 max-w-5xl">
          <div className="relative">
            {/* Row 1 — entry channels */}
            <div>
              <p className="reveal text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-fg-dim">
                Entrada
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-4 md:gap-5">
                {operationFlow.entryChannels.map((c, i) => {
                  const Icon = c.icon;
                  const revealClass = i === 0 ? "reveal" : i === 1 ? "reveal-d1" : "reveal-d2";
                  return (
                    <li
                      key={c.label}
                      className={revealClass}
                      style={{ animationDelay: `${i * 0.6}s` }}
                    >
                      <div className="card-breathe flex min-h-[3.25rem] flex-row items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 sm:min-h-0 sm:justify-center sm:py-3 sm:pl-4 sm:pr-4 md:py-4">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border-strong bg-gradient-to-br from-brand/30 to-accent/10 text-white">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-[13px] uppercase tracking-wide text-white">
                            {c.label}
                          </p>
                          {c.meta ? (
                            <p className="text-[10.5px] text-fg-dim">{c.meta}</p>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Vertical line entry → system, with travelling glow dot */}
            <div aria-hidden className="relative my-5 flex items-center justify-center max-sm:my-4">
              <svg
                viewBox="0 0 4 56"
                preserveAspectRatio="none"
                className="h-14 w-1.5"
              >
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="56"
                  stroke="rgba(168,85,247,0.55)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  className="flow-dash"
                />
              </svg>
              <span className="pointer-events-none absolute left-1/2 top-0 h-14 w-2 -translate-x-1/2 overflow-hidden">
                <span className="flow-dot-down absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(168,85,247,0.7)]" />
              </span>
            </div>

            {/* Row 2 — SISTEMA central (cérebro operacional) */}
            <div className="relative flex justify-center">
              {/* layered glow halos */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[120px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[80px]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[40px]"
              />

              <div className="constel-hub relative grid w-full max-w-md place-items-center overflow-hidden rounded-2xl border border-border-strong bg-gradient-to-br from-bg-deep via-surface-2 to-bg px-4 py-6 shadow-[0_0_80px_-10px_rgba(168,85,247,0.7),inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-3xl sm:px-8 sm:py-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.18),transparent_70%)] sm:rounded-3xl"
                />
                <div className="relative flex w-full flex-col items-center gap-3 text-center sm:flex-row sm:gap-3.5 sm:text-left">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl border border-border-strong bg-gradient-to-br from-brand/50 to-accent/20 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] sm:size-14">
                    <SystemIcon className="size-6 shrink-0 sm:size-7" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg uppercase tracking-[0.14em] text-white sm:text-2xl sm:tracking-[0.16em]">
                      {operationFlow.systemNode.label}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-accent sm:mt-0.5 sm:text-[11px] sm:tracking-[0.18em]">
                      {operationFlow.systemNode.sub}
                    </p>
                  </div>
                </div>
                <p className="relative mt-4 inline-flex items-center gap-1.5 rounded-full border border-wa/30 bg-wa/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-wa">
                  <span className="size-1.5 rounded-full bg-wa" />
                  Operação ativa
                </p>
              </div>
            </div>

            <div aria-hidden className="my-5 flex items-center justify-center max-sm:my-4">
              <svg
                viewBox="0 0 240 56"
                preserveAspectRatio="none"
                className="h-12 w-full max-w-md max-sm:h-10"
              >
                {[40, 100, 140, 200].map((x, i) => (
                  <line
                    key={i}
                    x1="120"
                    y1="0"
                    x2={x}
                    y2="56"
                    stroke="rgba(168,85,247,0.55)"
                    strokeWidth="0.6"
                    strokeDasharray="3 3"
                    className="flow-dash"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>

            {/* Row 3 — destinations */}
            <div>
              <p className="reveal text-center text-[10.5px] font-semibold uppercase tracking-[0.22em] text-fg-dim">
                Setores conectados
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
                {operationFlow.destinations.map((d, i) => {
                  const Icon = d.icon;
                  const revealClass = i % 2 === 0 ? "reveal" : "reveal-d1";
                  return (
                    <li
                      key={d.label}
                      className={revealClass}
                      style={{ animationDelay: `${0.3 + i * 0.6}s` }}
                    >
                      <div className="card-breathe flex min-h-[4.875rem] flex-col items-center justify-center gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-2.5 text-center sm:min-h-0 sm:gap-2 sm:px-3 sm:py-4">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border-strong bg-gradient-to-br from-brand/30 to-accent/10 text-white sm:size-9">
                          <Icon className="size-3.5 sm:size-4" aria-hidden />
                        </span>
                        <p className="font-display text-[11px] uppercase leading-snug tracking-wide text-white sm:text-[13px]">
                          {d.label}
                        </p>
                        {d.meta ? (
                          <p className="text-[9.5px] leading-snug text-fg-dim sm:text-[10.5px]">
                            {d.meta}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* loopback — confirmação */}
            <div aria-hidden className="my-6 flex items-center justify-center">
              <ArrowDown className="size-5 text-accent" />
            </div>
            <div className="reveal-d1 mx-auto flex min-w-0 max-w-md flex-col gap-3 rounded-2xl border border-wa/30 bg-wa/[0.06] px-4 py-3 sm:flex-row sm:items-center sm:gap-3 sm:px-5 sm:py-4">
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-wa/15 text-wa">
                <SuccessIcon className="size-4" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-semibold leading-snug text-white sm:text-[13px]">
                  {operationFlow.loopback.label}
                </p>
                <p className="mt-0.5 text-[10px] leading-snug text-fg-muted sm:text-[11px]">
                  {operationFlow.loopback.sub}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFITS GRID */}
        <ul className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {operationFlow.benefits.map((b, i) => (
            <li
              key={b.label}
              className={`${i % 2 === 0 ? "reveal" : "reveal-d1"} flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3`}
            >
              <span className="grid size-6 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
                <Check className="size-3.5" aria-hidden strokeWidth={3} />
              </span>
              <span className="text-[14px] text-white">{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
