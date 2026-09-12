"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "HOME", href: "#home" },
  { label: "PROGRAM DETAILS", href: "#program" },
  { label: "FAQ'S", href: "#faqs" },
  { label: "CONTACT", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <motion.div
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-end justify-center gap-[5vw] px-6 pt-8 sm:gap-[4.08vw] lg:px-0 lg:pt-[4.28vw]"
      >
        <a href="#home" className="block w-[34vw] max-w-[190px] lg:w-[17.57vw] lg:max-w-none">
          <Image
            src="/images/furtados-logo.png"
            alt="Furtados School of Music"
            width={416}
            height={131}
            loading="eager"
            className="h-auto w-full"
          />
        </a>
        <a href="#home" className="block w-[38vw] max-w-[215px] lg:w-[21.15vw] lg:max-w-none">
          <Image
            src="/images/corvuss-logo.png"
            alt="Corvuss American Academy"
            width={257}
            height={71}
            loading="eager"
            className="h-auto w-full"
          />
        </a>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
        className="mx-auto mt-6 w-[calc(100%-2.5rem)] max-w-[560px] rounded-full bg-brand-red shadow-[0_14px_26px_-10px_rgba(0,0,0,0.45)] sm:mt-7 lg:mt-[2.3vw] lg:h-[4.99vw] lg:w-[63.67vw] lg:max-w-none"
      >
        <div className="hidden h-full items-center justify-between px-[4.05vw] sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-3 text-[1.5vw] font-bold tracking-[0.01em] text-white transition-opacity duration-200 hover:opacity-80 lg:py-0 lg:text-[1.98vw]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between px-6 py-4 text-base font-bold tracking-wide text-white sm:hidden"
          aria-expanded={open}
        >
          MENU
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-[2px] w-6 bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto w-[calc(100%-2.5rem)] overflow-hidden sm:hidden"
          >
            <div className="mt-2 flex flex-col rounded-3xl bg-brand-red/95 py-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-6 py-3 text-sm font-bold tracking-wide text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
