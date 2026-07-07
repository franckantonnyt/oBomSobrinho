import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "OBS: Sistemas com IA, Automação e Agentes de WhatsApp",
    template: "%s · OBS",
  },
  description:
    "Desenvolvimento de sistemas sob medida, sites, e-commerces, automações e agentes de IA no WhatsApp para clínicas, consultórios, advogados e pequenas e médias empresas.",
  applicationName: site.longName,
  keywords: [
    "desenvolvimento de sistemas",
    "automação empresarial",
    "agente de IA no WhatsApp",
    "chatbot inteligente",
    "site para clínica",
    "sistema para consultório",
    "automação para advogado",
    "integração de sistemas",
    "e-commerce sob medida",
    "IA para pequenas empresas",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.longName,
    title: "OBS: Sistemas com IA, Automação e Agentes de WhatsApp",
    description:
      "Sistemas sob medida, sites, e-commerces e agentes de IA no WhatsApp para clínicas, escritórios e pequenas empresas.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OBS: Sistemas com IA e Automação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OBS: Sistemas com IA, Automação e Agentes de WhatsApp",
    description:
      "Sistemas sob medida e agentes de IA no WhatsApp para pequenas e médias empresas.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/logos/logo-o-bom-sobrinho.png" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.longName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/logos/logo-o-bom-sobrinho.png`,
  sameAs: [site.instagram],
  description:
    "Agência de desenvolvimento de sistemas sob medida, sites, e-commerces e agentes de IA no WhatsApp.",
  areaServed: "BR",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["Portuguese"],
      url: site.url,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg text-fg antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
