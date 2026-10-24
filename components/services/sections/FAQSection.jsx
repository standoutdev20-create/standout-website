
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What services does StandOutDev offer?",
    answer:
      "We offer website development, UI/UX design, e-commerce development, mobile app development, SEO optimization, branding, custom software solutions and website maintenance.",
  },
  {
    question: "How much does a website project cost?",
    answer:
      "The cost depends on your requirements, number of pages, design complexity and required functionality. Contact us with your project details so we can discuss a suitable proposal.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the size and complexity of the project. A smaller website generally takes less time than a custom platform or e-commerce solution. We discuss the expected timeline before starting.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Responsive design is considered during development so the website can adapt to mobile phones, tablets and desktop screens.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can discuss improving your existing website's layout, visual design, responsiveness, performance and user experience based on your goals.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Post-launch support can be discussed according to your project needs. Any ongoing maintenance, updates or additional work will be agreed upon separately.",
  },
  {
    question: "Can you work with my existing technology stack?",
    answer:
      "We can review your current website, codebase and technology requirements first, then discuss the most practical approach for your project.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through our contact page with a short description of your project. We'll discuss your goals, requirements and possible next steps.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#f8f9fa] px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12">
      {/* Background effect */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-400/[0.08] blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* FAQ introduction */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-24 lg:self-start"
        >
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
            <span className="h-px w-7 bg-blue-600" />
            FAQs
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Got questions?
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
              We've got answers.
            </span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            A few things you might want to know before starting your next
            digital project.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <MessageCircle size={21} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Still have questions?
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Tell us what you have in mind. We'll discuss the next step.
              </p>

              <a
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-purple-600"
              >
                Contact our team
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/70 shadow-sm"
                    : "border-slate-200 bg-white/80 hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6 sm:py-6"
                >
                  <span
                    className={`text-sm font-medium leading-6 transition-colors sm:text-base ${
                      isOpen ? "text-blue-700" : "text-slate-800"
                    }`}
                  >
                    <span className="mr-3 font-mono text-xs text-blue-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                      isOpen
                        ? "rotate-180 border-blue-200 bg-blue-100 text-blue-600"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="mb-4 h-px bg-gradient-to-r from-blue-300/70 via-cyan-200/50 to-transparent" />

                        <p className="text-sm leading-7 text-slate-600 sm:pl-10">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
