import Link from "next/link";
import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type Variant = "primary" | "outline" | "wa" | "premium";
type Size = "md" | "lg" | "xl";

export function WhatsAppButton({
  children,
  message,
  variant = "primary",
  size = "lg",
  className,
  icon = true,
  ariaLabel,
}: {
  children: ReactNode;
  message?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: boolean;
  ariaLabel?: string;
}) {
  const href = buildWhatsAppUrl(message);

  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-[transform,box-shadow,background] duration-200 will-change-transform focus-visible:outline-2 focus-visible:outline-offset-4";

  const variants: Record<Variant, string> = {
    primary:
      "bg-brand text-white shadow-[0_10px_40px_-10px_rgba(107,33,232,0.7)] hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(107,33,232,0.9)]",
    outline:
      "border border-border-strong bg-white/5 text-fg backdrop-blur-sm hover:bg-white/10 hover:border-brand-400",
    wa: "btn-shimmer bg-wa text-[#07351a] shadow-[0_10px_40px_-10px_rgba(37,211,102,0.6)] hover:bg-wa-600 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_-12px_rgba(37,211,102,0.75)]",
    // Pill claro com borda em gradiente animado (roxo/verde) — CTA de destaque
    // que não depende do verde do WhatsApp pra parecer premium.
    premium:
      "btn-premium text-[#0e0d14] shadow-[0_10px_36px_-14px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_48px_-14px_rgba(168,85,247,0.45)]",
  };

  const sizes: Record<Size, string> = {
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
    xl: "px-8 py-4.5 text-lg",
  };

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? "Falar no WhatsApp"}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {icon ? <MessageCircle className="size-5" aria-hidden /> : null}
      <span>{children}</span>
    </Link>
  );
}
