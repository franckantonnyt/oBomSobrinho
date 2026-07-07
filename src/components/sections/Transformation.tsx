import { Check, X } from "lucide-react";
import { transformation } from "@/content/transformation";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Transformation() {
  const { beforeLabel, afterLabel, pairs } = transformation;

  return (
    <section className="relative overflow-hidden border-t border-white/5 py-24 sm:py-28">
      <div className="container-page relative">
        <SectionHeading
          eyebrow={transformation.eyebrow}
          title={transformation.title}
          subtitle={transformation.subtitle}
        />

        <div className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {/* Coluna "hoje" — apagada de propósito pra contrastar com o depois */}
          <div className="glass-card reveal p-6 sm:p-8">
            <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-fg-dim">
              <span aria-hidden className="size-1.5 rounded-full bg-fg-dim/60" />
              {beforeLabel}
            </p>
            <ul className="space-y-4">
              {pairs.map((pair) => (
                <li
                  key={pair.before}
                  className="flex items-start gap-3 text-[14.5px] leading-snug text-fg-muted"
                >
                  <X
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-fg-dim"
                  />
                  <span>{pair.before}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna "com o OBS" — destacada com glow e verde WhatsApp */}
          <div className="glass-card glass-card-accent reveal-d1 p-6 sm:p-8">
            <p className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-wa">
              <span
                aria-hidden
                className="size-1.5 rounded-full bg-wa shadow-[0_0_8px_rgba(37,211,102,0.8)]"
              />
              {afterLabel}
            </p>
            <ul className="space-y-4">
              {pairs.map((pair) => (
                <li
                  key={pair.after}
                  className="flex items-start gap-3 text-[14.5px] font-medium leading-snug text-white"
                >
                  <Check
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-wa"
                  />
                  <span>{pair.after}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
