import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { hero } from "@/content/hero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { OperationConstellation } from "@/components/visuals/OperationConstellation";
import { MeshBackground } from "@/components/visuals/MeshBackground";
import { HeroHeadline } from "@/components/visuals/HeroHeadline";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pb-24 pt-10 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-24"
    >
      <MeshBackground />

      <div className="container-page relative mt-8">
        <div className="grid min-w-0 items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="min-w-0 max-w-none">
            {/* Eyebrow */}
            <span
              className="hero-item z-0 inline-flex max-w-full items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-muted backdrop-blur-sm sm:px-3.5 sm:text-[11px] sm:tracking-[0.2em]"
              style={{ animationDelay: "0ms" }}
            >
              <Sparkles className="size-3.5 text-accent" aria-hidden />
              {hero.eyebrow}
            </span>

            {/* Headline — Framer Motion word-by-word reveal */}
            <HeroHeadline
              titleLead={hero.titleLead}
              titleAccents={hero.titleAccents}
              className="mt-5 font-display text-[1.6875rem] uppercase leading-[1.08] text-white sm:mt-8 sm:text-[2.625rem] sm:leading-[1.04] md:text-[52px] lg:text-[70px]"
            />

            {/* Subtitle */}
            <p
              className="hero-item mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-fg-muted sm:mt-5 sm:text-lg md:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              {hero.subtitle}
            </p>

            {/* Pain points */}
            <div
              className="hero-item mt-7 max-w-xl rounded-xl border-l-2 border-accent bg-white/[0.025] py-3.5 pl-4 pr-3 sm:mt-9 sm:rounded-2xl sm:py-4 sm:pl-5 sm:pr-4"
              style={{ animationDelay: "270ms" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[12px]">
                {hero.painLead}
              </p>
              <ul className="mt-3 space-y-2">
                {hero.painPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-fg-muted sm:text-[14.5px]"
                  >
                    <span
                      aria-hidden
                      className="mt-[5px] size-1.5 shrink-0 rounded-full bg-accent/60"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div
              className="hero-item mt-8 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-3"
              style={{ animationDelay: "360ms" }}
            >
              <MagneticButton
                strength={0.18}
                className="block w-full sm:inline-block sm:w-auto"
              >
                <WhatsAppButton
                  size="lg"
                  variant="wa"
                  message={hero.primaryMessage}
                  className="w-full justify-center lg:px-8 lg:py-[1.125rem] lg:text-lg"
                >
                  {hero.primaryCta}
                </WhatsAppButton>
              </MagneticButton>
              <Link
                href={hero.secondaryHref}
                className="group inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[0.9375rem] font-semibold text-fg backdrop-blur-sm transition-colors hover:border-brand-400 hover:bg-white/10 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
              >
                {hero.secondaryCta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
            <p
              className="hero-item mt-3 text-[12.5px] text-fg-dim"
              style={{ animationDelay: "420ms" }}
            >
              {hero.primaryCtaMicro}
            </p>
          </div>

          {/* Right column — constellation + live activity panel */}
          <div
            className="hero-item relative mx-auto min-w-0 w-full max-w-[520px] lg:mx-0 lg:-mt-6"
            style={{ animationDelay: "120ms" }}
          >
            <OperationConstellation />

            {/* Desktop-only "Operação ao vivo" — equilibra a coluna direita
                contra a stack à esquerda (pain points + CTAs) e reforça o
                tom de "sistema processando" que a constelação inicia. */}
            <div className="mt-5 hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
                  <span className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white">
                    <span
                      aria-hidden
                      className="size-1.5 rounded-full bg-wa shadow-[0_0_8px_rgba(37,211,102,0.8)]"
                    />
                    {hero.liveLogTitle}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-fg-dim">
                    últimos minutos
                  </span>
                </div>
                <ul className="divide-y divide-white/[0.04]">
                  {hero.liveLog.map((event, i) => (
                    <li
                      key={event.label}
                      className="flex items-center gap-3 px-4 py-2.5"
                      style={{ opacity: 1 - i * 0.12 }}
                    >
                      <span
                        aria-hidden
                        className="size-1.5 shrink-0 rounded-full bg-wa/80"
                      />
                      <span className="flex-1 truncate text-[12.5px] text-fg-muted">
                        {event.label}
                      </span>
                      <span className="font-mono text-[10.5px] tracking-wide text-fg-dim">
                        {event.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile-only status ticker — one pill visible at a time via event-pop cycle */}
            <div
              className="relative mt-4 h-9 overflow-hidden lg:hidden"
              aria-hidden
            >
              {(
                [
                  { label: "Pedido confirmado", delay: "0s" },
                  { label: "Pagamento aprovado", delay: "3s" },
                  { label: "Atendimento iniciado", delay: "6s" },
                ] as const
              ).map(({ label, delay }) => (
                <div
                  key={label}
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                >
                  <div
                    className="event-pill-motion flex items-center gap-1.5 whitespace-nowrap rounded-full border border-wa/30 bg-[#0a0a0f]/90 px-3 py-2 backdrop-blur-md"
                    style={{ animationDelay: delay }}
                  >
                    <span className="size-1.5 rounded-full bg-wa" />
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
