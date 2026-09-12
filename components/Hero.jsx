"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SiteHeader from "./SiteHeader";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="relative  z-[9999] h-[14px] w-full bg-brand-red sm:h-[18px] lg:h-[1.76vw]" />

      <div className="relative lg:h-[54.46vw]">
       <Image
  src="/images/hero-grid.png"
  alt=""
  width={1500}
  height={337}
  loading="eager"
  className="pointer-events-none absolute left-0 top-0 z-0 w-full opacity-40 -scale-y-100 select-none lg:left-[-8.12vw] lg:top-[-7.88vw] lg:w-[116.25vw] lg:max-w-none"
/>

        <SiteHeader />

        <div className="relative z-10 px-6 pt-10 sm:px-10 lg:absolute lg:left-[7.94vw] lg:top-[21.34vw] lg:px-0 lg:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          >
            <span className="block font-semibold font-display text-[3.4rem] leading-[0.95] tracking-[0.048em] text-black sm:text-[7.6vw] lg:text-[3.85vw] lg:leading-none">
              India&rsquo;s
            </span>
            <span className="mt-1 block text-[1.35rem] font-bold leading-[1.2] text-black sm:text-[4vw] lg:mt-[0.83vw] lg:text-[2.53vw] lg:leading-[1.2]">
              first-of-its-kind High School for
            </span>
            <span className="block font-display text-[2.85rem] leading-[1.04] tracking-[0.016em] text-brand-band sm:text-[8.8vw] lg:mt-[0.43vw] lg:text-[5.37vw] lg:leading-none">
              Student Musicians
            </span>
          </motion.h1>

          <motion.svg
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            viewBox="0 0 629 16"
            preserveAspectRatio="none"
            className="mt-4 h-[10px] w-[78%] max-w-[420px] origin-left sm:mt-5 lg:mt-[1.54vw] lg:h-[1.12vw] lg:w-[44.2vw] lg:max-w-none"
          >
            <path
              d="M2 8H616M608 2L626 8L608 14"
              stroke="#FDBD10"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </motion.svg>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
            className="mt-5 max-w-[34rem] text-[1rem] leading-[1.55] text-neutral-900 sm:text-[1.15rem] lg:mt-[0.72vw] lg:max-w-none lg:text-[1.81vw] lg:leading-[1.54]"
          >
            American AP Curriculum | Music Specialization
            <br className="hidden lg:block" /> (Grades 8&ndash;12) | NCAS Standards | Pre-AP Music
            <br className="hidden lg:block" /> AP Music Theory | Trinity College London &amp;
            <br className="hidden lg:block" /> ABRSM Exams | WASC Accredited
          </motion.p>
        </div>

        <div className="relative z-0 mt-6 h-[66vw] overflow-hidden sm:h-[48vw] lg:absolute lg:inset-0 lg:mt-0 lg:h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute left-[16%] top-[4%] aspect-square w-[96%] rounded-full bg-brand-ivory sm:left-[30%] sm:top-[2%] sm:w-[74%] lg:left-[49.6vw] lg:top-[19.62vw] lg:aspect-auto lg:h-[34.18vw] lg:w-[49vw]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute left-[54%] top-[8%] aspect-square w-[34%] rounded-full bg-brand-gold sm:left-[58%] sm:top-[6%] sm:w-[26%] lg:left-[68.66vw] lg:top-[21.78vw] lg:w-[16.79vw]"
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute bottom-0 right-[-8%] w-[76%] sm:right-[-2%] sm:w-[60%] lg:bottom-auto lg:left-[69.06vw] lg:right-auto lg:top-[23.82vw] lg:w-[50.76vw]"
          >
            <Image
              src="/images/hero-piano.png"
              alt="Student playing the grand piano"
              width={817}
              height={493}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute bottom-0 left-0 w-[48%] sm:left-[20%] sm:w-[34%] lg:bottom-auto lg:left-[49.05vw] lg:top-[33.43vw] lg:w-[23.58vw]"
          >
            <Image
              src="/images/hero-singer.png"
              alt="Student singing into a microphone"
              width={476}
              height={432}
              loading="eager"
              fetchPriority="high"
              className="h-auto w-full -scale-x-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
