
"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function WorkHero({ projectCount = 3 }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12">
      <div className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <Sparkles size={15} />
            Our selected work
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-[#0B0F19] sm:text-6xl lg:text-7xl">
            Good ideas.
            <span className="block bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#38BDF8] bg-clip-text text-transparent">
              Great digital work.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore the websites and digital experiences we create with
            thoughtful design, modern technology, and a focus on real-world
            needs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#featured-projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore projects
              <ArrowDown size={17} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0B0F19] transition-all hover:border-blue-200 hover:text-blue-700"
            >
              Start a project
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-slate-200 pt-7"
        >
          <div>
            <p className="text-3xl font-bold text-[#0B0F19]">
              {String(projectCount).padStart(2, "0")}+
            </p>
            <p className="mt-1 text-sm text-slate-500">Featured projects</p>
          </div>

          <div className="hidden h-10 w-px bg-slate-200 sm:block" />

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Every project starts with a clear goal and a focus on the details
            that matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
