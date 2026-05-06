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
      className="relative isolate overflow-hidden pb-32 pt-12 sm:pt-20 lg:pb-40 lg:pt-24"
    >
      <MeshBackground />

      <div className="container-page relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="max-w-none">
            {/* Eyebrow */}
            <span
              className="hero-item inline-flex items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted backdrop-blur-sm"
              style={{ animationDelay: "0ms" }}
            >
              <Sparkles className="size-3.5 text-accent" aria-hidden />
              {hero.eyebrow}
            </span>

            {/* Headline — Framer Motion word-by-word reveal */}
            <HeroHeadline
              titleLead={hero.titleLead}
              titleAccents={hero.titleAccents}
              className="mt-8 font-display text-[36px] uppercase leading-[1.04] text-white sm:text-[58px] lg:text-[70px]"
            />

            {/* Subtitle */}
            <p
              className="hero-item mt-5 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              {hero.subtitle}
            </p>

            {/* Pain points */}
            <div
              className="hero-item mt-9 max-w-xl rounded-2xl border-l-2 border-accent bg-white/[0.025] py-4 pl-5 pr-4"
              style={{ animationDelay: "270ms" }}
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
                {hero.painLead}
              </p>
              <ul className="mt-3 space-y-2">
                {hero.painPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[14.5px] leading-snug text-fg-muted"
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
              className="hero-item mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "360ms" }}
            >
              <MagneticButton strength={0.18}>
                <WhatsAppButton
                  size="xl"
                  variant="wa"
                  message={hero.primaryMessage}
                >
                  {hero.primaryCta}
                </WhatsAppButton>
              </MagneticButton>
              <Link
                href={hero.secondaryHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-base font-semibold text-fg backdrop-blur-sm transition-colors hover:border-brand-400 hover:bg-white/10"
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
            className="hero-item relative mx-auto w-full max-w-[520px] lg:mx-0 lg:-mt-6"
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
                  className="event-pill absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap rounded-full border border-wa/30 bg-[#0a0a0f]/90 px-3 py-2 backdrop-blur-md"
                  style={{ animationDelay: delay }}
                >
                  <span className="size-1.5 rounded-full bg-wa" />
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
