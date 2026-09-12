"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import DoodleBand from "./DoodleBand";

const steps = [
  ["Grade", "8th–12th"],
  ["American", "Curriculum", "Structured", "Music", "Specialisation"],
  ["Performance", "Opportunities"],
  ["Portfolio", "Development"],
  ["Music", "University", "Pathways", "in India &", "Overseas"],
];

const tabbedOutline =
  "M97.92 35.8 L97.92 6.88 A4.8 4.8 0 0 0 93.12 2.08 L6.88 2.08 A4.8 4.8 0 0 0 2.08 6.88 L2.08 93.12 A4.8 4.8 0 0 0 6.88 97.92 L93.12 97.92 A4.8 4.8 0 0 0 97.92 93.12 L97.92 55.7 A4.8 4.8 0 0 1 102.72 50.9 L114.5 50.9";

const closedOutline =
  "M97.92 6.88 A4.8 4.8 0 0 0 93.12 2.08 L6.88 2.08 A4.8 4.8 0 0 0 2.08 6.88 L2.08 93.12 A4.8 4.8 0 0 0 6.88 97.92 L93.12 97.92 A4.8 4.8 0 0 0 97.92 93.12 Z";

function Chevron() {
  return (
    <svg
      viewBox="0 0 11.5 19.8"
      fill="none"
      stroke="#ffffff"
      strokeWidth="4.16"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-[1.45rem] shrink-0 rotate-90 sm:rotate-0 lg:h-[2.75vw] lg:w-[1.6vw]"
    >
      <path d="M2.08 2.08 L9.42 9.9 L2.08 17.72" />
    </svg>
  );
}

export default function JourneyPath() {
  return (
    <DoodleBand base="#bb0a0a" doodle="#ac0909" offset="0.42vw" className="py-12 lg:h-[30.85vw] lg:py-0">
      <div className="relative mx-auto flex w-[86%] max-w-[420px] flex-col items-center gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 lg:absolute lg:left-[5.66vw] lg:top-[11.31vw] lg:w-[88.4vw] lg:max-w-none lg:flex-nowrap lg:gap-0">
        {steps.map((lines, index) => (
          <Fragment key={lines.join()}>
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.09, ease: "easeOut" }}
              className="relative flex min-h-[7.5rem] w-full items-center justify-center rounded-2xl border-[3px] border-white px-4 py-4 text-center sm:min-h-[9rem] sm:w-[calc(50%-1.5rem)] lg:h-[13.84vw] lg:min-h-0 lg:w-[13.8vw] lg:shrink-0 lg:rounded-none lg:border-0 lg:px-[0.6vw] lg:py-0"
            >
              <svg
                viewBox="0 0 117 100"
                preserveAspectRatio="none"
                fill="none"
                stroke="#ffffff"
                strokeWidth="4.163"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pointer-events-none absolute left-0 top-0 hidden h-full w-[117%] lg:block"
              >
                <path d={index < steps.length - 1 ? tabbedOutline : closedOutline} />
              </svg>
              <p className="relative text-[0.95rem] leading-[1.5] text-white lg:text-[1.63vw] lg:leading-[1.35]">
                {lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.09 + 0.16 }}
                className="flex shrink-0 items-center lg:w-[4.84vw] lg:justify-start lg:pl-[1.92vw]"
              >
                <Chevron />
              </motion.span>
            )}
          </Fragment>
        ))}
      </div>
    </DoodleBand>
  );
}
