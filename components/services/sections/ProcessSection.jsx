
"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Search,
  PenTool,
  Code2,
  ClipboardCheck,
  Rocket,
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    label: "Understand the vision",
    description:
      "We discuss your goals, audience, requirements and challenges to understand what your project really needs.",
    icon: MessageCircle,
    duration: "Listen & learn",
  },
  {
    number: "02",
    title: "Strategy",
    label: "Plan the right direction",
    description:
      "We define the project scope, priorities, user journey and a practical plan before moving into production.",
    icon: Search,
    duration: "Plan with purpose",
  },
  {
    number: "03",
    title: "Design",
    label: "Shape the experience",
    description:
      "We develop the visual direction, page layouts and interactions around your brand and users.",
    icon: PenTool,
    duration: "Make it meaningful",
  },
  {
    number: "04",
    title: "Development",
    label: "Bring it to life",
    description:
      "We build responsive interfaces and the required functionality with a focus on usability and maintainability.",
    icon: Code2,
    duration: "Build with care",
  },
  {
    number: "05",
    title: "Testing",
    label: "Refine every detail",
    description:
      "We review the experience across screen sizes, test key functionality and address issues before launch.",
    icon: ClipboardCheck,
    duration: "Quality comes first",
  },
  {
    number: "06",
    title: "Launch",
    label: "Ready for the world",
    description:
      "We prepare the final delivery, help launch the project and discuss the next steps for continued improvement.",
    icon: Rocket,
    duration: "Launch & grow",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-white to-[#f1f4f8] px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-400/[0.10] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            <span className="h-px w-7 bg-blue-500" />
            How we work
            <span className="h-px w-7 bg-blue-500" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            A clear process.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              A better outcome.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Great digital work comes from thoughtful collaboration. Our process
            keeps the project organized, the goals clear and the details moving
            in the right direction.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative mt-16">
          <div className="absolute bottom-10 left-6 top-10 w-px bg-gradient-to-b from-blue-400/70 via-violet-300/50 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.04 }}
                  className="relative grid grid-cols-[48px_minmax(0,1fr)] gap-4 sm:grid-cols-[1fr_72px_1fr] sm:gap-5"
                >
                  {/* Timeline marker */}
                  <div className="relative z-10 flex justify-center sm:col-start-2 sm:row-start-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-white text-blue-600 shadow-lg shadow-slate-200/60 sm:h-14 sm:w-14">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Step card */}
                  <div
                    className={`min-w-0 sm:row-start-1 ${
                      isRight
                        ? "sm:col-start-3"
                        : "sm:col-start-1 sm:text-right"
                    }`}
                  >
                    <article
                      className={`group max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-md shadow-slate-200/30 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 sm:p-6 ${
                        !isRight ? "sm:ml-auto" : ""
                      }`}
                    >
                      <div
                        className={`flex items-center justify-between gap-3 ${
                          !isRight ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        <span className="font-mono text-xs tracking-widest text-blue-600">
                          STEP {step.number}
                        </span>

                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] text-slate-500">
                          {step.duration}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-700 sm:text-2xl">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-violet-600">
                        {step.label}
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {step.description}
                      </p>

                      <div
                        className={`mt-5 flex items-center gap-2 text-xs text-slate-400 ${
                          !isRight ? "sm:justify-end" : ""
                        }`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500/70" />
                        One step closer to launch
                      </div>
                    </article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom callout */}
        <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-violet-50 p-6 shadow-lg shadow-slate-200/30 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-lg font-semibold text-slate-900 sm:text-xl">
              Have a project in mind?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Let's discuss your goals and work out the right next step.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
          <ArrowDownRight size={14} className="text-blue-600" />
          From first conversation to final delivery
        </div>
      </div>
    </section>
  );
}
