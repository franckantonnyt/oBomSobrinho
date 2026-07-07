import Image from "next/image";
import { finalCta } from "@/content/finalCta";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FinalCTA() {
  return (
    <section id="contato" className="relative scroll-mt-20 pb-20">
      <div className="container-page">
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
            <h2 className="reveal mx-auto max-w-3xl font-display text-4xl leading-[1.02] text-white sm:text-5xl lg:text-6xl">
              {finalCta.title}
            </h2>

            <div className="reveal-d1 mt-10 flex flex-col items-center gap-3">
              <WhatsAppButton
                size="xl"
                variant="premium"
                icon={false}
                message={finalCta.message}
                className="px-10 py-5 text-lg"
              >
                {finalCta.cta}
              </WhatsAppButton>
              <p className="text-[12.5px] text-white/70">{finalCta.ctaMicro}</p>
              <p className="mt-1 max-w-md text-[12px] text-white/55">
                {finalCta.scarcity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
