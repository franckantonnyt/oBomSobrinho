"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function HeroHeadline({
  titleLead,
  titleAccents,
  className,
}: {
  titleLead: string;
  titleAccents: string[];
  className?: string;
}) {
  const words = titleLead.split(" ");
  const reduced = useReducedMotion();

  // TypeAnimation expects an interleaved array: [text, pauseMs, text, pauseMs, ...]
  const sequence = titleAccents.flatMap((phrase) => [phrase, 1800]);

  // Longest phrase reserves the line height — keeps the heading from jumping
  // between 1 and 2 lines as the typewriter deletes/retypes.
  const longest = titleAccents.reduce(
    (a, b) => (b.length > a.length ? b : a),
    titleAccents[0] ?? "",
  );

  return (
    <h1 className={className}>
      {/* Lead: word-by-word blur-rise via CSS animation (word-reveal keyframe).
          CSS fires on first paint — no JS/hydration wait, no invisible flash.
          animation-delay is set inline to create the stagger effect.
          prefers-reduced-motion: .word-reveal is disabled in globals.css. */}
      <span className="block">
        {words.map((word, i) => (
          <span key={i}>
            <span
              className="word-reveal inline-block"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              {word}
            </span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </span>

      {/* Accent line — grid trick: invisible placeholder reserves max height.
          Framer Motion fade-in with delay so TypeAnimation has time to
          initialise before becoming visible — masks the blank-start flash. */}
      <span className="grid">
        <span aria-hidden className="invisible col-start-1 row-start-1">
          {longest}
        </span>
        <motion.span
          className="col-start-1 row-start-1 bg-gradient-to-r from-brand-400 via-accent to-brand-400 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={reduced ? { duration: 0 } : { duration: 0.4, delay: 0.3 }}
        >
          <TypeAnimation
            sequence={sequence}
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
            cursor={false}
            aria-label={titleAccents.join(" — ")}
          />
          {/* Cursor always rendered so SSR/client HTML match. */}
          <motion.span
            aria-hidden
            animate={reduced ? { opacity: 0 } : { opacity: [1, 1, 0, 0] }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 0.9, times: [0, 0.45, 0.5, 1], repeat: Infinity }
            }
            className="ml-[2px] inline-block select-none font-light text-accent/70"
          >
            |
          </motion.span>
        </motion.span>
      </span>
    </h1>
  );
}
