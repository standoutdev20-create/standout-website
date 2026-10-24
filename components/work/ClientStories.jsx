
"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Globe2, Factory } from "lucide-react";

const stories = [
  {
    name: "Uma Metal Craft",
    category: "Manufacturing",
    description:
      "A business website focused on presenting metal craft services and company information clearly.",
    icon: Factory,
    number: "01",
    href: "https://umametalcraft.com/",
  },
  {
    name: "Siddhanath Krupa Physics",
    category: "Education",
    description:
      "An educational website designed to help students explore physics learning information.",
    icon: GraduationCap,
    number: "02",
    href: "https://siddhanath-physics.vercel.app/",
  },
  {
    name: "Digital Developers",
    category: "Digital agency",
    description:
      "A digital agency website showcasing services and its online presence.",
    icon: Globe2,
    number: "03",
    href: "https://digitaldeveloperss.com/",
  },
];

export default function ClientStories() {
  return (
    <section className="bg-[#F8FAFC] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Across industries
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-5xl">
            Different needs.
            <span className="block text-blue-600">
              Thoughtful digital work.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore how our portfolio spans manufacturing, education,
            and digital services.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {stories.map((story, index) => {
            const Icon = story.icon;

            return (
              <motion.article
                key={story.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/[0.06] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={22} />
                  </span>

                  <span className="text-sm font-bold text-slate-300">
                    {story.number}
                  </span>
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                  {story.category}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#0B0F19]">
                  {story.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {story.description}
                </p>

                <a
                  href={story.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#0B0F19] transition-colors hover:text-blue-700"
                >
                  Visit website
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
