import { cn } from "@/lib/cn";

// Static two-line headline with word-by-word blur-rise reveal (CSS-only, fires
// on first paint, respects prefers-reduced-motion via .word-reveal).
//
// Gradiente roxo: precisa ficar NO MESMO elemento que a animação. A .word-reveal
// deixa um `filter: blur(0)`/`transform` residual no span da palavra; se o
// `bg-clip-text` estiver no PAI, esse filter no filho renderiza o texto numa
// camada separada que o clip do pai não alcança — resultado: texto transparente
// (só a linha branca aparecia). Aplicando o gradiente por palavra, clip e filter
// ficam no mesmo elemento e o roxo volta a pintar.

const GRADIENT =
  "bg-gradient-to-r from-brand-400 via-accent to-brand-400 bg-clip-text text-transparent";

function Words({
  text,
  offset = 0,
  gradient = false,
}: {
  text: string;
  offset?: number;
  gradient?: boolean;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span
            className={cn("word-reveal inline-block", gradient && GRADIENT)}
            style={{ animationDelay: `${offset + i * 0.08}s` }}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

export function HeroHeadline({
  titleLead,
  titleAccent,
  className,
}: {
  titleLead: string;
  titleAccent: string;
  className?: string;
}) {
  const leadWords = titleLead.split(" ").length;

  return (
    <h1 className={className}>
      <span className="block">
        <Words text={titleLead} offset={0.1} />
      </span>
      <span className="block">
        <Words text={titleAccent} offset={0.1 + leadWords * 0.08} gradient />
      </span>
    </h1>
  );
}
