"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import data from "@/data/data.json";
import { easeOutExpo } from "@/lib/motion";

export default function Header() {
  const { nav } = data;
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: easeOutExpo }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-10"
    >
      <nav className="hidden items-center gap-7 text-[15px] text-foreground/80 md:flex">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-1 py-1 transition-colors hover:text-accent"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="ml-auto hidden rounded-full bg-foreground px-5 py-2.5 text-[15px] font-medium text-background transition-transform duration-200 ease-out hover:scale-105 hover:opacity-90 md:inline-block"
      >
        {nav.start_project_label}
      </a>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="ml-auto rounded-full bg-foreground px-5 py-2.5 text-[15px] font-medium text-background transition-transform duration-200 ease-out hover:scale-105 md:hidden"
      >
        {open ? "Close" : nav.menu_label}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: easeOutExpo }}
            className="absolute left-6 right-6 top-[calc(100%+12px)] flex flex-col gap-1 rounded-3xl border border-black/5 bg-card p-4 shadow-xl md:hidden"
          >
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium transition-colors hover:bg-background hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-foreground px-4 py-3 text-center text-base font-medium text-background"
            >
              {nav.start_project_label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
