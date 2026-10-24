
"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import ProjectCard from "./ProjectCard";
import WorkFilter from "./WorkFilter";

export default function FeaturedProjects({
  projects = [],
  filters = ["All", "Website", "Product"],
  onProjectOpen,
}) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [projects, activeFilter]);

  return (
    <section
      id="featured-projects"
      className="scroll-mt-20 bg-[#F8FAFC] px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <WorkFilter
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="mb-10 mt-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Selected portfolio
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] sm:text-5xl">
              Work worth exploring.
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              A closer look at the projects, ideas, and digital experiences
              we have worked on.
            </p>
          </div>

          <p className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className={`flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="w-full md:w-[92%] lg:w-[88%]">
                  <ProjectCard
                    project={project}
                    index={index}
                    onOpen={onProjectOpen}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <FolderOpen
              size={32}
              className="mx-auto text-blue-600"
            />
            <h3 className="mt-4 text-xl font-bold text-[#0B0F19]">
              No projects in this category
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try another category to explore the portfolio.
            </p>

            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              View all projects
              <ArrowUpRight size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
