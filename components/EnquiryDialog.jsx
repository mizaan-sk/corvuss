"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { getLenis } from "./SmoothScroll";

const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const specialisations = [
  "Voice",
  "Piano",
  "Guitar",
  "Drums",
  "Composition",
  "Songwriting",
  "Musical Theatre",
  "Music Production",
  "Performance",
];

const emptyForm = {
  student: "",
  parent: "",
  email: "",
  phone: "",
  grade: "",
  focus: "",
  message: "",
};

const panel = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 26, staggerChildren: 0.045, delayChildren: 0.1 },
  },
  exit: { opacity: 0, y: 28, scale: 0.97, transition: { duration: 0.2, ease: "easeIn" } },
};

const field = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function validate(values) {
  const next = {};
  if (!values.student.trim()) next.student = "Please enter the student's name";
  if (!values.email.trim()) next.email = "Please enter an email address";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) next.email = "That email doesn't look right";
  if (!values.phone.trim()) next.phone = "Please enter a phone number";
  else if (values.phone.replace(/\D/g, "").length < 8) next.phone = "Please enter a valid phone number";
  if (!values.grade) next.grade = "Select a grade";
  return next;
}

const subscribeToNothing = () => () => {};

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-[0.95rem] text-neutral-900 outline-none transition-colors duration-200 placeholder:text-neutral-400 focus:border-brand-deep focus:ring-2 focus:ring-brand-deep/20";

function Field({ label, error, wide, children }) {
  return (
    <motion.label variants={field} className={`block ${wide ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-[0.78rem] font-bold uppercase tracking-[0.08em] text-neutral-500">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-[0.75rem] text-brand-deep">{error}</span>}
    </motion.label>
  );
}

export default function EnquiryDialog({ open, onClose }) {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const mounted = useSyncExternalStore(subscribeToNothing, () => true, () => false);
  const panelRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const lenis = getLenis();
    lenis?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const opener = document.activeElement;
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus(), 220);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll(
        'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      lenis?.start();
      if (opener instanceof HTMLElement) opener.focus();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) return;
    const reset = window.setTimeout(() => {
      setValues(emptyForm);
      setErrors({});
      setStatus("idle");
    }, 400);
    return () => window.clearTimeout(reset);
  }, [open]);

  const update = (name) => (event) => {
    const { value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      const firstInvalid = panelRef.current?.querySelector("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          data-lenis-prevent
          className="fixed inset-0 z-[100] overflow-y-auto bg-black/65 backdrop-blur-[3px]"
        >
          <div
            className="flex min-h-full items-center justify-center px-4 py-6 sm:py-10"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) onClose();
            }}
          >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-[38rem] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="relative overflow-hidden bg-brand-deep px-7 py-6 sm:px-9">
              <div className="doodle-overlay bg-[#ac0909]" />
              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <h2 id="enquiry-title" className="font-display text-[1.9rem] leading-none text-white sm:text-[2.3rem]">
                    ENQUIRE NOW
                  </h2>
                  <p className="mt-2 max-w-[24rem] text-[0.86rem] leading-[1.5] text-white/80">
                    Tell us about your child and our admissions team will get back within two working days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close enquiry form"
                  className="-mr-1 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors duration-200 hover:bg-white/15 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center px-7 py-14 text-center sm:px-9"
                >
                  <motion.span
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 240, damping: 14 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold"
                  >
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#1a1a1a" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <motion.path
                        d="M5 13l4 4L19 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.span>
                  <h3 className="mt-6 font-display text-[1.6rem] leading-none text-neutral-900">THANK YOU!</h3>
                  <p className="mt-3 max-w-[24rem] text-[0.95rem] leading-[1.55] text-neutral-600">
                    Your enquiry is with us. We&apos;ll reach out on {values.email} shortly with programme details and next steps.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-8 rounded-lg bg-brand-deep px-8 py-3 text-[0.9rem] font-bold tracking-[0.04em] text-white transition-transform duration-200 hover:scale-[1.03]"
                  >
                    CLOSE
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  variants={panel}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-4 px-7 py-7 sm:grid-cols-2 sm:px-9"
                >
                  <Field label="Student name" error={errors.student}>
                    <input
                      ref={firstFieldRef}
                      value={values.student}
                      onChange={update("student")}
                      aria-invalid={Boolean(errors.student)}
                      placeholder="Aarav Sharma"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Parent name">
                    <input value={values.parent} onChange={update("parent")} placeholder="Optional" className={inputClass} />
                  </Field>

                  <Field label="Email" error={errors.email}>
                    <input
                      type="email"
                      value={values.email}
                      onChange={update("email")}
                      aria-invalid={Boolean(errors.email)}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Phone" error={errors.phone}>
                    <input
                      type="tel"
                      value={values.phone}
                      onChange={update("phone")}
                      aria-invalid={Boolean(errors.phone)}
                      placeholder="+91 98200 00000"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Applying for" error={errors.grade}>
                    <select
                      value={values.grade}
                      onChange={update("grade")}
                      aria-invalid={Boolean(errors.grade)}
                      className={inputClass}
                    >
                      <option value="">Select a grade</option>
                      {grades.map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Music focus">
                    <select value={values.focus} onChange={update("focus")} className={inputClass}>
                      <option value="">Not decided yet</option>
                      {specialisations.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Anything we should know?" wide>
                    <textarea
                      rows={3}
                      value={values.message}
                      onChange={update("message")}
                      placeholder="Current level, instruments already played, questions about the programme..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <motion.div variants={field} className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="flex w-full items-center justify-center gap-3 rounded-lg bg-brand-gold py-4 font-display text-[1.25rem] leading-none tracking-[0.04em] text-black transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "sending" ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                            className="block h-5 w-5 rounded-full border-2 border-black/25 border-t-black"
                          />
                          SENDING
                        </>
                      ) : (
                        "SUBMIT ENQUIRY"
                      )}
                    </button>
                    <p className="mt-3 text-center text-[0.75rem] text-neutral-500">
                      We never share your details. Read our privacy policy.
                    </p>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
