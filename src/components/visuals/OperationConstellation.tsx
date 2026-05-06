import {
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  DollarSign,
  MessageCircle,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { cn } from "@/lib/cn";

type NodeProps = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  delay?: number;
};

function Node({ Icon, label, className, delay = 0 }: NodeProps) {
  return (
    <div
      className={cn(
        "constel-node group flex max-w-[9.25rem] flex-col items-center gap-1 rounded-xl border border-white/10 bg-[#0d0c1c]/85 px-2 py-1.5 text-center backdrop-blur-md sm:max-w-none sm:flex-row sm:items-center sm:gap-2.5 sm:rounded-2xl sm:px-3.5 sm:py-2.5 sm:text-left",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-border-strong bg-gradient-to-br from-brand/30 to-accent/10 text-white sm:size-8">
        <Icon className="size-3.5 sm:size-4" />
      </span>
      <span className="text-[10px] font-semibold uppercase leading-tight tracking-[0.1em] text-white sm:text-[12px] sm:tracking-[0.14em]">
        {label}
      </span>
    </div>
  );
}

type NodeDockStatusProps = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  delay: number;
};

/** Status alinhado ao cartão pai (só lg+): sempre centralizado sob/sobre o mesmo eixo */
function NodeDockStatus({
  Icon,
  label,
  delay,
  className,
}: NodeDockStatusProps & { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none hidden w-full justify-center lg:flex",
        className
      )}
    >
      <span
        className="event-pill-motion inline-flex max-w-[10rem] items-center gap-1.5 rounded-full border border-wa/40 bg-[#070812]/97 px-2 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_2px_12px_-4px_rgba(37,211,102,0.35)] backdrop-blur-sm sm:px-2.5 sm:py-1.5"
        style={{ animationDelay: `${delay}s` }}
      >
        <Icon className="size-3 shrink-0 text-wa sm:size-3.5" />
        <span className="max-w-[8.75rem] text-balance text-center text-[8.5px] font-semibold uppercase leading-snug tracking-[0.1em] text-white sm:text-[9.5px] sm:tracking-[0.13em]">
          {label}
        </span>
      </span>
    </div>
  );
}

const lineEndpoints = [
  { x: 20, y: 22 },
  { x: 80, y: 22 },
  { x: 92, y: 50 },
  { x: 80, y: 78 },
  { x: 20, y: 78 },
];

export function OperationConstellation({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[4/5] w-full max-w-[min(100%,420px)] sm:aspect-square sm:max-w-[520px]",
        className
      )}
      aria-hidden
    >
      <div className="absolute -inset-8 -z-20 rounded-[40px] bg-gradient-to-tr from-brand/40 via-accent/20 to-transparent blur-3xl sm:-inset-12 sm:rounded-[60px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.18), transparent 60%)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="line-grad"
            x1="0"
            y1="0"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="rgba(168,85,247,0.6)" />
            <stop offset="1" stopColor="rgba(107,33,232,0.15)" />
          </linearGradient>
          <radialGradient id="dot-grad">
            <stop offset="0" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="1" stopColor="rgba(168,85,247,0)" />
          </radialGradient>
        </defs>

        {lineEndpoints.map((n, i) => (
          <g key={i}>
            <line
              x1={n.x}
              y1={n.y}
              x2="50"
              y2="50"
              stroke="url(#line-grad)"
              strokeWidth="0.35"
              strokeDasharray="1.5 1.5"
              className="constel-line"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="0.9"
              fill="rgba(168,85,247,0.85)"
              className="constel-endpoint"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
            <circle r="0.8" fill="url(#dot-grad)">
              <animate
                attributeName="cx"
                values={`${n.x};50`}
                dur="3.6s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="cy"
                values={`${n.y};50`}
                dur="3.6s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.15;0.85;1"
                dur="3.6s"
                begin={`${i * 0.7}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute left-[4%] top-[11%] z-10 flex flex-col items-center sm:left-[6%] sm:top-[12%]">
        <Node Icon={User} label="Cliente" delay={0} />
        <NodeDockStatus
          Icon={CheckCircle2}
          label="Pedido confirmado"
          delay={1.2}
          className="mt-2"
        />
      </div>
      <div className="pointer-events-none absolute right-[4%] top-[11%] z-10 flex flex-col items-center sm:right-[6%] sm:top-[12%]">
        <Node Icon={MessageCircle} label="Atendimento" delay={0.5} />
        <NodeDockStatus
          Icon={Sparkles}
          label="Atendimento iniciado"
          delay={6}
          className="mt-2"
        />
      </div>
      <div className="absolute right-[1%] top-[42.5%] sm:right-[2%] sm:top-[44%]">
        <Node Icon={CalendarCheck} label="Agenda" delay={1} />
      </div>
      <div className="pointer-events-none absolute right-[4%] bottom-[10%] z-10 flex flex-col items-center gap-2 sm:right-[6%] sm:bottom-[12%]">
        <NodeDockStatus Icon={CreditCard} label="Pagamento aprovado" delay={3.6} />
        <Node Icon={DollarSign} label="Financeiro" delay={1.5} />
      </div>
      <div className="absolute left-[4%] bottom-[10%] sm:left-[6%] sm:bottom-[12%]">
        <Node Icon={Users} label="Equipe" delay={2} />
      </div>

      <div className="absolute left-1/2 top-1/2 z-[6] -translate-x-1/2 -translate-y-1/2">
        <div className="constel-hub relative grid size-[5.5rem] place-items-center rounded-2xl border border-border-strong bg-gradient-to-br from-bg-deep via-surface-2 to-bg p-2.5 shadow-[0_0_60px_-10px_rgba(168,85,247,0.55)] sm:size-32 sm:rounded-3xl sm:p-4 md:size-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.22),transparent_70%)] sm:rounded-3xl"
          />
          <Sparkles className="size-5 text-accent sm:size-7" />
          <p className="mt-1 text-center font-display text-[11px] uppercase leading-tight tracking-[0.16em] text-white sm:mt-2 sm:text-sm sm:tracking-[0.18em]">
            Sistema
          </p>
          <p className="mt-0.5 text-center text-[8px] uppercase tracking-[0.14em] text-fg-dim sm:text-[10px] sm:tracking-[0.16em]">
            Operação ativa
          </p>
        </div>
      </div>
    </div>
  );
}
