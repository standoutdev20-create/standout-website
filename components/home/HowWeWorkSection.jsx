'use client';

import React from 'react';

export default function HowWeWorkSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 flex flex-col items-center justify-center font-sans text-slate-900">

      {/* Top Header Badge */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {/* Logo Icon */}
        <div className="w-10 h-10 bg-[#0B0F19] rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1.5">
          <img 
            src="/images/Group.png" 
            alt="StandoutDev Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Pill Tag */}
        <div className="inline-flex items-center bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-xs font-extrabold tracking-widest text-slate-700 uppercase">
            HOW WE WORK
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          From First Idea to{' '}
          <span className="text-[#2563EB]">Successful</span>
          <br />
          <span className="text-[#2563EB]">Launch.</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
          We turn business ideas into digital products through a clear,
          collaborative process from discovery and design to development,
          testing, and launch.
        </p>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-5xl flex flex-col gap-20 sm:gap-28">

        {/* STEP 1: Discovery & Planning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Illustration 1 */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm">
            <img
              src="/images/how-we-work/discovery.svg"
              alt="Discovery and planning"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start pl-0 md:pl-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Discovery &amp; Planning
            </h3>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We understand your business, audience, goals, and requirements
              before defining the right product strategy, scope, and
              development roadmap.
            </p>
          </div>
        </div>

        {/* STEP 2: Scope & Planning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <div className="flex flex-col items-start order-2 md:order-1 pr-0 md:pr-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Scope &amp; Planning
            </h3>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We define your project requirements, deliverables, timeline,
              and budget before development begins. You know what we're
              building, what it includes, and what to expect.
            </p>
          </div>

          {/* Illustration 2 */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm order-1 md:order-2">
            <img
              src="/images/how-we-work/planning.svg"
              alt="Project scope and planning"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

        {/* STEP 3: Design & Development */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Illustration 3 */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm">
            <img
              src="/images/how-we-work/development.svg"
              alt="Design and development progress"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-start pl-0 md:pl-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Design &amp; Development
            </h3>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We design intuitive experiences and build reliable digital
              products through a coordinated process. Track progress, share
              feedback, and work directly with the people building your
              solution.
            </p>
          </div>
        </div>

        {/* STEP 4: Launch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Text Content */}
          <div className="flex flex-col items-start order-2 md:order-1 pr-0 md:pr-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Launch
            </h3>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We ship, then stay on as your Growth Partner if you want us to.
              Most clients do.
            </p>
          </div>

          {/* Illustration 4 */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm order-1 md:order-2">
            <img
              src="/images/how-we-work/Launch.svg"
              alt="Successful project launch"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}