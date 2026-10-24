
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  "A clear conversation about your goals",
  "A solution tailored to your requirements",
  "A practical plan for the next steps",
];

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f4f8] via-white to-[#f8f9fa] px-5 pb-24 pt-10 text-slate-900 sm:px-8 sm:pb-28 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.07] via-transparent to-violet-400/[0.07]" />

        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-blue-300/[0.20] blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-violet-300/[0.16] blur-[110px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(51,65,85,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(51,65,85,0.25) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="relative grid items-center gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
              <Sparkles size={14} />
              Let's build something meaningful
            </div>

            <h2 className="mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Your next big idea
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                starts right here.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Whether you're starting from scratch or improving an existing
              product, let's explore how the right digital solution can help
              move your business forward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Start your project
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:hello@standoutdev.com"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-300 bg-white/80 px-7 py-4 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                <MessageCircle size={17} />
                Send an email
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Let's discuss your idea
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
              <span>Clear scope, no pressure</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-600">
                    Your project
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    A strong start.
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50 text-blue-600">
                  <Sparkles size={22} />
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                Every successful project begins with understanding what matters
                most to you.
              </p>

              <div className="mt-7 space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.1,
                    }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    <p className="text-sm leading-6 text-slate-700">
                      {highlight}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-violet-50 p-4">
                <p className="text-sm font-medium text-blue-700">
                  Have a project in mind?
                </p>
                <p className="mt-1 text-xs leading-6 text-slate-600">
                  Share your idea and let's discuss the right approach.
                </p>
              </div>
            </div>

            <div className="absolute -right-3 -top-3 -z-0 h-20 w-20 rounded-full border border-blue-200/70" />
            <div className="absolute -bottom-3 -left-3 -z-0 h-16 w-16 rounded-full border border-violet-200/70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
