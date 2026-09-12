"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function SeriousAmbitions() {
  return (
    <>
      <section className="relative flex flex-col overflow-hidden bg-white lg:block lg:h-[29.52vw]">
        <div className="relative order-2 h-[56vw] w-full sm:h-[46vw] lg:absolute lg:inset-0 lg:h-auto">
          <div className="absolute right-0 top-0 h-[76%] w-[100%] bg-brand-gold sm:w-[54%] lg:h-[23.05vw] lg:w-[36.47vw]" />

      <Image
  src="/images/1.png"
  alt=""
  width={600}
  height={400}
  className="absolute opacity-15 right-0 top-0 h-[76%] w-[100%] object-cover sm:w-[54%] lg:h-[23.05vw] lg:w-[36.47vw]"
/>

<Reveal
  from="zoom"
  className="absolute right-[4%] top-[4%] w-[60%] sm:right-[6%] sm:w-[48%] lg:left-[54.81vw] lg:right-auto lg:top-[0.97vw] lg:w-[30.43vw]"
>
  <Image
    src="/images/instruments.png"
    alt="Illustration of a guitar, trumpet, microphone, vinyl record and piano keys"
    width={407}
    height={355}
    className="h-auto w-full"
  />
</Reveal>
        </div>

        <div className="relative order-1 z-10 px-6 pb-4 pt-12 sm:px-10 lg:px-0 lg:py-0">
          <Reveal from="up" className="lg:absolute lg:left-[7.66vw] lg:top-[4.06vw]">
            <p className="text-[2rem] font-normal uppercase leading-none tracking-[0.01em] text-[#8b8b8b] sm:text-[6vw] lg:text-[5.75vw]">
              BUILT FOR
            </p>
          </Reveal>

          <Reveal from="up" delay={0.08} className="lg:absolute lg:left-[7.94vw] lg:top-[10.11vw]">
            <h2 className="mt-1 font-display text-[2.3rem] leading-none text-black sm:text-[6.6vw] lg:mt-0 lg:text-[5.51vw]">
              STUDENTS WITH
            </h2>
          </Reveal>

          <Reveal from="up" delay={0.14} className="lg:absolute lg:left-[7.94vw] lg:top-[16.25vw]">
            <p className="mt-2 text-[1.4rem] font-bold leading-tight text-[#bb0a0a] sm:text-[4vw] lg:mt-0 lg:text-[3.53vw]">
              Serious Musical Ambitions
            </p>
          </Reveal>

          <Reveal from="up" delay={0.2} className="lg:absolute lg:left-[8.01vw] lg:top-[21.15vw]">
            <p className="mt-3 max-w-[26rem] text-[0.95rem] leading-[1.45] text-neutral-900 sm:text-[1.15rem] lg:mt-0 lg:max-w-none lg:text-[1.96vw] lg:leading-[1.4]">
              Parents today recognise that success is no longer
              <br className="hidden lg:block" /> defined by a single career path.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-cream lg:h-[26.63vw]">
        <div className="flex flex-col gap-8 px-6 py-12 sm:px-10 lg:block lg:px-0 lg:py-0">
          <Reveal
            from="left"
            className="relative aspect-[826/461] w-full lg:absolute lg:inset-y-0 lg:left-[7.87vw] lg:h-full lg:w-[46.45vw]"
          >
            <Image
              src="/images/musicians-row.jpg"
              alt="Four young musicians performing"
              fill
              sizes="(min-width: 1024px) 47vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <Reveal from="right" delay={0.1} className="lg:absolute lg:left-[57.27vw] lg:top-[4.86vw] lg:w-[36.6vw]">
            <p className="text-[1rem] font-bold leading-[1.5] text-neutral-900 sm:text-[1.2rem] lg:text-[1.66vw] lg:leading-[1.737]">
              The Corvuss &times; Furtados School of Music
              <br className="hidden lg:block" />{" "}
              <span className="text-[#c81414]">MUSIC SPECIALISATION PROGRAMME</span>
            </p>
            <p className="mt-3 text-[0.95rem] leading-[1.6] text-neutral-900 sm:text-[1.1rem] lg:mt-[0.08vw] lg:text-[1.69vw] lg:leading-[1.654]">
              empowers students to achieve academic
              excellence while building the skills and
               experience needed for a successful future in
               music without choosing one over the other.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="h-3 w-full bg-brand-crimson lg:h-[2.18vw]" />
    </>
  );
}
