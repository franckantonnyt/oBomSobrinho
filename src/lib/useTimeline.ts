import { useEffect, useRef, useState } from "react";

/**
 * Linha do tempo das demos animadas: devolve quantos marcos (`times`, em ms)
 * já passaram. Só roda com `active`; com `reduced` vai direto ao estado final.
 * Ao chegar em `total`, chama `onEnd` (se houver) ou recomeça do zero.
 * Trocar `resetKey` reinicia a linha do tempo.
 */
export function useTimeline({
  times,
  total,
  active,
  reduced,
  onEnd,
  resetKey,
}: {
  times: readonly number[];
  total: number;
  active: boolean;
  reduced: boolean;
  onEnd?: () => void;
  resetKey?: string | number;
}) {
  const [step, setStep] = useState(0);
  const onEndRef = useRef(onEnd);

  useEffect(() => {
    onEndRef.current = onEnd;
  }, [onEnd]);

  useEffect(() => {
    if (reduced) {
      setStep(times.length);
      return;
    }
    if (!active) return;
    let timers: number[] = [];
    const run = () => {
      setStep(0);
      timers = times.map((t, i) => window.setTimeout(() => setStep(i + 1), t));
      timers.push(
        window.setTimeout(() => {
          if (onEndRef.current) onEndRef.current();
          else run();
        }, total)
      );
    };
    run();
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [times, total, active, reduced, resetKey]);

  return step;
}
