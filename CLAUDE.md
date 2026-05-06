# CLAUDE.md — OBS Site Institucional

Site institucional **OBS (O Bom Sobrinho)** — agência que constrói sistemas sob medida, automações e agentes de WhatsApp para PMEs. Single-page, dark-first, otimizado pra conversão por WhatsApp (sem formulário).

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** estrito (`strict: true`)
- **Tailwind CSS v4** — CSS-first via `@theme` em `src/app/globals.css` (sem `tailwind.config`)
- **Framer Motion** — animações pontuais (Hero word-by-word)
- **Scroll-driven CSS animations** (`animation-timeline: view()`) — Chrome/Edge 115+, com fallback gracioso
- **Lucide React** — ícones
- **next/font** — Bebas Neue (display) + Inter (body)
- 100% **SSG** — roda como estático em qualquer CDN

## Comandos

```bash
npm install
npm run dev         # http://localhost:3000
npm run dev:clean   # limpa .next/tsconfig.tsbuildinfo e roda dev
npm run build       # build de produção
npm run start       # serve build
npm run lint        # ESLint (next lint)
npm run typecheck   # tsc --noEmit
npm run clean       # apaga .next + tsbuildinfo
```

## Estrutura real

```
src/
├── app/
│   ├── globals.css        # @theme tokens + keyframes + scroll-reveal
│   ├── layout.tsx         # metadata, fonts, JSON-LD Organization
│   ├── page.tsx           # composição das seções
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/            # Navbar, Footer
│   ├── sections/          # Hero, Authority, Services, Personas,
│   │                      # OperationFlow, HowItWorks, FAQ, FinalCTA
│   ├── ui/                # SectionHeading, WhatsAppButton
│   └── visuals/           # HeroHeadline, MeshBackground, OperationConstellation
├── content/               # toda a copy em objetos TS tipados
│   ├── site.ts            # nome, navbar, redes
│   ├── hero.ts            # eyebrow, headline, pains, CTAs
│   ├── authority.ts       # exemplos de operações
│   ├── services.ts        # 4 serviços + ícones
│   ├── personas.ts        # segmentos atendidos
│   ├── operationFlow.ts   # nodes da constelação + benefícios
│   ├── howItWorks.ts      # 3 passos
│   ├── faq.ts             # perguntas/respostas
│   └── finalCta.ts        # CTA final
└── lib/
    ├── cn.ts              # clsx + tailwind-merge
    └── whatsapp.ts        # buildWhatsAppUrl + getContactEmail
```

**Ordem das seções na home** (`src/app/page.tsx`):
Hero → Authority → Services → Personas → OperationFlow → HowItWorks → FAQ → FinalCTA.

## Como a copy funciona

**Regra-mãe**: nenhum texto vai hardcoded em JSX. Tudo vem de `src/content/*.ts`.

Trocar a headline do hero é mexer em **um arquivo só**:

```ts
// src/content/hero.ts
export const hero = {
  titleLead: "Processos manuais criam gargalos.",
  titleAccent: "Fluxos inteligentes escalam.",
  // ...
};
```

Adicionar uma pergunta ao FAQ → editar o array `items` em `src/content/faq.ts`. Mesma lógica para serviços, personas etc.

## Design tokens

Tudo em `src/app/globals.css` no bloco `@theme`. Trocar a cor primária = uma linha:

```css
@theme {
  --color-bg:        #0a0a0f;   /* fundo */
  --color-brand:     #6b21e8;   /* roxo principal */
  --color-accent:    #a855f7;   /* destaque */
  --color-wa:        #25d366;   /* verde WhatsApp */
  --font-display:    "Bebas Neue", ...;
  --font-sans:       "Inter", ...;
}
```

Utilities customizadas (também em `globals.css`):
- `container-page` — wrapper centralizado, max-width 1200px
- `glow-ring` — sombra/borda roxa padrão dos cards
- `btn-shimmer` — sweep de brilho no hover dos CTAs
- `reveal` / `reveal-pop` (+ delays `-d1`, `-d2`, `-d3`) — entrada por scroll

## Animações — onde mora cada coisa

