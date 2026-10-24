"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  E,
  gradientText,
  headingText,
  bodyText,
} from "./aboutShared";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-20 pt-32 sm:pt-40">
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "rgba(37,99,235,0.10)" }}
      />

      <div
        className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full blur-3xl"
        style={{ background: "rgba(6,182,212,0.10)" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: E }}
        >
          <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-500">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />
            About StandoutDev
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: E }}
          className="mb-6 max-w-5xl text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          <span style={headingText}>
            An IT company built for
          </span>
          <br />
          <span style={gradientText}>
            products that work.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: E }}
          className="mb-8 max-w-2xl"
          style={bodyText}
        >
          StandoutDev is an IT solutions company based in India.
          We build websites, mobile apps, and custom software
          that convert visitors, retain users, and support real
          business work. No fluff. No templates. No compromises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: E }}
          className="flex flex-wrap gap-3"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            See Our Work
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Start Building
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-10">
          {[
            ["2026", "Founded"],
            ["3", "Client projects live"],
            ["3", "Industries"],
            ["24hr", "Reply time"],
          ].map(([number, label]) => (
            <div key={label}>
              <p
                className="text-2xl font-black"
                style={gradientText}
              >
                {number}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}