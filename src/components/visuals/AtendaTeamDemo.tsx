"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { MessageCircle, MousePointer2, MousePointerClick } from "lucide-react";
import { atenda } from "@/content/atenda";
import type { AtendaFunnelCard } from "@/content/atenda";
import { cn } from "@/lib/cn";
import { useTimeline } from "@/lib/useTimeline";
import {
  AppWindow,
  Bubble,
  ConversationHeader,
  Marker,
  Typing,
  ease,
} from "./AtendaScreen";

// Marcos (ms) da cena, compartilhados pelas duas colunas:
// 1 pergunta · 2 digitando · 3 "vou verificar" · 4 pedido aberto e o card anda
// · 5 aviso no WhatsApp · 6 dono digita a orientação · 7 cursor vai ao botão
// · 8 clique em "Enviar orientação" · 9 orientação enviada · 10 digitando
// · 11 resposta ao cliente.
const TIMES = [400, 1400, 2600, 3400, 4000, 6200, 9000, 9600, 9900, 10600, 11800] as const;
const LOOP = 16500;
/** Ritmo da orientação sendo digitada (ms por letra). */
const TYPE_MS = 42;

/**
 * Seção 3 da /atenda (um tema só: Advocacia). Esquerda: o pedido ao time.
 * Direita: o card do mesmo cliente andando no funil. As duas rodam juntas
 * quando a seção entra na tela; no celular, uma embaixo da outra.
 */
export function AtendaTeamDemo() {
  const { team } = atenda;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const still = useReducedMotion() ?? false;
  const step = useTimeline({ times: TIMES, total: LOOP, active: inView, reduced: still });

  return (
    <div ref={ref} className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-8">
      <Column title={team.handoff.title} text={team.handoff.text}>
        <HandoffScreen step={step} still={still} />
        <p className="mt-4 flex items-start gap-2 text-[13.5px] leading-relaxed text-fg-muted">
          <MousePointerClick className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
          {team.handoff.takeOver}
        </p>
      </Column>
      <Column title={team.funnel.title} text={team.funnel.text}>
        <FunnelScreen step={step} still={still} />
      </Column>
    </div>
  );
}

