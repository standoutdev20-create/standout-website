import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-7 py-16 sm:px-14 sm:py-20"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />

        <div className="relative max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Let's build something
          </p>

          <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
            Have an idea?
            <br />
            Let's make it happen.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-slate-300">
            Tell us what you're building. We'll help you turn your
            idea into a digital product designed around your goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Book Free Consultation
              <ArrowUpRight size={17} />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Our Work
              <ArrowRight size={17} />
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            contact@standoutdev.com · Reply within 24 hours
          </p>
        </div>
      </motion.div>
    </section>
  );
}