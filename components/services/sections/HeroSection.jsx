
"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#b8bec9] via-[#e5e7eb] to-[#f8f9fa] px-5 pb-24 pt-28 text-slate-900 sm:px-8 sm:pb-32 sm:pt-36 lg:px-12 lg:pt-40">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-blue-400/20 blur-[130px]" />
        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-purple-400/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(71,85,105,0.12)_1px,transparent_1px)] [background-size:30px_30px] opacity-50" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Hero content */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/80 bg-white/75 px-4 py-2 text-xs font-semibold tracking-wide text-slate-700 shadow-sm backdrop-blur-md sm:text-sm">
              <Sparkles size={15} className="text-blue-600" />
              WHAT WE DO AT STANDOUTDEV
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-[-0.045em] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Digital services.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Built to stand out.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg"
          >
            From high-performance websites to thoughtful digital experiences,
            we help ambitious businesses turn ideas into products people love
            to use.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-slate-800"
            >
              Start a project
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#our-services"
              className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-sm transition duration-300 hover:border-blue-400 hover:text-blue-600"
            >
              Explore services
              <ArrowDownRight size={17} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-300/80 pt-6 text-sm text-slate-600"
          >
            <span>Strategy-led</span>
            <span className="h-1 w-1 rounded-full bg-blue-600" />
            <span>Built for performance</span>
            <span className="h-1 w-1 rounded-full bg-purple-600" />
            <span>Made to scale</span>
          </motion.div>
        </motion.div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-400/20 via-transparent to-purple-400/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-2xl shadow-slate-400/20 backdrop-blur-xl sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-slate-800">
                  Digital experience
                </span>
              </div>
              <span className="text-xs text-slate-400">STUDIO / 001</span>
            </div>

            <div className="relative mt-6 flex min-h-[270px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#dbeafe] via-[#ede9fe] to-[#cffafe] p-6 sm:min-h-[330px]">
              <div className="absolute h-56 w-56 rounded-full border border-blue-400/30" />
              <div className="absolute h-40 w-40 rounded-full border border-purple-400/40" />
              <div className="absolute h-28 w-28 rounded-full bg-cyan-400/20 blur-2xl" />

              <div className="relative w-full max-w-xs -rotate-3 rounded-2xl border border-white/90 bg-white/90 p-5 shadow-xl shadow-slate-400/20 backdrop-blur-xl transition duration-500 hover:rotate-0">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] tracking-widest text-slate-400">
                    CREATIVE STUDIO
                  </span>
                </div>

                <div className="mt-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-600">
                    Design with purpose
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900">
                    Ideas into
                    <br />
                    <span className="text-purple-600">experiences.</span>
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                      Explore work
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700">
                      <ArrowRight size={17} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 rounded-xl border border-white/80 bg-white/85 px-3 py-2 shadow-md backdrop-blur-md">
                <p className="text-[10px] text-slate-500">DESIGN SYSTEM</p>
                <p className="mt-1 text-sm font-medium text-blue-700">
                  Thoughtfully crafted
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["01", "Strategy"],
                ["02", "Design"],
                ["03", "Build"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="rounded-xl border border-slate-200 bg-slate-50/80 p-3"
                >
                  <span className="text-xs font-semibold text-blue-600">
                    {number}
                  </span>
                  <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
