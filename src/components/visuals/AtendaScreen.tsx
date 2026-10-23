"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

// Peças da tela simulada do Atenda, usadas pelas demos da página /atenda.
// Animam só transform e opacidade; `still` (prefers-reduced-motion) desliga a
// entrada e mostra o estado final parado.

export const enter = { opacity: 0, y: 8 };
export const shown = { opacity: 1, y: 0 };
export const ease = [0.22, 1, 0.36, 1] as const;

export function AppWindow({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[20px] border border-white/10 bg-bg-deep/90 text-left shadow-[0_40px_90px_-40px_rgba(107,33,232,0.55)] backdrop-blur-sm",
        className
      )}
    >
      <div className="flex h-9 items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
        </div>
        <span className="truncate text-[11px] font-medium text-fg-dim">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand/50 to-accent/20 text-[11px] font-semibold text-white",
        className
      )}
    >
      {initials}
    </span>
  );
}

/** O interruptor "IA ligada" do cabeçalho da conversa no app. */
export function AiSwitch({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/40 bg-brand/20 px-2 py-1 text-[10.5px] font-semibold text-white/90">
      {label}
      <span aria-hidden className="relative h-3 w-5 rounded-full bg-accent">
        <span className="absolute right-0.5 top-0.5 size-2 rounded-full bg-white" />
      </span>
    </span>
  );
}

export function ConversationHeader({ name, aiLabel }: { name: string; aiLabel: string }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-3 py-2.5 sm:px-4">
      <Avatar name={name} className="size-7 text-[10px]" />
      <span className="min-w-0 flex-1 truncate text-[13px] font-semibold text-white">{name}</span>
      <AiSwitch label={aiLabel} />
    </div>
  );
}

export function Bubble({
  from,
  still,
  children,
}: {
  from: "customer" | "ai";
  still: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={still ? false : enter}
      animate={shown}
      transition={{ duration: 0.35, ease }}
      className={cn(
        "max-w-[85%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug sm:text-[13.5px]",
        from === "customer"
          ? "self-start rounded-bl-md bg-white/[0.08] text-fg"
          : "self-end rounded-br-md bg-brand text-white"
      )}
    >
      {children}
    </motion.div>
  );
}

export function Typing({ label }: { label: string }) {
  return (
    <motion.div
      initial={enter}
      animate={shown}
      transition={{ duration: 0.25, ease }}
      className="flex items-center gap-1 self-end rounded-2xl rounded-br-md bg-brand/50 px-3 py-2.5"
    >
      <span className="sr-only">{label}</span>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          aria-hidden
          className="size-1.5 rounded-full bg-white"
          animate={{ y: [0, -3, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </motion.div>
  );
}

/** Linha neutra no meio da conversa (pedido aberto, orientação dada). */
export function Marker({
  tone = "neutral",
  still,
  children,
}: {
  tone?: "neutral" | "warn";
  still: boolean;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={still ? false : enter}
      animate={shown}
      transition={{ duration: 0.35, ease }}
      className={cn(
        "self-center rounded-lg border px-2.5 py-1 text-center text-[10.5px] leading-snug sm:text-[11.5px]",
        tone === "warn"
          ? "border-warn/30 bg-warn/10 text-warn"
          : "border-white/10 bg-white/[0.04] text-fg-muted"
      )}
    >
      {children}
    </motion.div>
  );
}
