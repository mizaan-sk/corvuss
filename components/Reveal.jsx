"use client";

import { motion } from "framer-motion";

const presets = {
  up: { opacity: 0, y: 42 },
  down: { opacity: 0, y: -32 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  fade: { opacity: 0 },
  zoom: { opacity: 0, scale: 0.94 },
};

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  className,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={presets[from]}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
