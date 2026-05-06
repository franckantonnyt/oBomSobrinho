import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { buildWhatsAppUrl, getContactEmail } from "@/lib/whatsapp";

export function Footer() {
  const email = getContactEmail();
  const wa = buildWhatsAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#08070f]">
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="group inline-flex items-center"
            aria-label={`${site.longName} — início`}
          >
            <Image
              src="/logos/logo-o-bom-sobrinho.png"
              alt={site.longName}
              width={2000}
              height={2000}
              className="size-12 object-contain transition-[filter,transform] duration-500 group-hover:[filter:drop-shadow(0_0_18px_rgba(168,85,247,0.55))] group-hover:scale-105"
            />
          </Link>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-white"
              >
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </a>
            </li>
            {email ? (
              <li>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-white"
                >
                  <Mail className="size-4" aria-hidden />
                  {email}
                </a>
              </li>
            ) : null}
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-white"
              >
                <Instagram className="size-4" aria-hidden />
                @obomsobrinho
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-[12px] text-fg-dim">
          <p>© {year} {site.longName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
