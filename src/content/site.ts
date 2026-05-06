export const site = {
  name: "OBS",
  longName: "O Bom Sobrinho",
  tagline: "Operação inteligente · Sistemas conectados",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://obomsobrinho.com.br",
  instagram: "https://instagram.com/obomsobrinho",
  nav: [
    { label: "Serviços", href: "#servicos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "FAQ", href: "#faq" },
  ],
} as const;
