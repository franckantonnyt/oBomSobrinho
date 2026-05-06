"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-white/5 bg-bg/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          aria-label={`${site.longName} — início`}
        >
          <Image
            src="/logos/logo-o-bom-sobrinho.png"
            alt={site.longName}
            width={2000}
            height={2000}
            className="size-11 shrink-0 object-contain"
            priority
          />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-fg-muted transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton size="md" variant="wa" icon>
            Falar no WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-bg/95 backdrop-blur md:hidden">
          <div className="container-page flex flex-col gap-4 py-5">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-fg-muted hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <WhatsAppButton size="md" variant="wa" className="w-full">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
