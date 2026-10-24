
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export default function WorkCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-12 text-center backdrop-blur-sm sm:px-12 sm:py-16"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-sky-300">
          <MessageCircle size={25} />
        </span>

        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
          Have an idea?
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          Let&apos;s build something
          <span className="block text-blue-400">meaningful together.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
          Tell us what you are planning. Let&apos;s discuss your goals and
          explore how we can bring your next digital project to life.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
        >
          Let&apos;s talk
          <ArrowUpRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}
