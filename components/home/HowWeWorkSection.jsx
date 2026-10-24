'use client';
import React from 'react';

export default function HowWeWorkSection() {
  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 flex flex-col items-center justify-center font-sans text-slate-900">
      
      {/* Top Header Badge */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {/* Logo Icon */}
        <div className="w-10 h-10 bg-[#0B0F19] rounded-full flex items-center justify-center shadow-md">
          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
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
          From First Idea to <span className="text-[#2563EB]">Successful</span> <br />
          <span className="text-[#2563EB]">Launch.</span>
        </h2>
      </div>

      {/* Subtitle / Description */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
          We turn business ideas into digital products through a clear, collaborative process from discovery and design to development, testing, and launch.
        </p>
      </div>

      {/* Steps Container */}
      <div className="w-full max-w-5xl flex flex-col gap-20 sm:gap-28">
        
        {/* ========================================================================= */}
        {/* STEP 1: Discovery & Planning (Image 1)[cite: 6] */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Illustration Box */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm">
            <div className="relative w-full max-w-md">
              {/* Back Mockup Window */}
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-slate-100 w-[85%]">
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  <div className="ml-2 bg-slate-100 rounded px-2 py-0.5 text-[10px] text-slate-400">website.com</div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-slate-100 rounded-lg"></div>
                  <div className="flex gap-2">
                    <div className="w-1/2 h-10 bg-slate-100 rounded-lg"></div>
                    <div className="w-1/2 h-10 bg-slate-100 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Front Card Overlay */}
              <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-100 w-[65%] absolute -right-2 -bottom-6">
                <div className="space-y-2">
                  <div className="w-full h-2 bg-blue-500 rounded"></div>
                  <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px]">✓</div>
                    <div className="w-12 h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Magnifying Glass Overlay */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-14 h-14 rounded-full border-4 border-slate-800 bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 rounded-full bg-slate-300/50"></div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col items-start pl-0 md:pl-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Discovery &amp; Planning
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We understand your business, audience, goals, and requirements before defining the right product strategy, scope, and development roadmap.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 2: Scope & Planning (Image 1)[cite: 6] */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div className="flex flex-col items-start order-2 md:order-1 pr-0 md:pr-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Scope &amp; Planning
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We define your project requirements, deliverables, timeline, and budget before development begins. You know what we're building, what it includes, and what to expect.
            </p>
          </div>

          {/* Right Illustration Box */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm order-1 md:order-2">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 w-full">
                <div className="flex gap-3 mb-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-[11px] font-semibold text-slate-600">TIMELINE</div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-[11px] font-semibold text-slate-600">DELIVERABLES</div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-[11px] font-semibold text-blue-600">FIXED PRICE: $X,XXX</div>
                </div>
                <div className="w-full h-24 bg-slate-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Approved Badge Card */}
              <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 w-44 absolute -right-3 -bottom-5 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs mb-2">✓</div>
                <div className="w-full h-1 bg-slate-200 rounded mb-2"></div>
                <div className="w-12 h-1 bg-slate-200 rounded mb-3"></div>
                <div className="border border-dashed border-blue-500 text-blue-600 rounded-full text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider">APPROVED</div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 3: Design & Development (Image 2)[cite: 7] */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Illustration Box */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 w-full">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-blue-600 uppercase flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span> WEEKLY PROGRESS
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {["WEEK 1", "WEEK 2", "WEEK 3", "WEEK 4"].map((w, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-100 rounded-lg p-2 text-center">
                      <p className="text-[9px] font-bold text-slate-400 mb-1">{w}</p>
                      <div className={`w-4 h-4 rounded-full mx-auto flex items-center justify-center text-[10px] text-white ${i === 3 ? "bg-blue-200 text-blue-700" : "bg-blue-600"}`}>
                        {i === 3 ? "80%" : "✓"}
                      </div>
                      <p className="text-[8px] font-semibold text-slate-500 mt-1">{i === 3 ? "IN PROGRESS" : "COMPLETED"}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full h-1 bg-blue-100 rounded-full relative mb-4">
                  <div className="w-3/4 h-full bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* Direct Contact Card Overlay[cite: 7] */}
              <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 w-52 absolute -right-3 -bottom-6">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="text-center">
                    <div className="w-7 h-7 rounded-full bg-slate-100 mx-auto mb-1 flex items-center justify-center text-xs">👤</div>
                    <p className="text-[9px] font-bold text-slate-700">DESIGNER</p>
                    <span className="text-[8px] text-green-500 font-semibold">• ONLINE</span>
                  </div>
                  <div className="text-center">
                    <div className="w-7 h-7 rounded-full bg-slate-100 mx-auto mb-1 flex items-center justify-center text-xs">💻</div>
                    <p className="text-[9px] font-bold text-slate-700">DEVELOPER</p>
                    <span className="text-[8px] text-green-500 font-semibold">• ONLINE</span>
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-xl py-1.5 px-3 text-[10px] font-bold text-center flex items-center justify-center gap-1 shadow-md">
                  <span>📹 DIRECT CONTACT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex flex-col items-start pl-0 md:pl-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Design &amp; Development
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We design intuitive experiences and build reliable digital products through a coordinated process. Track progress, share feedback, and work directly with the people building your solution.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STEP 4: Launch (Image 2)[cite: 7] */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div className="flex flex-col items-start order-2 md:order-1 pr-0 md:pr-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Launch
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We ship, then stay on as your Growth Partner if you want us to. Most clients do.
            </p>
          </div>

          {/* Right Illustration Box */}
          <div className="bg-[#EBF0F7] rounded-3xl p-8 flex items-center justify-center relative min-h-[300px] shadow-sm order-1 md:order-2">
            <div className="relative w-full max-w-md">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 w-full flex flex-col items-center">
                <div className="flex items-center gap-1.5 self-start mb-4">
                  <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">🚀</span>
                  <span className="text-xs font-extrabold text-slate-800 uppercase">LAUNCHED</span>
                  <span className="text-[10px] text-green-500 font-bold ml-1">• LIVE</span>
                </div>
                <div className="w-16 h-16 text-blue-600 my-2 animate-bounce flex items-center justify-center text-4xl">
                  🚀
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full">• LIVE</span>
              </div>

              {/* Growth Partner Overlay[cite: 7] */}
              <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 w-52 absolute -right-3 -top-4">
                <p className="text-[9px] font-extrabold text-slate-800 uppercase mb-1">📈 GROWTH PARTNER</p>
                <p className="text-[8px] text-green-500 font-bold mb-2">• LIVE</p>
                <div className="w-full h-10 border-b border-l border-slate-200 relative flex items-end">
                  <svg className="w-full h-full text-blue-600" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M0 35 Q30 30, 60 15 T100 5" />
                  </svg>
                </div>
              </div>

              {/* Ongoing Support Overlay[cite: 7] */}
              <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 w-44 absolute -right-3 -bottom-6 flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                  🔄
                </div>
                <div>
                  <p className="text-[9px] font-extrabold text-slate-800">ONGOING SUPPORT</p>
                  <p className="text-[8px] text-green-500 font-bold">• LIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

