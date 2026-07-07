"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full border-b border-transparent",
        "transition-[border-color,background-color,backdrop-filter] duration-300 ease-out motion-reduce:transition-none",
        scrolled
          ? "border-white/5 bg-bg/80 backdrop-blur-md backdrop-saturate-150"
          : "bg-bg/60 [backdrop-filter:none] [-webkit-backdrop-filter:none]"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex items-center md:justify-self-start"
          aria-label={`${site.longName}, início`}
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
          className="hidden items-center gap-8 md:flex md:justify-self-center"
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

        <div className="hidden md:block md:justify-self-end">
          <WhatsAppButton size="md" variant="premium" icon={false}>
            {site.ctaShort}
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
            <WhatsAppButton
              size="md"
              variant="premium"
              icon={false}
              className="w-full"
            >
              {site.ctaShort}
            </WhatsAppButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
