"use client";

import { Fragment } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    question: ["Is prior music experience", "required?"],
    answer: [
      "Not required for Grades 6-8.",
      "From Grade 9 onwards, it is",
      "highly recommended. The",
      "program is selective and is",
      "designed for serious music",
      "learners............................",
    ],
  },
  {
    question: ["Which grades are eligible?"],
    answer: [
      "The programme is currently",
      "open to students from",
      "Grades 8 to 12, with",
      "pathways adjusted",
      "according to age, level, and",
      "musical readiness..........................",
    ],
  },
  {
    question: ["How is music integrated", "into the academic", "timetable?"],
    lift: "lg:pt-[2.69vw]",
    answer: [
      "Music is built into the school",
      "day as a core part of the",
      "timetable, alongside",
      "academic subjects.........................",
    ],
  },
];

function Lines({ items }) {
  return items.map((line, index) => (
    <Fragment key={line}>
      {line}{" "}
      {index < items.length - 1 && <br className="hidden lg:block" />}
    </Fragment>
  ));
}

export default function Faq() {
  return (
    <section id="faqs" className="relative overflow-hidden bg-black lg:h-[56.22vw]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/faq-drums.jpg"
          alt=""
          width={735}
          height={490}
          sizes="130vw"
          className="absolute left-[-12.77vw] top-[-10%] h-auto w-[125.11vw] max-w-none lg:top-[-20.65vw]"
        />
      </div>
      <div className="absolute inset-0 bg-black/62" />

      <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-0 lg:py-0">
        <Reveal from="up" className="lg:absolute lg:inset-x-0 lg:top-[12.3vw]">
          <h2 className="text-center font-display text-[1.85rem] leading-none text-white sm:text-[5.4vw] lg:text-[5.07vw]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 lg:absolute lg:left-[9.56vw] lg:top-[20.8vw] lg:mt-0 lg:w-[80.82vw] lg:grid-cols-3 lg:gap-[4.15vw]">
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.question[0]}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className={`rounded-[1.4rem] bg-white/88 px-6 py-6 backdrop-blur-[2px] lg:h-[22.28vw] lg:rounded-[1.4vw] lg:px-[1.69vw] lg:pb-0 lg:pt-[3.11vw] ${faq.lift ?? ""}`}
            >
              <h3 className="text-[1rem] font-bold leading-[1.45] text-neutral-900 lg:text-[1.41vw] lg:leading-[1.443]">
                <Lines items={faq.question} />
              </h3>
              <p className="mt-3 text-[0.92rem] leading-[1.5] text-neutral-800 lg:mt-[0.77vw] lg:text-[1.42vw] lg:leading-[1.455]">
                <Lines items={faq.answer} />
              </p>
            </motion.article>
          ))}
        </div>

        <Reveal from="up" delay={0.2} className="mt-10 flex justify-center lg:absolute lg:inset-x-0 lg:top-[48.63vw] lg:mt-0">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[#f7fbfb] px-9 py-3 text-[0.95rem] font-bold tracking-[0.02em] text-[#b00d0a] transition-transform duration-300 hover:scale-[1.04] lg:h-[4vw] lg:w-[17.64vw] lg:rounded-[0.3vw] lg:px-0 lg:py-0 lg:text-[1.83vw]"
          >
            KNOW MORE
          </a>
        </Reveal>
      </div>
    </section>
  );
}
