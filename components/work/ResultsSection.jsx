
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { workStats } from "./projectsData";

export default function ResultsSection({ stats = workStats }) {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-sky-300">
            <CheckCircle2 size={16} />
            Built with purpose
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Small details.
            <span className="mt-2 block text-blue-400">
              Meaningful impact.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-slate-400">
            We focus on useful experiences, responsive interfaces, and
            thoughtful execution to bring each digital project to life.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sky-300"
          >
            Build something together
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-blue-400/40 hover:bg-white/[0.07] sm:p-7"
            >
              <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {stat.value}
              </p>

              <div className="my-5 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-sky-400" />

              <p className="text-sm font-medium leading-6 text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
