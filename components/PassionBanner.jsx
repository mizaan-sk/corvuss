"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const lines = [
  {
    text: "MUSIC",
    className:
      "text-[3.4rem] text-[#e30000] drop-shadow-[0_0.35vw_0.9vw_rgba(0,0,0,0.55)] sm:text-[12vw] lg:top-[2.56vw] lg:pl-[4.08vw] lg:text-[10.69vw]",
  },
  {
    text: "is more than a",
    className: "mt-2 text-[1.6rem] font-bold text-white sm:text-[5.4vw] lg:mt-0 lg:top-[13.26vw] lg:pl-[4.5vw] lg:text-[4.66vw]",
  },
  {
    text: "PASSION",
    className:
      "mt-1 text-[2.6rem] text-brand-gold drop-shadow-[0_0.35vw_0.9vw_rgba(0,0,0,0.5)] sm:text-[9vw] lg:mt-0 lg:top-[18.16vw] lg:pl-[4.56vw] lg:text-[7.83vw]",
  },
];

export default function PassionBanner() {
  return (
    <section className="relative overflow-hidden bg-black lg:h-[56.22vw]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/drums-stage.jpg"
          alt=""
          width={1200}
          height={896}
          sizes="130vw"
          className="absolute left-1/2 top-1/2 h-auto w-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 lg:left-[-5.45vw] lg:top-[-25.4vw] lg:w-[121.01vw] lg:translate-x-0 lg:translate-y-0"
        />
      </div>
      <div className="absolute inset-0 bg-black/76" />

      <div className="relative px-6 py-16 text-center sm:px-10 lg:h-full lg:p-0">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="lg:contents"
        >
          {lines.map((line) => (
            <span
              key={line.text}
              className={`block font-extrabold leading-tight lg:absolute lg:inset-x-0 lg:leading-none ${line.className}`}
            >
              {line.text}
            </span>
          ))}
        </motion.h2>

        <Reveal
          from="up"
          delay={0.15}
          className="mt-10 lg:absolute lg:left-[5.48vw] lg:top-[26.98vw] lg:mt-0 lg:h-[20.03vw] lg:w-[89.04vw]"
        >
          <div className="flex h-full items-center justify-center bg-[#e3e2e1] px-5 py-7 shadow-[0_1.2vw_2.6vw_-1.2vw_rgba(0,0,0,0.8)] sm:px-10 sm:py-10 lg:px-[4vw] lg:py-0">
            <p className="text-center text-[0.95rem] leading-[1.5] text-neutral-900 sm:text-[1.1rem] lg:text-[2.09vw] lg:leading-[1.36]">
              Introducing the <strong className="font-bold">Furtados School of Music X Corvuss American Academy</strong>
              <br className="hidden lg:block" /> Music Specialization Programme &mdash; an integrated High School pathway
              <br className="hidden lg:block" /> that combines <strong className="font-bold">WASC accredited</strong> and Internationally aligned Academics
              <br className="hidden lg:block" /> with Rigorous Music Education, preparing students for Higher Education &amp;
              <br className="hidden lg:block" /> <strong className="font-bold">Professional Opportunities in Music.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
