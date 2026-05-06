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
        "constel-node group flex items-center gap-2.5 rounded-2xl border border-white/10 bg-[#0d0c1c]/85 px-3.5 py-2.5 backdrop-blur-md",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-border-strong bg-gradient-to-br from-brand/30 to-accent/10 text-white">
        <Icon className="size-4" />
      </span>
      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white">
        {label}
      </span>
    </div>
  );
}

type EventPillProps = {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  delay: number;
};

function EventPill({ Icon, label, className, delay }: EventPillProps) {
  return (
    <div
      className={cn(
        "event-pill pointer-events-none absolute hidden lg:flex items-center gap-1.5 whitespace-nowrap rounded-full border border-wa/30 bg-[#0a0a0f]/90 px-2.5 py-1.5 backdrop-blur-md",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="size-3 text-wa" />
      <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white">
        {label}
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
        "relative mx-auto aspect-[1/1] w-full max-w-[520px]",
        className
      )}
      aria-hidden
    >
      <div className="absolute -inset-12 -z-20 rounded-[60px] bg-gradient-to-tr from-brand/40 via-accent/20 to-transparent blur-3xl" />
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

      <div className="absolute left-[6%] top-[12%]">
        <Node Icon={User} label="Cliente" delay={0} />
      </div>
      <div className="absolute right-[6%] top-[12%]">
        <Node Icon={MessageCircle} label="Atendimento" delay={0.5} />
      </div>
      <div className="absolute right-[2%] top-[46%]">
        <Node Icon={CalendarCheck} label="Agenda" delay={1} />
      </div>
      <div className="absolute right-[6%] bottom-[12%]">
        <Node Icon={DollarSign} label="Financeiro" delay={1.5} />
      </div>
      <div className="absolute left-[6%] bottom-[12%]">
        <Node Icon={Users} label="Equipe" delay={2} />
      </div>

      <EventPill
        Icon={CheckCircle2}
        label="Pedido confirmado"
        className="left-[40%] top-[2%]"
        delay={1.2}
      />
      <EventPill
        Icon={CreditCard}
        label="Pagamento aprovado"
        className="right-[2%] top-[28%]"
        delay={3.6}
      />
      <EventPill
        Icon={Sparkles}
        label="Atendimento iniciado"
        className="left-[2%] bottom-[28%]"
        delay={6}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="constel-hub relative grid size-32 place-items-center rounded-3xl border border-border-strong bg-gradient-to-br from-bg-deep via-surface-2 to-bg p-4 shadow-[0_0_60px_-10px_rgba(168,85,247,0.55)] sm:size-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.22),transparent_70%)]"
          />
          <Sparkles className="size-7 text-accent" />
          <p className="mt-2 text-center font-display text-sm uppercase tracking-[0.18em] text-white">
            Sistema
          </p>
          <p className="mt-0.5 text-center text-[10px] uppercase tracking-[0.16em] text-fg-dim">
            Operação ativa
          </p>
        </div>
      </div>
    </div>
  );
}
