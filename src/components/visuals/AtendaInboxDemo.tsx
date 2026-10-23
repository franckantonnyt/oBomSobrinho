"use client";

import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { atenda } from "@/content/atenda";
import { cn } from "@/lib/cn";
import { useTimeline } from "@/lib/useTimeline";
import {
  AppWindow,
  Avatar,
  Bubble,
  ConversationHeader,
  Typing,
  ease,
  shown,
} from "./AtendaScreen";

// Marcos do ciclo (ms): conversa chega, "digitando…", resposta. Um ciclo por
// segmento; no fim dele o próximo segmento entra sozinho.
const TIMES = [500, 1500, 3000] as const;
const CYCLE = 6000;

/**
 * Seção 2 da /atenda: a tela do Atenda com UMA troca por segmento. A conversa
 * nova sobe na lista com a mensagem do cliente, aparece "digitando…" e o
 * Atenda responde. Os chips trocam sozinhos a cada ciclo e aceitam clique.
 */
export function AtendaInboxDemo() {
  const { demo } = atenda;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const still = useReducedMotion() ?? false;
  const [seg, setSeg] = useState(0);
  const [round, setRound] = useState(0);

  const next = useCallback(() => {
    setSeg((s) => (s + 1) % demo.segments.length);
    setRound((r) => r + 1);
  }, [demo.segments.length]);

  const step = useTimeline({
    times: TIMES,
    total: CYCLE,
    active: inView,
    reduced: still,
    onEnd: next,
    resetKey: round,
  });

  const s = demo.segments[seg];
  const arrived = step >= 1;
  const typing = step === 2;
  const answered = step >= 3;

  return (
    <div ref={ref} className="mx-auto w-full max-w-4xl">
      <div
        role="group"
        aria-label={demo.segmentsLabel}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        {demo.segments.map((item, i) => {
          const active = i === seg;
          return (
            <button
              key={item.label}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setSeg(i);
                setRound((r) => r + 1);
              }}
              className={cn(
                "relative overflow-hidden rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors duration-200",
                active
                  ? "border-white bg-white text-bg"
                  : "border-border-strong bg-white/[0.04] text-fg-muted hover:border-accent hover:text-white"
              )}
            >
              {item.label}
              {active && !still && (
                <motion.span
                  key={round}
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-brand"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: inView ? 1 : 0 }}
                  transition={{ duration: inView ? CYCLE / 1000 : 0, ease: "linear" }}
                />
              )}
            </button>
          );
        })}
      </div>

      <AppWindow
        title={`${atenda.name} · ${s.business}`}
        className="mt-6 sm:mt-8"
      >
        <div
          role="img"
          aria-label={`${demo.ariaLabel}. ${s.customer}: “${s.question}” ${atenda.name}: “${s.answer}”`}
          className="grid h-[320px] grid-cols-[96px_1fr] sm:h-[340px] sm:grid-cols-[250px_1fr]"
        >
          {/* Lista de conversas */}
          <div className="overflow-hidden border-r border-white/[0.06]">
            <p className="px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-fg-dim sm:px-4">
              {demo.listTitle}
            </p>
            <ul key={seg} className="flex flex-col">
              <AnimatePresence initial={false}>
                {arrived && (
                  <motion.li
                    key="new"
                    layout={still ? false : "position"}
                    initial={still ? false : { opacity: 0, y: -12 }}
                    animate={shown}
                    transition={{ duration: 0.4, ease }}
                    className="relative flex items-center gap-2.5 bg-white/[0.06] px-3 py-2.5 sm:px-4"
                  >
                    <span aria-hidden className="absolute inset-y-0 left-0 w-[3px] bg-accent" />
                    <ListRow
                      name={s.customer}
                      preview={answered ? s.answer : s.question}
                      time={demo.now}
                      unread={!answered}
                      strong
                    />
                  </motion.li>
                )}
              </AnimatePresence>
              {s.others.map((o) => (
                <motion.li
                  key={o.name}
                  layout={still ? false : "position"}
                  transition={{ duration: 0.4, ease }}
                  className="flex items-center gap-2.5 px-3 py-2.5 sm:px-4"
                >
                  <ListRow name={o.name} preview={o.preview} time={o.time} />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Conversa aberta */}
          <div className="flex min-w-0 flex-col">
            <AnimatePresence initial={false}>
              {arrived && (
                <motion.div
                  key={seg}
                  initial={still ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex min-h-0 flex-1 flex-col"
                >
                  <ConversationHeader name={s.customer} aiLabel={demo.aiOn} />
                  <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden p-3 sm:p-4">
                    <Bubble from="customer" still={still}>
                      {s.question}
                    </Bubble>
                    {/* Conversa ancorada no topo e sem AnimatePresence: o
                        "digitando…" sai na hora e a resposta entra no mesmo
                        lugar, então a mensagem do cliente nunca se mexe. */}
                    {typing && <Typing key="typing" label={demo.typing} />}
                    {answered && (
                      <Bubble key="answer" from="ai" still={still}>
                        {s.answer}
                      </Bubble>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="mt-auto border-t border-white/[0.06] p-2.5 sm:p-3">
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[12px] text-fg-dim">
                {demo.composer}
              </div>
            </div>
          </div>
        </div>
      </AppWindow>
    </div>
  );
}

function ListRow({
  name,
  preview,
  time,
  unread,
  strong,
}: {
  name: string;
  preview: string;
  time: string;
  unread?: boolean;
  strong?: boolean;
}) {
  return (
    <>
      <Avatar name={name} className="hidden sm:grid" />
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span
            className={cn(
              "min-w-0 flex-1 truncate text-[11.5px] sm:text-[13px]",
              strong ? "font-semibold text-white" : "font-medium text-fg-muted"
            )}
          >
            {name}
          </span>
          <span className="hidden shrink-0 text-[10.5px] text-fg-dim sm:inline">{time}</span>
        </div>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="min-w-0 flex-1 truncate text-[10.5px] text-fg-dim sm:text-[12px]">
            {preview}
          </span>
          {unread && (
            <motion.span
              aria-hidden
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid size-4 shrink-0 place-items-center rounded-full bg-wa text-[9px] font-bold text-bg"
            >
              1
            </motion.span>
          )}
        </div>
      </div>
    </>
  );
}
