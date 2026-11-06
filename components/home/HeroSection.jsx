'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Code2, Gauge, ShieldCheck, Smartphone } from 'lucide-react';
import { ButtonLink, HeroBackdrop } from '@/components/site/ui';



const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const highlights = [
  { icon: Code2, label: 'Custom-built, no templates' },
  { icon: Smartphone, label: 'Responsive on every device' },
  { icon: Gauge, label: 'Built for speed & SEO' },
  { icon: ShieldCheck, label: 'Ongoing support' },
];

export default function HeroSection() {
  return (
    <section
      data-no-reveal
      className="relative flex min-h-[88svh] w-full items-center overflow-hidden bg-white pb-28 pt-32 font-sans text-slate-900 sm:min-h-[100svh] sm:pt-36"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Copy */}
        <div className="flex flex-col items-center">

          {/* Announcement: latest project */}
          <motion.div {...fadeUp(0.05)} className="mb-7">
            <Link
              href="/work/meteoroid"
              className="group inline-flex items-center gap-2.5 rounded-full border border-slate-300/80 bg-white/80 py-1 pl-1 pr-3.5 text-[13px] shadow-sm backdrop-blur-md transition-all hover:border-blue-300 hover:shadow-md sm:text-sm"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                New
              </span>
              <span className="font-medium text-slate-700">
                <span className="hidden sm:inline">Our latest project: </span>Meteoroid Luxurious Stones is live
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-500 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="text-[2.6rem] font-extrabold leading-[1.06] tracking-tight text-slate-900 sm:text-6xl lg:text-[4.75rem]"
          >
            IT Products That Help You
            <span className="mt-1 flex items-center justify-center gap-[0.18em] whitespace-nowrap sm:mt-2">
              <span className="text-shimmer">Stand</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.2, rotate: -140 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 160, damping: 14, delay: 0.75 }}
                whileHover={{ rotate: 14, scale: 1.08 }}
                className="relative inline-block h-[0.92em] w-[1.01em] shrink-0 cursor-default"
              >
                <span aria-hidden="true" className="hero-logo-glow absolute inset-[-25%] rounded-full bg-blue-500/35 blur-2xl" />
                <span className="hero-logo-bob relative block h-full w-full">
                  <Image src="/images/logo-mark.png" alt="StandoutDev logo" fill priority sizes="120px" className="object-contain drop-shadow-[0_14px_24px_rgba(37,99,235,0.45)]" />
                </span>
              </motion.span>
              <span className="text-shimmer">Out.</span>
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl"
          >
            StandoutDev designs, develops and delivers websites, web applications and custom software that help businesses grow.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/contact">Let&apos;s Build Your Idea</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.55 } } }}
            className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                className="flex items-center gap-2 text-left sm:whitespace-nowrap text-xs font-medium text-slate-600 sm:text-[13px]"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white/80 shadow-sm ring-1 ring-slate-200">
                  <Icon className="h-3.5 w-3.5 text-blue-600" />
                </span>
                {label}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
