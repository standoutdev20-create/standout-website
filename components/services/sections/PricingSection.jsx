
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Globe,
  Layers3,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    description:
      "A clean online presence for individuals, startups and small businesses.",
    price: "Custom quote",
    label: "For getting started",
    icon: Globe,
    featured: false,
    features: [
      "Responsive website design",
      "Essential website pages",
      "Mobile-friendly layout",
      "Contact form integration",
      "Basic on-page SEO setup",
      "Launch support",
    ],
  },
  {
    name: "Professional",
    description:
      "A more complete digital experience for growing brands and businesses.",
    price: "Custom quote",
    label: "Most popular",
    icon: Sparkles,
    featured: true,
    features: [
      "Everything in Starter",
      "Custom UI/UX experience",
      "Advanced page layouts",
      "Interactive website sections",
      "Performance optimization",
      "Third-party integrations",
      "Post-launch assistance",
    ],
  },
  {
    name: "Custom Solution",
    description:
      "Tailored functionality and scalable solutions for specific business needs.",
    price: "Let's discuss",
    label: "Built around you",
    icon: Layers3,
    featured: false,
    features: [
      "Requirement-based planning",
      "Custom features and workflows",
      "Advanced integrations",
      "Database and API planning",
      "Scalable architecture",
      "Project-specific delivery",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f1f4f8] via-white to-[#f8f9fa] px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-400/[0.10] blur-[130px]" />

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
            Flexible engagement
            <span className="h-px w-7 bg-blue-500" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Clear scope.
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
              The right investment.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Every project is different. We discuss your goals, features and
            timeline first, then prepare a proposal that fits your requirements.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                  plan.featured
                    ? "border-blue-300 bg-gradient-to-b from-blue-50 via-white to-violet-50/70 shadow-2xl shadow-blue-200/40"
                    : "border-slate-200 bg-white shadow-lg shadow-slate-200/30 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                }`}
              >
                {plan.featured && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-blue-600/20">
                    <Sparkles size={12} />
                    Popular
                  </div>
                )}

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    plan.featured
                      ? "border-blue-200 bg-blue-100 text-blue-700"
                      : "border-slate-200 bg-slate-50 text-blue-600"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.7} />
                </div>

                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                    {plan.label}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                    {plan.name}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6 border-y border-slate-200 py-5">
                  <p className="text-xl font-semibold text-slate-900">
                    {plan.price}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Based on project scope and requirements
                  </p>
                </div>

                <div className="mt-6 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">
                    What's included
                  </p>

                  <ul className="mt-5 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.featured
                              ? "bg-blue-100 text-blue-700"
                              : "bg-slate-100 text-blue-600"
                          }`}
                        >
                          <Check size={12} strokeWidth={2.5} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                    plan.featured
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  Discuss your project
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center text-xs leading-6 text-slate-500"
        >
          Final pricing, timelines, hosting and ongoing maintenance are
          confirmed separately according to the agreed project scope.
        </motion.p>
      </div>
    </section>
  );
}
