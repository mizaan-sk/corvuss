"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Reveal from "./Reveal";
import "swiper/css";

const cards = [
  {
    title: ["RIGOROUS MUSIC", "TRAINING"],
    body: [
      "Refined artistic skill,",
      "discipline, confidence, and",
      "long-term creative opportunity.",
    ],
    image: "/images/expect-training.jpg",
    alt: "Music teacher guiding a student at the grand piano",
    crop: "left-[-24.3%] top-[-0.3%] w-[124.9%]",
    lift: "pt-[64.66%]",
  },
  {
    title: ["COLLEGE & PORTFOLIO", "PREPARATION"],
    body: [
      "Students receive guidance for",
      "college applications, performance",
      "recordings, audition preparation,",
      "repertoire selection, original work,",
      "and reflective documentation.",
    ],
    image: "/images/expect-college.jpg",
    alt: "Student preparing a music college portfolio",
    crop: "left-[-3.3%] top-[-51.9%] w-[211.5%]",
    lift: "pt-[62.03%]",
  },
  {
    title: ["SPECIALIZATION", "PATHWAYS"],
    body: [
      "Build strong musical",
      "foundations and specialize in",
      "voice, piano, guitar, drums,",
      "composition, songwriting,musical",
      "theatre, music production, or",
      "performance.",
    ],
    image: "/images/expect-pathways.jpg",
    alt: "Students specialising in voice, piano and guitar",
    crop: "left-[0.3%] top-[-61.9%] w-[277.9%]",
    lift: "pt-[62.03%]",
  },
];

function NavButton({ label, position, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform duration-300 hover:scale-110 lg:absolute lg:top-[30.57vw] lg:h-[5.06vw] lg:w-[5.06vw] ${position}`}
    >
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </button>
  );
}

function Lines({ items }) {
  return items.map((line, index) => (
    <Fragment key={line}>
      {line}{" "}
      {index < items.length - 1 && <br className="hidden lg:block" />}
    </Fragment>
  ));
}

export default function WhatToExpect() {
  const [gap, setGap] = useState(24);
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setGap(w >= 1024 ? w * 0.0169 : w >= 640 ? 20 : 16);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-16 lg:h-[56.36vw] lg:pb-0">
      <Reveal from="up" className="lg:absolute lg:inset-x-0 lg:top-[3.16vw]">
        <h2 className="px-6 pt-12 text-center font-display text-[2.3rem] leading-none text-black sm:text-[6.6vw] lg:px-0 lg:pr-[2.81vw] lg:pt-0 lg:text-[4.92vw]">
          WHAT TO EXPECT?
        </h2>
      </Reveal>

      <div className="mt-10 px-6 sm:px-10 lg:absolute lg:left-[6.61vw] lg:top-[10.75vw] lg:mt-0 lg:w-[83.27vw] lg:px-0">
        <Swiper
          spaceBetween={gap}
          slidesPerView={1}
          loop
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActive(instance.realIndex % cards.length)}
        >
          {[...cards, ...cards].map((card, index) => (
            <SwiperSlide key={`${card.image}-${index}`}>
              <article className="group relative pt-[17.16%]">
                <div className="absolute left-[6.35%] top-0 w-[87.3%] overflow-hidden rounded-lg shadow-[0_12px_24px_-12px_rgba(0,0,0,0.55)] lg:rounded-[1.2vw]">
                  <div className="relative aspect-[331/275] w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={1229}
                      height={820}
                      sizes="(min-width: 1024px) 66vw, 150vw"
                      className={`absolute h-auto max-w-none transition-transform duration-700 group-hover:scale-[1.06] ${card.crop}`}
                    />
                  </div>
                </div>
                <div className={`flex h-full flex-col rounded-2xl bg-brand-amber px-5 pb-8 text-center lg:h-[35.35vw] lg:rounded-[1.15vw] lg:px-[0.7vw] lg:pb-0 ${card.lift}`}>
                  <h3 className="text-[1.05rem] font-bold leading-[1.35] text-neutral-900 sm:text-[2.4vw] lg:text-[2.04vw] lg:leading-[1.39]">
                    <Lines items={card.title} />
                  </h3>
                  <p className="mt-3 text-[0.9rem] leading-[1.45] text-neutral-900 sm:text-[1.7vw] lg:mt-[0.43vw] lg:text-[1.41vw] lg:leading-[1.343]">
                    <Lines items={card.body} />
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 flex items-center justify-center gap-5 lg:mt-0 lg:block">
        <NavButton
          label="Previous slide"
          position="lg:left-[0.77vw]"
          onClick={() => swiper?.slidePrev()}
        >
          <path d="M15 5l-7 7 7 7" />
        </NavButton>

        <div className="flex justify-center gap-[0.84rem] lg:absolute lg:inset-x-0 lg:top-[53.13vw] lg:gap-[1.26vw]">
          {cards.map((card, index) => (
            <button
              key={card.image}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => swiper?.slideToLoop(index)}
              className={`h-[0.85rem] w-[0.85rem] rounded-full bg-neutral-900 transition-opacity duration-300 lg:h-[1.27vw] lg:w-[1.27vw] ${active === index ? "opacity-100" : "opacity-65"}`}
            />
          ))}
        </div>

        <NavButton
          label="Next slide"
          position="lg:left-[90.86vw]"
          onClick={() => swiper?.slideNext()}
        >
          <path d="M9 5l7 7-7 7" />
        </NavButton>
      </div>

    </section>
  );
}
