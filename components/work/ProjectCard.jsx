
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ProjectCard({ project, index = 0, onOpen }) {
  const reverse = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white transition-all duration-500 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/[0.08]"
    >
      <div className="grid items-stretch lg:grid-cols-2">
        {/* Project Preview */}
        <div
          className={`relative min-h-[300px] overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-sky-100 sm:min-h-[360px] ${
            reverse ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_55%)]" />

          <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="text-blue-600" />
            {project.tag || project.category}
          </div>

          <div className="absolute right-5 top-5 z-10 text-sm font-semibold text-slate-400">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="absolute inset-x-5 bottom-5 top-16 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl shadow-slate-900/10">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>

        {/* Project Details */}
        <div
          className={`flex h-full flex-col justify-center p-6 sm:p-8 lg:p-10 ${
            reverse ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-medium text-blue-700">
            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
              {project.category}
            </span>

            {project.year && (
              <span className="text-slate-400">{project.year}</span>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-[#0B0F19] transition-colors duration-300 group-hover:text-blue-700 sm:text-3xl">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-2 text-sm font-semibold text-sky-600">
              {project.subtitle}
            </p>
          )}

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            {project.description || project.desc}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {(project.technologies || project.tech || [])
              .slice(0, 4)
              .map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                >
                  {technology}
                </span>
              ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
            <span className="flex items-center gap-2 text-sm text-slate-500">
              <Clock size={15} className="text-blue-600" />
              {project.duration || "Project"}
            </span>

            <button
              type="button"
              onClick={() => onOpen?.(project)}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B0F19] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2563EB] hover:shadow-lg hover:shadow-blue-600/20"
            >
              View project
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} website`}
                className="hidden items-center justify-center rounded-xl border border-slate-200 p-3 text-slate-500 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:inline-flex"
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
