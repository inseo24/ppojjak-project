"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

export default function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
}: {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  const resolvedVariants: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : {
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition ?? {}),
            delay: delay / 1000,
          },
        },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={resolvedVariants}
    >
      {children}
    </motion.div>
  );
}
