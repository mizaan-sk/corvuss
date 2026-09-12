"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function ShapingArtists() {
  return (
    <section id="program" className="relative overflow-hidden bg-white lg:h-[50.18vw]">
      <div className="px-6 pt-14 sm:px-10 lg:px-0 lg:pt-0">
        <Reveal from="up" className="lg:absolute lg:left-[10.19vw] lg:top-[4.91vw] lg:z-10">
          <h2 className="font-display text-[2.6rem] leading-[1.12] text-black sm:text-[7.4vw] lg:text-[4.91vw] lg:leading-[1.24]">
            Shaping the Next
            <br />
            Generation of <span className="text-[#e30000]">Artists</span>
          </h2>
        </Reveal>

        <Reveal
          from="right"
          delay={0.1}
          className="relative mx-auto mt-8 w-[78%] max-w-[420px] lg:absolute lg:bottom-auto lg:left-[55.55vw] lg:top-[4.28vw] lg:z-20 lg:mt-0 lg:w-[43.42vw] lg:max-w-none"
        >
          <Image
            src="/images/sax-student.png"
            alt="Student holding a saxophone"
            width={732}
            height={775}
            className="h-auto w-full -scale-x-100"
          />
        </Reveal>

        <Reveal
          from="up"
          delay={0.12}
          className=" lg:absolute lg:left-[7.66vw] lg:top-[17.57vw] lg:z-10 lg:mt-0 lg:w-[74.67vw]"
        >
          <div className="rounded-2xl bg-brand-gold px-6 py-7 sm:px-9 sm:py-9 lg:h-[18.74vw] lg:rounded-[1.55vw] lg:px-[2.88vw] lg:pt-[1.77vw]">
            <p className="text-[0.95rem] leading-[1.5] text-neutral-900 sm:text-[1.05rem] lg:text-[1.375vw] lg:leading-[1.37]">
              Tomorrow&apos;s artists will be more than exceptional performers.
              <br className="hidden lg:block" /> They will be creators, collaborators, innovators and cultural leaders
              <br className="hidden lg:block" /> who combine artistic excellence with creativity, technology and global
              <br className="hidden lg:block" /> opportunity.
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.5] text-neutral-900 sm:text-[1.05rem] lg:mt-[1.05vw] lg:text-[1.375vw] lg:leading-[1.37]">
              The <strong className="font-bold">Corvuss &times; Furtados School of Music Music Specialisation</strong>
              <br className="hidden lg:block" /> <strong className="font-bold">Programme</strong> has been designed to nurture this next generation
              <br className="hidden lg:block" /> through a rigorous and structured educational experience.
            </p>
          </div>
        </Reveal>

        <Reveal
          from="left"
          delay={0.15}
          className="mt-8 pb-14 lg:absolute lg:left-[8.85vw] lg:top-[39.43vw] lg:z-10 lg:mt-0 lg:w-[58vw] lg:pb-0"
        >
          <div className="border-l-[5px] border-[#bb0a0a] pl-5 lg:border-l-[0.35vw] lg:pl-[1.3vw]">
            <p className="text-[0.95rem] leading-[1.5] text-neutral-900 sm:text-[1.05rem] lg:text-[1.375vw] lg:leading-[1.385]">
              Students from Grade <strong className="font-bold">8&ndash;12 develop musicianship, performance, creativity,</strong>
              <br className="hidden lg:block" /> <strong className="font-bold">critical thinking and artistic discipline</strong> alongside an internationally aligned
              <br className="hidden lg:block" /> academic education&mdash;preparing them for higher education and meaningful
              <br className="hidden lg:block" /> careers in music.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
