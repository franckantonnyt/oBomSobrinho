import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { atenda } from "@/content/atenda";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { AtendaInboxDemo } from "@/components/visuals/AtendaInboxDemo";
import { HeroBackground } from "@/components/visuals/HeroBackground";
import { AtendaTeamDemo } from "@/components/visuals/AtendaTeamDemo";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: atenda.meta.title,
  description: atenda.meta.description,
  alternates: { canonical: "/atenda" },
  openGraph: { title: atenda.meta.title, description: atenda.meta.description, url: "/atenda" },
};

function SignupButton({ children, className }: { children: string; className?: string }) {
  return (
    <Link
      href={atenda.signupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-premium group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-semibold tracking-wide text-[#0e0d14] shadow-[0_10px_36px_-14px_rgba(0,0,0,0.5)] transition-[transform,box-shadow] duration-200 hover:shadow-[0_18px_48px_-14px_rgba(168,85,247,0.45)] sm:text-lg",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

const brl = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

export default function AtendaPage() {
  const { hero, team, plans, final, faq } = atenda;
  return (
    <>
      <Navbar cta={{ label: atenda.headerCta, href: atenda.signupUrl }} />
      <main id="main">
        {/* Hero + demo do atendimento (a primeira rolagem) */}
        <section className="relative isolate overflow-hidden pt-32 sm:pt-36 lg:pt-40">
          {/* Mesmo fundo do hero da home (luz, blobs e partículas subindo),
              limitado à altura do título para as partículas passarem por ele. */}
          <HeroBackground className="bottom-auto h-[720px] sm:h-[760px]" />
          <div className="container-page relative flex flex-col items-center px-4 pb-20 text-center sm:pb-24">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border-strong bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-fg-muted backdrop-blur-sm">
              <Sparkles className="size-3.5 text-accent" aria-hidden />
              {hero.eyebrow}
            </span>
            {/* Uma frase por linha: "A central inteligente / do seu WhatsApp." */}
            <h1 className="mx-auto mt-8 max-w-4xl text-balance font-display text-[2rem] leading-[1.05] text-white sm:text-[2.75rem] md:text-[52px] lg:text-[64px]">
              <span className="sm:block">{hero.titleLead}</span>{" "}
              <span className="bg-gradient-to-r from-brand-400 via-accent to-[#6f86ff] bg-clip-text text-transparent sm:block">
                {hero.titleAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-[0.9375rem] leading-relaxed text-fg-muted sm:text-lg">
              {hero.subtitle}
            </p>
            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <SignupButton className="w-full sm:w-auto">{hero.primaryCta}</SignupButton>
              <WhatsAppButton
                variant="outline"
                size="lg"
                message={hero.whatsappMessage}
                className="w-full justify-center sm:w-auto"
              >
                {hero.secondaryCta}
              </WhatsAppButton>
            </div>
            <p className="mt-3 text-[12.5px] text-fg-dim">{hero.micro}</p>

            <div className="mt-14 w-full sm:mt-16">
              <AtendaInboxDemo />
            </div>
          </div>
        </section>

        {/* Você entra quando precisa + funil (Advocacia) */}
        <section className="relative border-t border-white/5 py-24 sm:py-28">
          <div className="container-page">
            <SectionHeading eyebrow={team.eyebrow} title={team.title} />
            <AtendaTeamDemo />
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="relative border-t border-white/5 py-24 sm:py-28">
          <div className="container-page">
            <SectionHeading eyebrow={plans.eyebrow} title={plans.title} />
            <ul className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3 md:items-stretch">
              {plans.items.map((p) => (
                <li
                  key={p.name}
                  className={cn(
                    "glass-card flex flex-col p-7",
                    p.highlight && "glass-card-accent md:-my-3 md:py-10"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-white">{p.name}</h3>
                    {p.highlight && (
                      <span className="rounded-full border border-accent/50 bg-brand/30 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white">
                        {plans.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 flex items-baseline gap-1">
                    <span className="font-display text-[40px] leading-none text-white">{brl(p.priceBRL)}</span>
                    <span className="text-[14px] text-fg-dim">{plans.perMonth}</span>
                  </p>
                  {/* O Essencial lista tudo; os outros só o que muda em relação a ele. */}
                  {!p.base && (
                    <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-fg-dim">
                      {plans.inherits}
                    </p>
                  )}
                  <ul
                    className={cn(
                      "grid gap-3 text-[14.5px] leading-snug text-fg-muted",
                      p.base ? "mt-6" : "mt-3"
                    )}
                  >
                    {[plans.clients(p.clients), plans.seats(p.seats), ...(p.extras ?? [])].map((line) => (
                      <li key={line} className="flex items-start gap-2.5 font-semibold text-white">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {line}
                      </li>
                    ))}
                    {p.base &&
                      plans.included.map((line) => (
                        <li key={line} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 size-4 shrink-0 text-accent/70" aria-hidden />
                          {line}
                        </li>
                      ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    {p.highlight ? (
                      <SignupButton className="w-full px-6 py-3.5 sm:text-base">{plans.cta}</SignupButton>
                    ) : (
                      <Link
                        href={atenda.signupUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-strong bg-white/5 px-6 py-3.5 text-base font-semibold text-fg transition-colors duration-200 hover:border-brand-400 hover:bg-white/10"
                      >
                        {plans.cta}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-[13.5px] text-fg-dim">{plans.note}</p>
          </div>
        </section>

        {/* Fechamento */}
        <section className="relative pb-24">
          <div className="container-page">
            {/* Mesmo cartão do FinalCTA da home: gradiente, brilho respirando e
                a marca d'água do logo. */}
            <div className="relative isolate overflow-hidden rounded-[32px] border border-border-strong bg-gradient-to-br from-surface-2 via-brand/40 to-bg px-6 py-20 text-center sm:px-10 sm:py-24">
              <div
                aria-hidden
                className="orb-breathe pointer-events-none absolute -top-32 left-1/2 size-[520px] rounded-full bg-accent/25 blur-3xl"
              />
              <Image
                src="/logos/logo-watermark.png"
                alt=""
                aria-hidden
                width={2000}
                height={2000}
                className="pointer-events-none absolute -right-24 -top-24 size-[520px] select-none object-contain opacity-[0.06] sm:-right-16 sm:size-[640px]"
              />
              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-balance font-display text-[2rem] leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  {final.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base text-white/75 sm:text-lg">{final.text}</p>
                <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
                  {final.points.map((point) => (
                    <li
                      key={point}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-medium text-white/90 backdrop-blur-sm"
                    >
                      <Check className="size-3.5 text-wa" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex justify-center">
                  <SignupButton>{final.cta}</SignupButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-t border-white/5 py-24 sm:py-28">
          <div className="container-page">
            <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
            <dl className="mx-auto mt-12 grid max-w-3xl gap-4">
              {faq.items.map((f) => (
                <div key={f.q} className="glass-card p-6">
                  <dt className="font-display text-lg text-white">{f.q}</dt>
                  <dd className="mt-2 text-[14.5px] leading-relaxed text-fg-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
