
"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Palette,
  Database,
  Server,
  Wind,
  Layers3,
  GitBranch,
  Smartphone,
  Zap,
} from "lucide-react";

const technologies = [
  {
    name: "React.js",
    category: "Frontend",
    icon: Code2,
    description: "Interactive user interfaces",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: Globe,
    description: "Modern web applications",
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: Zap,
    description: "Dynamic web experiences",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: Wind,
    description: "Responsive, utility-first styling",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: Server,
    description: "Server-side functionality",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: Database,
    description: "Flexible data storage",
  },
  {
    name: "Figma",
    category: "Design",
    icon: Palette,
    description: "Interface design and prototyping",
  },
  {
    name: "Git & GitHub",
    category: "Workflow",
    icon: GitBranch,
    description: "Version control and collaboration",
  },
  {
    name: "Responsive UI",
    category: "Experience",
    icon: Smartphone,
    description: "Experiences across screen sizes",
  },
  {
    name: "Reusable Components",
    category: "Architecture",
    icon: Layers3,
    description: "Maintainable component systems",
  },
];

const categories = [
  "Frontend",
  "Backend",
  "Design",
  "Database",
  "Styling",
  "Workflow",
];

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-white to-[#f1f5f9] px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-400/[0.10] blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet-400/[0.09] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            <span className="h-px w-7 bg-blue-500" />
            Tools & technology
            <span className="h-px w-7 bg-blue-500" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            The right tools.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-violet-600 bg-clip-text text-transparent">
              Built for what comes next.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We choose technologies around your project requirements, focusing
            on performance, flexibility and a reliable user experience.
          </p>
        </motion.div>

        {/* Technology categories */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Technology cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.article
                key={technology.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 5) * 0.06,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-blue-500/[0.06]"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-400/[0.06] blur-2xl transition group-hover:bg-violet-400/[0.14]" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600 transition group-hover:border-blue-200 group-hover:from-blue-100 group-hover:to-violet-50 group-hover:text-violet-600">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wider text-slate-500">
                      {technology.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-slate-800 transition group-hover:text-blue-700">
                    {technology.name}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    {technology.description}
                  </p>

                  <div className="mt-5 h-px w-full bg-slate-100">
                    <div className="h-px w-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Project-specific technology callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-violet-50 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20">
              <Layers3 size={21} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Every project has different needs.
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                We select the stack based on your goals, scope and future plans.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-3 text-sm font-medium text-blue-700 transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          >
            Discuss your project
            <Code2 size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
