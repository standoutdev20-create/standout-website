
"use client";

import { motion } from "framer-motion";
import {
  Target,
  Zap,
  ShieldCheck,
  TrendingUp,
  MessagesSquare,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    icon: Target,
    title: "Built around your goals",
    description:
      "We start by understanding your business, your users and what success looks like before shaping the right digital solution.",
    tag: "Purpose first",
  },
  {
    number: "02",
    icon: Zap,
    title: "Performance that matters",
    description:
      "Thoughtful development and optimization help create fast, responsive experiences across modern devices.",
    tag: "Speed focused",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Quality at every step",
    description:
      "From the first design to final testing, we focus on consistency, usability and maintainable implementation.",
    tag: "Quality driven",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Ready to scale",
    description:
      "We consider your future plans so your digital product can evolve as your business and customer needs change.",
    tag: "Future ready",
  },
  {
    number: "05",
    icon: MessagesSquare,
    title: "Clear communication",
    description:
      "Stay informed about progress, decisions and next steps with a collaborative, transparent workflow.",
    tag: "No guesswork",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Support beyond launch",
    description:
      "Your launch is a milestone, not the end. We can help you plan improvements and keep your digital experience evolving.",
    tag: "Built to improve",
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8f9fa] px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12">
      {/* Background effects */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-400/[0.10] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Section introduction */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              <span className="h-px w-8 bg-blue-600" />
              Why StandOutDev
            </div>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Good work is
              <br />
              just the start.
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Great results are the goal.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              The right digital partner brings more than technical skills. We
              combine thoughtful planning, purposeful design and reliable
              execution to help you move forward with confidence.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Target size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  One shared direction
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Your goals guide the work.
                </p>
              </div>

              <ArrowUpRight size={18} className="ml-2 text-blue-600" />
            </div>
          </motion.div>

          {/* Benefits grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.09 },
              },
            }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.number}
                  variants={{
                    hidden: { opacity: 0, y: 22 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/[0.05] sm:p-7"
                >
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-400/[0.06] blur-2xl transition group-hover:bg-purple-400/[0.12]" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <span className="font-mono text-xs text-slate-400">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold text-slate-900 sm:text-xl">
                    {benefit.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>

                  <div className="relative mt-6 border-t border-slate-200 pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-blue-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                      {benefit.tag}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
