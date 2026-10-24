
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Palette,
  ShoppingCart,
  Smartphone,
  Search,
  PanelsTopLeft,
  Blocks,
  Wrench,
  Check,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    slug: "web-development",
    description:
      "Fast, responsive and scalable websites designed to turn visitors into customers.",
    icon: Code2,
    tags: ["Next.js", "React", "Performance"],
    featured: true,
  },
  {
    number: "02",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description:
      "Intuitive digital experiences with thoughtful layouts and user-focused interactions.",
    icon: Palette,
    tags: ["Wireframes", "Prototypes", "Design systems"],
  },
  {
    number: "03",
    title: "E-commerce Development",
    slug: "ecommerce-development",
    description:
      "Online stores built to make product discovery, checkout and shopping effortless.",
    icon: ShoppingCart,
    tags: ["Online stores", "Payments", "Products"],
  },
  {
    number: "04",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description:
      "Mobile-first product experiences that help your business stay connected with users.",
    icon: Smartphone,
    tags: ["App UI", "Integrations", "UX"],
  },
  {
    number: "05",
    title: "SEO & Optimization",
    slug: "seo-optimization",
    description:
      "Improve discoverability, technical performance and the experience of your website.",
    icon: Search,
    tags: ["Technical SEO", "Speed", "Structure"],
  },
  {
    number: "06",
    title: "Branding & Identity",
    slug: "branding-identity",
    description:
      "Build a consistent digital identity that communicates your brand's personality.",
    icon: PanelsTopLeft,
    tags: ["Visual identity", "Typography", "Guidelines"],
  },
  {
    number: "07",
    title: "Custom Software",
    slug: "custom-software",
    description:
      "Purpose-built digital tools and workflows tailored to your team's needs.",
    icon: Blocks,
    tags: ["Dashboards", "Automation", "Integrations"],
  },
  {
    number: "08",
    title: "Website Maintenance",
    slug: "website-maintenance",
    description:
      "Ongoing improvements, updates and technical care to keep your website running smoothly.",
    icon: Wrench,
    tags: ["Updates", "Monitoring", "Support"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <motion.article
      variants={cardVariants}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-500 sm:p-7 ${
        service.featured
          ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-50/70 shadow-lg shadow-blue-100/40"
          : "border-slate-200 bg-white shadow-md shadow-slate-200/30 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/[0.07] blur-3xl transition-all duration-500 group-hover:bg-violet-300/[0.16]" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={22} strokeWidth={1.7} />
        </div>

        <span className="font-mono text-xs tracking-widest text-slate-400">
          {service.number}
        </span>
      </div>

      <h3 className="relative mt-7 text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-700 sm:text-2xl">
        {service.title}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-600">
        {service.description}
      </p>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-600 transition-colors group-hover:border-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="relative mt-7 border-t border-slate-200 pt-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-colors hover:text-violet-700"
        >
          Explore service
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ServicesGridSection() {
  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-white to-[#f1f4f8] px-5 py-24 text-slate-900 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-300/[0.10] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-80 w-80 rounded-full bg-violet-300/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
              <span className="h-px w-8 bg-blue-500" />
              What we do
            </div>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Everything you need
              <br className="hidden sm:block" /> to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                grow digitally.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              From your first idea to a polished digital product, we bring
              strategy, design and development together to help your business
              move forward.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3 text-sm text-slate-500">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-600">
              <Check size={18} />
            </span>
            <span>
              <strong className="block text-slate-900">
                8 core services
              </strong>
              <span className="mt-1 block">One digital partner</span>
            </span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </motion.div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-violet-50/80 p-5 sm:flex-row sm:items-center sm:p-6">
          <p className="text-sm leading-6 text-slate-600">
            Not sure which service fits your project? Let's figure it out
            together.
          </p>

          <Link
            href="/contact"
            className="shrink-0 text-sm font-semibold text-blue-600 transition-colors hover:text-violet-700"
          >
            Talk to our team ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
