
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Building2 } from "lucide-react";

export default function LogoMarquee({ clientNames = [] }) {
  const reduceMotion = useReducedMotion();
  const names = clientNames.length
    ? clientNames
    : ["Uma Metal Craft", "Siddhanath Krupa Physics", "Digital Developers"];

  const repeatedNames = [...names, ...names];

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-7 sm:py-9">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
            Projects in our portfolio
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700">
            Explore our work
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      <div className="work-marquee-mask overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-4 pr-4"
          animate={
            reduceMotion ? undefined : { x: ["0%", "-50%"] }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 28,
                  ease: "linear",
                  repeat: Infinity,
                }
          }
        >
          {repeatedNames.map((name, index) => (
            <div
              key={`${name}-${index}`}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] px-5 py-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Building2 size={19} />
              </span>

              <span className="whitespace-nowrap text-sm font-semibold text-slate-700">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
