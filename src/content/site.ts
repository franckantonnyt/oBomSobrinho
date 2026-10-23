/** Fallback público; produção pode sobrescrever via NEXT_PUBLIC_WHATSAPP_NUMBER. */
export const defaultWhatsAppNumber = "5533984033279";

export const site = {
  name: "OBS",
  longName: "O Bom Sobrinho",
  tagline: "Operação inteligente · O trabalho repetitivo no automático",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://obomsobrinho.com.br",
  instagram: "https://instagram.com/obomsobrinho",
  // Label curto do CTA premium (navbar, FAB) — a versão longa fica no Hero/FinalCTA.
  ctaShort: "Diagnóstico gratuito",
  nav: [
    { label: "Serviços", href: "/#servicos" },
    { label: "Atenda", href: "/atenda" },
    { label: "Como funciona", href: "/#como-funciona" },
    { label: "FAQ", href: "/#faq" },
  ],
} as const;
