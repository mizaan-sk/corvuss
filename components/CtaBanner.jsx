"use client";

import { useState } from "react";
import DoodleBand from "./DoodleBand";
import EnquiryDialog from "./EnquiryDialog";
import Reveal from "./Reveal";

export default function CtaBanner() {
  const [open, setOpen] = useState(false);

  return (
    <DoodleBand base="#fdbd10" doodle="#e9ae0e" offset="14.34vw" className="!overflow-visible px-6 pb-24 pt-14 text-center sm:px-10 lg:h-[23.82vw] lg:px-0 lg:pb-0 lg:pt-0">
      <Reveal from="up" className="relative z-10 lg:absolute lg:inset-x-0 lg:top-[4.71vw] lg:pl-[2.04vw]">
        <h2 className="font-display text-[1.65rem] leading-[1.15] text-black sm:text-[4.8vw] lg:text-[5.07vw] lg:leading-none">
          READY TO EXPLORE A DIFFERENT FUTURE?
        </h2>
      </Reveal>

      <Reveal from="up" delay={0.1} className="relative z-10 lg:absolute lg:inset-x-0 lg:top-[10.89vw] lg:pl-[1.4vw]">
        <p className="mt-4 text-[1rem] leading-[1.45] text-neutral-900 sm:text-[1.25rem] lg:mt-0 lg:text-[2.42vw] lg:leading-[1.37]">
          Discover how your child can pursue Academic Excellence
          <br className="hidden sm:block" /> while Building a future in music.
        </p>
      </Reveal>

      <Reveal
        from="zoom"
        delay={0.18}
        className="relative z-20 mt-8 flex justify-center lg:absolute lg:inset-x-0 lg:top-[18.69vw] lg:mt-0"
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center rounded-xl lg:rounded-[1vw] justify-center bg-[#f7fbfb] px-10 py-5 font-display text-[1.6rem] leading-none tracking-[0.04em] text-black shadow-[0_18px_34px_-20px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.04] sm:text-[4vw] lg:h-[8.15vw] lg:w-[26.35vw] lg:px-0 lg:py-0 lg:text-[4.1vw]"
        >
          ENQUIRE NOW
        </button>
      </Reveal>

      <EnquiryDialog open={open} onClose={() => setOpen(false)} />
    </DoodleBand>
  );
}
