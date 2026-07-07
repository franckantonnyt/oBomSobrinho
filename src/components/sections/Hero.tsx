import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { hero } from "@/content/hero";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroBackground } from "@/components/visuals/HeroBackground";
import { HeroHeadline } from "@/components/visuals/HeroHeadline";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40"
    >
      <HeroBackground />

      <div className="container-page relative flex flex-col items-center px-4 pb-16 text-center sm:pb-20 lg:pb-24">
        {/* Eyebrow */}
        <span
          className="hero-item inline-flex max-w-full items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-muted backdrop-blur-sm sm:px-3.5 sm:text-[11px] sm:tracking-[0.2em]"
          style={{ animationDelay: "0ms" }}
        >
          <Sparkles className="size-3.5 text-accent" aria-hidden />
          {hero.eyebrow}
        </span>

        {/* Headline — reveal palavra-por-palavra, centralizado */}
        <HeroHeadline
          titleLead={hero.titleLead}
          titleAccent={hero.titleAccent}
          className="mx-auto mt-6 max-w-4xl font-display text-[1.85rem] leading-[1.06] text-white sm:mt-8 sm:text-[2.75rem] sm:leading-[1.03] md:text-[52px] lg:text-[64px]"
        />

        {/* Subtitle — uma linha só, mata a objeção de "trocar tudo" */}
        <p
          className="hero-item mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-fg-muted sm:mt-7 sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="hero-item mt-8 flex w-full flex-col items-center gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-3"
          style={{ animationDelay: "270ms" }}
        >
          <WhatsAppButton
            size="lg"
            variant="premium"
            icon={false}
            message={hero.primaryMessage}
            className="w-full justify-center sm:w-auto lg:px-8 lg:py-[1.125rem] lg:text-lg"
          >
            {hero.primaryCta}
          </WhatsAppButton>
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
          style={{ animationDelay: "330ms" }}
        >
          {hero.primaryCtaMicro}
        </p>
      </div>

      {/* Faixa: dores — fora da dobra principal */}
      <div
        className="hero-item relative border-t border-white/[0.06] bg-white/[0.02] py-10 backdrop-blur-sm sm:py-11"
        style={{ animationDelay: "420ms" }}
      >
        <div className="container-page">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[12px]">
            {hero.painLead}
          </p>
          <div className="mx-auto mt-6 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {hero.painPoints.map((p) => (
              <div key={p} className="flex items-start gap-3 text-left">
                <span
                  aria-hidden
                  className="mt-0.5 grid size-[22px] shrink-0 place-items-center rounded-md border border-border-strong bg-white/[0.06]"
                >
                  <X className="size-[11px] text-accent" />
                </span>
                <span className="text-[13.5px] leading-snug text-fg-muted">
                  {p}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
