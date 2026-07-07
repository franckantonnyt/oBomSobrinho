import { cn } from "@/lib/cn";

// Combina duas direções aprovadas no Claude Design: A3 (luz direcional vinda
// de cima + blobs bicolor) + E1 (partículas subindo com glow). Dá profundidade
// sem competir com o headline centralizado.
const PARTICLES = [
  { left: "8%", size: 4, delay: "-1s", duration: "12s" },
  { left: "18%", size: 3, delay: "-5s", duration: "15s" },
  { left: "27%", size: 5, delay: "-3s", duration: "11s" },
  { left: "38%", size: 3, delay: "-8s", duration: "16s" },
  { left: "50%", size: 4, delay: "-0.5s", duration: "13.5s" },
  { left: "62%", size: 3, delay: "-6s", duration: "14s" },
  { left: "74%", size: 5, delay: "-2.5s", duration: "12.5s" },
  { left: "86%", size: 3, delay: "-4.5s", duration: "17s" },
  { left: "94%", size: 4, delay: "-7s", duration: "13s" },
];

export function HeroBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* luz direcional oscilando a partir do topo */}
      <div className="hero-light-sway absolute -top-16 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(190,130,255,0.42),transparent_68%)] blur-[60px]" />

      {/* blobs bicolor respirando nos cantos inferiores */}
      <div className="parallax-down absolute -bottom-24 left-[28%]">
        <div className="mesh-orb-a h-[380px] w-[460px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(90,25,210,0.5),transparent_70%)] blur-[70px]" />
      </div>
      <div className="parallax-up absolute -bottom-16 right-[8%]">
        <div className="mesh-orb-b h-[280px] w-[340px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.32),transparent_70%)] blur-[64px]" />
      </div>

      {/* partículas de luz subindo */}
      <div className="absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="hero-particle bg-[#c9a0ff] shadow-[0_0_8px_#a855f7]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      {/* grão sutil */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* vinheta — foca a atenção no headline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_28%,transparent_45%,rgba(7,6,15,0.82)_100%)]" />
    </div>
  );
}
