"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const points = [
  "Already have a strong interest in music.",
  "Wish to pursue music beyond hobby-level learning.",
  "Aspire to study music at university.",
  "Want to continue strong academic performance alongside specialized music education.",
];

export default function RightForYourChild() {
  return (
    <section className="relative overflow-hidden bg-brand-mist lg:h-[56.22vw]">
      <div className="absolute inset-x-0 top-[6%] h-[74%] bg-brand-cream lg:left-0 lg:top-[8.15vw] lg:h-[41.11vw] lg:w-[59.94vw]" />

      <div className="relative z-10 px-6 py-14 sm:px-10 lg:px-0 lg:py-0">
        <div className="border-[3px] border-brand-gold px-6 py-10 sm:px-9 lg:absolute lg:left-[7.45vw] lg:top-[5.9vw] lg:h-[46.17vw] lg:w-[55vw] lg:border-[0.35vw] lg:px-0 lg:py-0">
          <Reveal from="up" className="lg:absolute lg:left-[3.09vw] lg:top-[3.48vw]">
            <h2 className="font-display text-[2.5rem] leading-[1.16] text-black sm:text-[7vw] lg:text-[4.9vw] lg:leading-[1.39]">
              Is This Programme
              <br />
              <span className="text-[#c81414]">Right</span> for Your Child?
            </h2>
          </Reveal>

          <Reveal from="up" delay={0.1} className="lg:absolute lg:left-[3.09vw] lg:top-[19.55vw]">
            <p className="mt-6 text-[1rem] font-bold text-neutral-900 sm:text-[1.15rem] lg:mt-0 lg:text-[1.71vw]">
              This programme is designed for students who:
            </p>
            <ul className="mt-4 space-y-3 lg:ml-[1.34vw] lg:mt-[0.43vw] lg:space-y-0">
              {points.map((point) => (
                <li
                  key={point}
                  className="relative pl-6 text-[0.95rem] leading-[1.6] text-neutral-900 sm:text-[1.05rem] lg:pl-[1.4vw] lg:text-[1.72vw] lg:leading-[1.96]"
                >
                  <span className="absolute left-0 top-[0.6em] h-[6px] w-[6px] rounded-full bg-neutral-900 lg:top-[0.86em] lg:h-[0.42vw] lg:w-[0.42vw]" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Reveal
        from="right"
        className="relative z-20 h-[70vw] w-full sm:h-[54vw] lg:absolute lg:inset-y-0 lg:left-[59.94vw] lg:h-full lg:w-[35.07vw]"
      >
        <Image
          src="/images/piano-spotlight.jpg"
          alt="Pianist performing under a spotlight"
          fill
          sizes="(min-width: 1024px) 36vw, 100vw"
          className="object-cover object-left"
        />
      </Reveal>
    </section>
  );
}
