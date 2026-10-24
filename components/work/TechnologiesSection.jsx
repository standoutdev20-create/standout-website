
"use client";

import { motion } from "framer-motion";
import { Code2, Layers3, Sparkles } from "lucide-react";

const defaultTechnologies = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Vercel",
  "Responsive Design",
];

export default function TechnologiesSection({ projects = [] }) {
  const technologies = [
    ...new Set(
      projects.flatMap(
        (project) => project.technologies || project.tech || []
      )
    ),
  ];

  const items = technologies.length
    ? technologies
    : defaultTechnologies;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <Sparkles size={15} />
              Our toolkit
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#0B0F19] sm:text-5xl">
              Modern tools.
              <span className="mt-2 block text-[#2563EB]">
                Thoughtful execution.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-8 text-slate-600">
              We use modern web technologies to create responsive,
              maintainable, and engaging digital experiences.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                <Code2 size={23} />
              </div>

              <div>
                <h3 className="font-bold text-[#0B0F19]">
                  Technologies we use
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Selected tools from our projects
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {items.map((technology) => (
                <span
                  key={technology}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
                >
                  <Layers3 size={15} className="text-blue-600" />
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