| Tipo | Onde | Quando usar |
| --- | --- | --- |
| Hero headline word-by-word | `components/visuals/HeroHeadline.tsx` (Framer Motion) | Só no título do Hero |
| Mesh radial gradient (hero bg) | `components/visuals/MeshBackground.tsx` | Decorativo, só no Hero |
| Constelação da operação | `components/visuals/OperationConstellation.tsx` + keyframes `constel-*` | OperationFlow / coluna direita do Hero |
| Scroll-reveal genérico | classes `reveal`, `reveal-d1/d2`, `reveal-pop*` | Qualquer seção que precise aparecer ao entrar na viewport |
| Hero entrada (eyebrow, sub, CTAs) | classe `hero-item` + `animationDelay` inline | Só no Hero |
| Hover shimmer dos CTAs | classe `btn-shimmer` | Botões primários |

**Sempre respeitar `prefers-reduced-motion: reduce`** — todas as animações têm fallback no final do `globals.css`. Ao adicionar nova animação, incluir o reset no bloco `@media (prefers-reduced-motion: reduce)`.

## WhatsApp = ação principal

CTA central do site. URL gerada por `buildWhatsAppUrl(message)`:

- Número vem de `NEXT_PUBLIC_WHATSAPP_NUMBER` (formato internacional, sem `+` nem espaço)
- Mensagem default em `whatsapp.ts`; cada CTA pode passar uma específica (ex.: `hero.primaryMessage`)
- Componente: `components/ui/WhatsAppButton.tsx` — variantes `wa` / `outline`, sizes `md`/`lg`/`xl`

Não criar formulários de contato. A intenção é abrir o WhatsApp direto.

## Variáveis de ambiente

Copiar `.env.example` → `.env`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=5511987654321
NEXT_PUBLIC_CONTACT_EMAIL=contato@obomsobrinho.com.br
NEXT_PUBLIC_SITE_URL=https://obomsobrinho.com.br
NEXT_PUBLIC_GTM_ID=                          # opcional
```

Todas são `NEXT_PUBLIC_*` por design — site é estático, sem backend.

## Convenções de código

- **Path alias**: `@/*` → `src/*`
- **Strict TS**: nada de `any` implícito; tipar arrays de copy com `as Type[]` (ver `services.ts`, `faq.ts`)
- **Server Components por padrão** — só marcar `"use client"` quando a seção precisar de hooks/Framer Motion (ex.: `HeroHeadline`)
- **Componentes em PascalCase**, content modules em camelCase
- **Tailwind**: usar utilities; tokens vão pelo `@theme` (`text-fg`, `bg-bg`, `border-border`), não cores hardcoded
- **Evitar criar componentes novos** quando uma utility/classe resolve — o site é pequeno e composto por seções planas

## SEO & Acessibilidade

- Metadata + OG/Twitter cards em `app/layout.tsx`
- JSON-LD Organization injetado no `<body>` do layout
- `sitemap.xml` e `robots.txt` gerados via `app/sitemap.ts` e `app/robots.ts`
- OG image: `public/og-image.png` (1200×630)
- Lighthouse-alvo ≥95 em Performance/Accessibility/Best Practices/SEO
- Foco visível com outline em accent (ver `globals.css`)
- Navegação 100% por teclado; navbar com âncoras (`#servicos`, `#como-funciona`, `#faq`)

## Ao mexer no site — checklist rápido

1. **Mudou copy?** É só editar `src/content/*.ts`. Não tocar em JSX.
2. **Mudou cor/fonte/spacing?** Vai em `globals.css` (`@theme`).
3. **Adicionou animação?** Incluir reset em `@media (prefers-reduced-motion: reduce)`.
4. **Adicionou seção?** Criar em `components/sections/`, copy em `src/content/`, importar em `app/page.tsx`, adicionar âncora se for navegável.
5. **Antes de commitar**: `npm run typecheck && npm run lint && npm run build`.

## Notas

- `README.md` tem trechos desatualizados (cita `audience.ts`, `techStack.ts`, `Container.tsx`, `PhoneMockup`, `DashboardMockup` — nada disso existe mais). Este `CLAUDE.md` reflete o estado real.
- Site é dark-only. Não há toggle de tema.
- Não há testes automatizados configurados.
- Deploy alvo: Vercel (`vercel --prod`), mas qualquer host estático funciona.
