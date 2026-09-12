"use client";

import Image from "next/image";
import Reveal from "./Reveal";

const wave = "M0 29.1 C6 31.3, 13 31.8, 20 31.75 C30 31.6, 38 30.4, 48 28.4 C58 26.7, 68 25.7, 77 25.6 C86 25.6, 94 27, 100 28.4 L100 100 L0 100 Z";
const waveStrip = "M0 3.5 C6 5.7, 13 6.2, 20 6.15 C30 6, 38 4.8, 48 2.8 C58 1.1, 68 .1, 77 0 C86 0, 94 1.4, 100 2.8 L100 10 L0 10 Z";

const partners = [
  {
    logo: "/images/furtados-logo.png",
    alt: "Furtados School of Music",
    width: 416,
    height: 131,
    logoWidth: "w-[47.9%]",
    fill: "#cc2a2a",
    body: [
      "Backed by Furtados' legacy since 1865, our programme combines expert training and credible music education to nurture the next generation of young artists.",
      "With a presence across 200+ schools and music centres, students gain access to a trusted ecosystem for meaningful musical growth.",
    ],
  },
  {
    logo: "/images/corvuss-logo.png",
    alt: "Corvuss American Academy",
    width: 257,
    height: 71,
    logoWidth: "w-[53.4%]",
    fill: "#85161e",
    body: [
      "India's first international boarding school for student-athletes.",
      "Located on a 24-acre campus in Karjat, Maharashtra, it helps students balance elite athletic training with a US high school curriculum.",
    ],
    strong: "The school is fully accredited by the WASC.",
  },
];

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-[#ebebe8] lg:h-[54.04vw]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/partners-bg.jpg"
          alt=""
          width={800}
          height={1200}
          sizes="110vw"
          className="absolute left-[-1.84vw] top-[-30%] h-auto w-[105.78vw] max-w-none lg:top-[-51.23vw]"
        />
      </div>
      <div className="absolute inset-0 bg-[#eef1f2]/82" />

      <div className="relative z-10 px-6 py-14 sm:px-10 lg:px-0 lg:py-0">
        <Reveal from="up" className="lg:absolute lg:inset-x-0 lg:top-[2.95vw]">
          <h2 className="text-center font-display text-[2.1rem] leading-none text-black sm:text-[6vw] lg:text-[5.08vw]">
            ABOUT THE PARTNERS
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:absolute lg:left-[5.69vw] lg:top-[11.31vw] lg:mt-0 lg:w-[86.72vw] lg:grid-cols-2 lg:gap-[7.24vw]">
          {partners.map((partner, index) => (
            <Reveal
              key={partner.alt}
              from="up"
              delay={index * 0.12}
              className="relative overflow-hidden rounded-[1.6rem] bg-white shadow-[0_16px_36px_-22px_rgba(0,0,0,0.45)] lg:h-[39.9vw] lg:rounded-[1.5vw]"
            >
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 hidden h-full w-full lg:block"
              >
                <path d={wave} fill={partner.fill} />
              </svg>

              <div className="relative flex flex-col lg:block">
                <div className="flex justify-center py-[9%] lg:block lg:py-0">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                    className={`h-auto ${partner.logoWidth} lg:absolute lg:left-1/2 lg:top-[2.74vw] lg:-translate-x-1/2`}
                  />
                </div>
                <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="block h-[7%] min-h-[26px] w-full lg:hidden">
                  <path d={waveStrip} fill={partner.fill} />
                </svg>
                <div
                  style={{ backgroundColor: partner.fill }}
                  className="space-y-6 px-7 pb-9 pt-2 sm:px-8 lg:absolute lg:left-[8.2%] lg:top-[13.2vw] lg:w-[83.6%] lg:space-y-[2.41vw] lg:!bg-transparent lg:px-0 lg:pb-0 lg:pt-0">
                  {partner.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[0.95rem] leading-[1.5] text-white sm:text-[1.05rem] lg:text-[1.72vw] lg:leading-[1.4]"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {partner.strong && (
                    <p className="text-[0.95rem] font-bold leading-[1.5] text-white sm:text-[1.05rem] lg:text-[1.72vw] lg:leading-[1.4]">
                      {partner.strong}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
