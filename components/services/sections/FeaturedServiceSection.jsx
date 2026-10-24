
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  CheckCircle2,
  Sparkles,
  Gauge,
  ShieldCheck,
  Layers3,
} from "lucide-react";

const features = [
  "Responsive layouts for every screen size",
  "Performance-focused development",
  "SEO-friendly page structure",
  "Scalable and maintainable code",
];

const capabilities = [
  { icon: Gauge, title: "Performance", value: "Speed-first builds" },
  { icon: ShieldCheck, title: "Reliability", value: "Quality-focused" },
  { icon: Layers3, title: "Scalability", value: "Ready to grow" },
];

export default function FeaturedServiceSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-white to-slate-50 px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12">
      {/* Background effect */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-400/[0.10] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
          <Sparkles size={15} />
          Featured capability
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm">
              <Code2 size={14} />
              Our core expertise
            </span>

            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Websites that work
              <br />
              as hard as{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                you do.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Your website should be more than a digital brochure. We create
              purposeful web experiences that communicate your value, guide
              your visitors and support your business goals.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-blue-600"
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/services/web-development"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
              >
                Explore web development
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-blue-400 hover:text-blue-600"
              >
                Discuss your project
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-400/20 via-cyan-300/10 to-purple-400/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/85 p-5 shadow-xl shadow-slate-400/15 backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                    Project preview
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-900">
                    Digital experience
                  </p>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600">
                  <Code2 size={20} />
                </span>
              </div>

              <div className="relative mt-5 overflow-hidden rounded-2xl border border-white bg-gradient-to-br from-[#dbeafe] via-[#ede9fe] to-[#cffafe] p-6 sm:p-8">
                <div className="absolute -right-8 -top-12 h-48 w-48 rounded-full border border-blue-400/30" />
                <div className="absolute -right-2 top-0 h-36 w-36 rounded-full border border-purple-400/30" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    BUILT FOR WHAT'S NEXT
                  </span>

                  <h3 className="mt-6 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    Make your
                    <br />
                    next move
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      count.
                    </span>
                  </h3>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-black px-4 py-2.5 text-xs font-semibold text-white shadow-sm">
                      Discover more
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-md transition hover:bg-blue-700">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {capabilities.map(({ icon: Icon, title, value }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 transition duration-300 hover:border-blue-200 hover:bg-blue-50/70"
                  >
                    <Icon size={18} className="text-blue-600" />
                    <p className="mt-3 text-xs font-semibold text-slate-800">
                      {title}
                    </p>
                    <p className="mt-1 text-[10px] leading-5 text-slate-500">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
