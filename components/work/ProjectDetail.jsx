
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from "lucide-react";

export default function ProjectDetail({ project, onClose }) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const screenshots = project?.screenshots?.length
    ? project.screenshots
    : project?.thumbnail
      ? [project.thumbnail]
      : [];

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }

      if (event.key === "ArrowRight" && screenshots.length > 0) {
        setActiveScreenshot(
          (current) => (current + 1) % screenshots.length
        );
      }

      if (event.key === "ArrowLeft" && screenshots.length > 0) {
        setActiveScreenshot(
          (current) =>
            (current - 1 + screenshots.length) % screenshots.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, screenshots.length]);

  useEffect(() => {
    setActiveScreenshot(0);
    setImageErrors({});
  }, [project?.id, project?.slug, project?.title]);

  const handleWheel = (event) => {
    const container = scrollContainerRef.current;

    if (!container) return;

    // Allow horizontal trackpad gestures to behave normally.
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

    // Handle vertical two-finger trackpad scrolling.
    event.preventDefault();
    event.stopPropagation();

    container.scrollTop += event.deltaY;
  };

  if (!project || !isMounted) return null;

  const changeScreenshot = (direction) => {
    if (!screenshots.length) return;

    setActiveScreenshot(
      (current) =>
        (current + direction + screenshots.length) % screenshots.length
    );
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={project.id || project.slug || project.title}
        ref={scrollContainerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onWheel={handleWheel}
        className="fixed inset-0 z-[100] w-full overflow-x-hidden bg-white"
        style={{
          height: "100dvh",
          maxHeight: "100dvh",
          overflowY: "auto",
          overscrollBehaviorY: "contain",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              <ArrowLeft size={18} />
              Back to work
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
            >
              <X size={19} />
            </button>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-16">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-blue-50 px-3 py-1.5 font-semibold text-blue-700">
                {project.category || project.cat || project.tag || "Project"}
              </span>

              {project.year && <span>{project.year}</span>}

              {project.year && project.duration && <span>·</span>}

              {project.duration && <span>{project.duration}</span>}
            </div>

            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-[#0B0F19] sm:text-6xl lg:text-7xl">
                  {project.title}
                </h1>

                {project.subtitle && (
                  <p className="mt-4 text-xl text-blue-600">
                    {project.subtitle}
                  </p>
                )}

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                  {project.fullDescription ||
                    project.fullDesc ||
                    project.description ||
                    project.desc}
                </p>
              </div>

              {project.url && (
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0B0F19] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    Visit live website
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </div>
          </motion.section>

          <section className="mt-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 sm:aspect-[16/8]">
              {screenshots[activeScreenshot] &&
              !imageErrors[activeScreenshot] ? (
                <Image
                  key={screenshots[activeScreenshot]}
                  src={screenshots[activeScreenshot]}
                  alt={`${project.title} screenshot ${activeScreenshot + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain"
                  onError={() =>
                    setImageErrors((previous) => ({
                      ...previous,
                      [activeScreenshot]: true,
                    }))
                  }
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-slate-500">
                  Preview unavailable
                </div>
              )}

              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous screenshot"
                    onClick={() => changeScreenshot(-1)}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white"
                  >
                    <ChevronLeft size={21} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next screenshot"
                    onClick={() => changeScreenshot(1)}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-blue-600 hover:text-white"
                  >
                    <ChevronRight size={21} />
                  </button>
                </>
              )}
            </div>

            {screenshots.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot}
                    type="button"
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={activeScreenshot === index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border-2 bg-slate-100 transition ${
                      activeScreenshot === index
                        ? "border-blue-500"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    {!imageErrors[`thumb-${index}`] && (
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        sizes="128px"
                        className="object-cover"
                        onError={() =>
                          setImageErrors((previous) => ({
                            ...previous,
                            [`thumb-${index}`]: true,
                          }))
                        }
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </section>

          <section className="mt-16 grid gap-10 border-t border-slate-200 pt-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                The challenge
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#0B0F19]">
                What needed to improve?
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {project.challenge ||
                  "Creating a clear and accessible digital experience."}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                The solution
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#0B0F19]">
                How it came together
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                {project.solution ||
                  "A responsive interface built around the project's needs."}
              </p>
            </div>
          </section>

          <section className="mt-16">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Built with purpose
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#0B0F19]">
              Technologies used
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {(project.technologies || project.tech || []).map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </section>

          {(project.features || project.keyFeatures)?.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-semibold text-[#0B0F19]">
                Key features
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(project.features || project.keyFeatures).map(
                  (feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title || index}
                        className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:bg-blue-50/30"
                      >
                        {Icon && (
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                            <Icon size={21} />
                          </div>
                        )}

                        <h3 className="mt-5 font-semibold text-[#0B0F19]">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {feature.description || feature.desc}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
            </section>
          )}

          <section className="mt-16 rounded-3xl bg-[#0B0F19] px-6 py-10 text-white sm:px-10 sm:py-12">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-400">
              Explore more
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Let's discuss how we can create a thoughtful digital experience
              for your business.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Let's talk
              <ArrowUpRight size={17} />
            </a>
          </section>
        </main>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
