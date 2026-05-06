"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/**
 * FAB no canto inferior — permanece FORA do <header> porque backdrop-blur no
 * header cria containing block e quebra position:fixed nos filhos (WebKit/Blink).
 */
export function MobileScrollWhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const update = () => {
      if (!hero) {
        setVisible(window.scrollY > 200);
        return;
      }
      const { bottom } = hero.getBoundingClientRect();
      setVisible(bottom < 120);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 md:hidden">
      <div className="sticky-breath pointer-events-auto wa-pulse">
        <WhatsAppButton
          size="md"
          variant="wa"
          icon
          className="shadow-[0_18px_50px_-10px_rgba(37,211,102,0.7)]"
        >
          WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