function Column({
  title,
  text,
  children,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <h3 className="font-display text-2xl text-white sm:text-[28px]">{title}</h3>
      <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-fg-muted">{text}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function HandoffScreen({ step, still }: { step: number; still: boolean }) {
  const { team, demo } = atenda;
  const h = team.handoff;
  const pedidoMode = step >= 4 && step < 9;
  const writing = step >= 6;

  return (
    <AppWindow title={`${atenda.name} · ${team.business} · ${team.conversationsTab}`}>
      <div
        role="img"
        aria-label={`${h.ariaLabel}. ${h.customer}: “${h.question}” ${atenda.name}: “${h.holding}” ${h.orientLabel}: “${h.orientation}” ${atenda.name}: “${h.answer}”`}
        className="relative flex h-[360px] flex-col sm:h-[370px]"
      >
        <ConversationHeader name={h.customer} aiLabel={demo.aiOn} />

        <AnimatePresence>
          {step === 5 && (
            <motion.div
              key="aviso"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease }}
              className="absolute inset-x-3 top-12 z-10 rounded-2xl border border-white/10 bg-[#1b1a24]/95 p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur"
            >
              <div className="flex items-center gap-1.5 text-[10.5px] text-fg-dim">
                <span className="grid size-4 place-items-center rounded bg-wa">
                  <MessageCircle className="size-2.5 text-bg" aria-hidden />
                </span>
                {h.notifyApp} · {demo.now}
              </div>
              <p className="mt-1.5 text-[12.5px] font-semibold text-white">{h.notifyTitle}</p>
              {h.notifyLines.map((line) => (
                <p key={line} className="text-[12px] leading-snug text-fg-muted">
                  {line}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden p-3 sm:p-4">
          {/* Conversa ancorada no topo e sem AnimatePresence: o "digitando…"
              sai na hora e a resposta entra no mesmo lugar, sem salto. */}
          {step >= 1 && (
            <Bubble key="q" from="customer" still={still}>
              {h.question}
            </Bubble>
          )}
          {step === 2 && <Typing key="t1" label={demo.typing} />}
          {step >= 3 && (
            <Bubble key="hold" from="ai" still={still}>
              {h.holding}
            </Bubble>
          )}
          {step >= 4 && (
            <Marker key="pedido" tone="warn" still={still}>
              {h.pedidoOpened}
            </Marker>
          )}
          {step >= 9 && (
            <Marker key="orient" still={still}>
              {h.orientSent}
            </Marker>
          )}
          {step === 10 && <Typing key="t2" label={demo.typing} />}
          {step >= 11 && (
            <Bubble key="answer" from="ai" still={still}>
              {h.answer}
            </Bubble>
          )}
        </div>

        <div className="border-t border-white/[0.06] p-2.5 sm:p-3">
          {pedidoMode ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border border-warn/40 bg-warn/[0.06] p-2.5"
            >
              <span className="inline-flex rounded-full bg-warn/15 px-2 py-0.5 text-[10.5px] font-semibold text-warn">
                {h.orientLabel}
              </span>
              <p
                className={cn(
                  "mt-2 min-h-[2.8em] text-[12.5px] leading-snug",
                  writing ? "text-white" : "text-fg-dim"
                )}
              >
                {writing ? <TypedText text={h.orientation} /> : h.orientPlaceholder}
              </p>
              <div className="relative mt-1.5 flex justify-end">
                <motion.span
                  animate={{ scale: step === 8 ? 0.9 : 1 }}
                  transition={{ duration: 0.15 }}
                  className={cn(
                    "rounded-full bg-warn px-2.5 py-1 text-[10.5px] font-semibold text-bg transition-opacity duration-300",
                    writing ? "opacity-100" : "opacity-40"
                  )}
                >
                  {h.orientSend}
                </motion.span>
                <AnimatePresence>
                  {(step === 7 || step === 8) && (
                    <motion.span
                      key="cursor"
                      aria-hidden
                      className="pointer-events-none absolute right-6 top-3 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
                      initial={{ opacity: 0, x: -70, y: 28 }}
                      animate={{ opacity: 1, x: 0, y: 0, scale: step === 8 ? 0.85 : 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: step === 8 ? 0.15 : 0.5, ease }}
                    >
                      <MousePointer2 className="size-5 fill-white" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <div className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[12px] text-fg-dim">
              {demo.composer}
            </div>
          )}
        </div>
      </div>
    </AppWindow>
  );
}

/** O texto do dono aparecendo letra a letra, com o cursor piscando no fim. */
function TypedText({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          window.clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, TYPE_MS);
    return () => window.clearInterval(id);
  }, [text]);

  return (
    <>
      {text.slice(0, count)}
      <motion.span
        aria-hidden
        className="ml-px inline-block h-[1.05em] w-px translate-y-[2px] bg-white"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </>
  );
}

function FunnelScreen({ step, still }: { step: number; still: boolean }) {
  const { team } = atenda;
  const f = team.funnel;
  const leadStage = step >= 4 ? 1 : 0;
  const showLead = step >= 1;

  return (
    <AppWindow title={`${atenda.name} · ${team.business} · ${team.pipelineTab}`}>
      <div
        role="img"
        aria-label={f.ariaLabel}
        className="grid h-[230px] grid-cols-4 gap-1.5 p-2.5 sm:h-[370px] sm:gap-2 sm:p-3"
      >
        <LayoutGroup>
          {f.stages.map((stage, i) => {
            const cards = f.cards[i] ?? [];
            const hasLead = showLead && leadStage === i;
            return (
              <div
                key={stage}
                className="flex min-w-0 flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-1.5 sm:p-2"
              >
                <div className="flex min-h-[2.6em] items-start justify-between gap-1 px-0.5 pb-1.5">
                  <span className="text-[9.5px] font-semibold leading-tight text-fg-muted sm:text-[11.5px]">
                    {stage}
                  </span>
                  <span className="text-[9.5px] text-fg-dim sm:text-[11px]">
                    {cards.length + (hasLead ? 1 : 0)}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  {hasLead && (
                    <motion.div
                      layoutId={still ? undefined : "atenda-lead"}
                      initial={still ? false : { opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, ease }}
                    >
                      <FunnelCard card={f.moving} highlight />
                    </motion.div>
                  )}
                  {cards.map((c) => (
                    <FunnelCard key={c.name} card={c} />
                  ))}
                </div>
              </div>
            );
          })}
        </LayoutGroup>
      </div>
    </AppWindow>
  );
}

function FunnelCard({ card, highlight }: { card: AtendaFunnelCard; highlight?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg border p-1.5 sm:p-2",
        highlight
          ? "border-accent/70 bg-brand/30 shadow-[0_0_24px_-6px_rgba(168,85,247,0.7)]"
          : "border-white/10 bg-white/[0.05]"
      )}
    >
      <p className="truncate text-[10px] font-semibold text-white sm:text-[12px]">{card.name}</p>
      <p className="mt-0.5 line-clamp-2 text-[9px] leading-snug text-fg-dim sm:text-[10.5px]">
        {card.topic}
      </p>
    </div>
  );
}
