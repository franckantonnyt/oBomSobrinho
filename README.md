# OBS — Site institucional

Site institucional da OBS (O Bom Sobrinho) — agência de desenvolvimento de
sistemas sob medida, automações e agentes de WhatsApp para PMEs.

Single page, dark-first, Next.js 15 + TypeScript estrito, 100% SSG.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript (strict)
- Tailwind CSS v4 (CSS-first via `@theme` em `globals.css`)
- Framer Motion (animações pontuais — Hero word-by-word + typewriter)
- Scroll-driven CSS animations (`animation-timeline: view()`)
- Lucide React (ícones)
- next/font (Bebas Neue nos títulos, Inter no corpo)

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

Scripts disponíveis:

- `npm run dev` — servidor de desenvolvimento
- `npm run dev:clean` — limpa cache e roda dev
- `npm run build` — build de produção
- `npm run start` — servir o build
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`
- `npm run clean` — apaga `.next` + `tsbuildinfo`

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5511987654321   # formato internacional, sem + nem espaço
NEXT_PUBLIC_CONTACT_EMAIL=contato@obomsobrinho.com.br
NEXT_PUBLIC_SITE_URL=https://obomsobrinho.com.br
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX              # opcional
```

## Como editar a copy do site

Toda a copy fica em `src/content/*.ts` como objetos TypeScript. Editar texto
**não exige** mexer em JSX.

| Arquivo | Seção |
| --- | --- |
| `src/content/site.ts` | Nome, navbar, redes |
| `src/content/hero.ts` | Hero: eyebrow, headline, sub, pains, CTAs |
| `src/content/authority.ts` | Linha de autoridade + grid de exemplos |
| `src/content/services.ts` | Serviços (4 cards com ícone) |
| `src/content/personas.ts` | Lista de segmentos atendidos |
| `src/content/operationFlow.ts` | Constelação da operação + benefícios |
| `src/content/howItWorks.ts` | Timeline de 3 passos |
| `src/content/faq.ts` | Perguntas e respostas |
| `src/content/finalCta.ts` | CTA final |

Exemplo — trocar a headline do Hero:

```ts
// src/content/hero.ts
export const hero = {
  titleLead: "Processos manuais criam gargalos.",
  titleAccent: "Fluxos inteligentes escalam.",
  // ...
};
```

## Estrutura de pastas

```
src/
├── app/                    # App Router: layout, page, globals.css, sitemap, robots
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Authority, Services, Personas,
│   │                       # OperationFlow, HowItWorks, FAQ, FinalCTA
│   ├── ui/                 # SectionHeading, WhatsAppButton
│   └── visuals/            # HeroHeadline, MeshBackground, OperationConstellation
├── content/                # Toda a copy do site em objetos TS
└── lib/                    # cn (classnames), whatsapp (URL builder)
```

Ordem das seções na home:
Hero → Authority → Services → Personas → OperationFlow → HowItWorks → FAQ → FinalCTA.

## Design tokens

Os tokens vivem em `src/app/globals.css` dentro do bloco `@theme` (Tailwind v4).
Alterar a cor primária é uma linha:

```css
@theme {
  --color-brand: #6b21e8;         /* roxo principal */
  --color-accent: #a855f7;        /* destaque */
  --color-wa: #25d366;            /* verde WhatsApp */
  /* ... */
}
```

Utilities customizadas (também em `globals.css`):
- `container-page` — wrapper centralizado, max-width 1200px
- `glow-ring` — borda/sombra roxa padrão
- `btn-shimmer` — sweep de brilho no hover dos CTAs
- `reveal` / `reveal-pop` (`-d1`/`-d2`/`-d3`) — entrada por scroll

## Deploy

Otimizado para Vercel. `npm run build` gera páginas estáticas — o site é
100% SSG, roda como arquivos estáticos em qualquer CDN.

```bash
vercel --prod
```

## Acessibilidade & performance

- Lighthouse-alvo ≥95 em Performance, Accessibility, Best Practices, SEO
- `prefers-reduced-motion: reduce` desliga todas as animações (reset no fim do `globals.css`)
- Navegação 100% por teclado
- `next/font` com `display: swap`
- Imagens em `next/image` (AVIF/WebP)
- `sitemap.xml`, `robots.txt` e JSON-LD Organization gerados automaticamente
