"use client";

import Reveal from "./Reveal";

const learn = ["At Centre", "Online Classes", "Home Tuitions", "At School"];
const relevant = ["About Us", "Media", "Resources", "Musical Showcase", "Music Exams"];

const socials = [
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm5.99-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z",
  },
  {
    label: "Twitter",
    path: "M22 5.9c-.73.33-1.52.55-2.35.65a4.1 4.1 0 0 0 1.8-2.27 8.2 8.2 0 0 1-2.6 1 4.09 4.09 0 0 0-7.08 2.8c0 .32.04.63.1.93A11.6 11.6 0 0 1 3.44 4.7a4.09 4.09 0 0 0 1.27 5.46 4.06 4.06 0 0 1-1.85-.51v.05a4.09 4.09 0 0 0 3.28 4.01c-.32.09-.66.13-1.01.13-.25 0-.49-.02-.73-.07a4.1 4.1 0 0 0 3.82 2.84A8.2 8.2 0 0 1 2 18.29a11.57 11.57 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.67v-.53A8.3 8.3 0 0 0 22 5.9Z",
  },
  {
    label: "Facebook",
    path: "M12 2a10 10 0 0 0-1.56 19.88v-7.03H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.85h-2.33v7.03A10 10 0 0 0 12 2Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.83v1.64h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21h-4V9Z",
  },
];

function Contact({ icon, label, value, href }) {
  return (
    <div className="flex items-center gap-3 lg:gap-[0.55vw]">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center text-white lg:h-[2.2vw] lg:w-[2.2vw]">
        {icon}
      </span>
      <span className="block">
        <span className="block text-[0.72rem] leading-[1.35] text-neutral-300 lg:text-[0.85vw]">{label}</span>
        <a href={href} className="block text-[0.92rem] font-bold leading-[1.35] text-white transition-colors hover:text-brand-gold lg:text-[1.02vw]">
          {value}
        </a>
      </span>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer id="contact" className="relative z-0 overflow-hidden bg-brand-ink lg:h-[29.45vw]">
      <div className="px-6 pb-10 pt-24 sm:px-10 lg:px-0 lg:pb-0 lg:pt-0">
        <div className="grid gap-10 sm:grid-cols-2 lg:block lg:gap-0">
          <Reveal from="up" className="lg:absolute lg:left-[7.73vw] lg:top-[7.67vw]">
            <h3 className="text-[1.05rem] font-bold text-white lg:text-[1.91vw] lg:leading-none">Have a question?</h3>
            <div className="mt-5 space-y-5 lg:mt-[1.01vw] lg:space-y-[1.76vw]">
              <Contact
                href="tel:18002664366"
                label="Call us on"
                value="18002664366"
                icon={
                  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1 1 0 0 1-.25 1l-2.2 2.3Z" />
                  </svg>
                }
              />
              <Contact
                href="mailto:enquiry@fsm.net.in"
                label="Drop an email at"
                value="enquiry@fsm.net.in"
                icon={
                  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="5.5" width="18" height="13" rx="3.5" />
                    <path d="m5 8.5 7 4.6 7-4.6" />
                  </svg>
                }
              />
            </div>
          </Reveal>

          <Reveal from="up" delay={0.08} className="lg:absolute lg:left-[34.85vw] lg:top-[8.67vw]">
            <h3 className="text-[1.05rem] font-bold text-white lg:text-[1.75vw] lg:leading-none">Learn Music</h3>
            <ul className="mt-4 space-y-3 lg:mt-[1.42vw] lg:space-y-[1.76vw]">
              {learn.map((item) => (
                <li key={item} className="lg:leading-none">
                  <a href="#contact" className="text-[0.9rem] text-neutral-200 transition-colors duration-200 hover:text-brand-gold lg:text-[1.05vw]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="up" delay={0.16} className="lg:absolute lg:left-[65.57vw] lg:top-[8.45vw]">
            <h3 className="text-[1.05rem] font-bold text-white lg:text-[1.58vw] lg:leading-none">Relevant Links</h3>
            <ul className="mt-4 space-y-3 lg:mt-[1.46vw] lg:space-y-[1.38vw]">
              {relevant.map((item) => (
                <li key={item} className="lg:leading-none">
                  <a href="#contact" className="text-[0.9rem] text-neutral-200 transition-colors duration-200 hover:text-brand-gold lg:text-[0.94vw]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal from="up" delay={0.24} className="lg:absolute lg:left-[82.22vw] lg:top-[9.79vw]">
            <h3 className="text-[1.05rem] font-bold text-white lg:text-[1.89vw] lg:leading-none">Follow Us</h3>
            <div className="mt-4 flex gap-4 lg:mt-[1.05vw] lg:gap-[1.45vw]">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#contact"
                  aria-label={social.label}
                  className="text-white transition-colors duration-200 hover:text-brand-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 lg:h-[1.55vw] lg:w-[1.55vw]" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <p className="mt-12 text-center text-[0.78rem] text-neutral-200 lg:absolute lg:inset-x-0 lg:top-[26.45vw] lg:mt-0 lg:pr-[1.76vw] lg:text-[1.26vw] lg:leading-none">
          Copyright &copy; 2024 | FSM Education Pvt Ltd |{" "}
          <a href="#contact" className="text-[#7ea6ff] hover:underline">Privacy Policy</a> |{" "}
          <a href="#contact" className="text-[#7ea6ff] hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
