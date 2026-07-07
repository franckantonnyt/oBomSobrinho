import { Plus } from "lucide-react";
import { faq } from "@/content/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  // FAQPage schema — boosts rich snippets in Google Search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="relative scroll-mt-20 border-t border-white/5 py-24 sm:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-page">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
        />

        <ul className="mx-auto mt-14 max-w-3xl space-y-3">
          {faq.items.map((item) => (
            <li key={item.q} className="glass-card">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-white/[0.025]">
                  <h3 className="font-display text-base tracking-tight text-white sm:text-lg">
                    {item.q}
                  </h3>
                  <Plus
                    aria-hidden
                    className="size-5 shrink-0 text-fg-muted transition-transform duration-300 group-open:rotate-45 group-open:text-accent"
                  />
                </summary>
                <div className="border-t border-white/5 px-5 pb-5 pt-4 text-[14.5px] leading-relaxed text-fg-muted">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
