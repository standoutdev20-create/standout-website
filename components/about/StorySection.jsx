"use client";

import { motion } from "framer-motion";
import { milestones } from "./aboutShared";

export default function StorySection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Our Story
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Every great journey starts with an idea. Here are the milestones
            that shaped ours.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-blue-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex gap-6 pl-12 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-12"
                    : "md:ml-auto md:flex-row-reverse md:pl-12"
                }`}
              >
                <span className="absolute left-3 top-2 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-blue-600 bg-white md:left-auto md:right-[-7px]">
                  {null}
                </span>

                <div className="w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="text-sm font-bold text-blue-600">
                    {item.year}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}