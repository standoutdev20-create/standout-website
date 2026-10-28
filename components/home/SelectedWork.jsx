'use client';
import React from 'react';

export default function SelectedWork() {
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
            SELECTED WORK
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          Digital Products. <span className="text-[#2563EB]">Built to Stand Out.</span>
        </h2>
      </div>

      {/* Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
          Engineered with precision architecture, high performance standards, and intentional editorial design.
        </p>
      </div>

      {/* Projects Stack */}
      <div className="w-full max-w-6xl flex flex-col gap-24">
        
        {/* PROJECT 1: URBAN METAL CRAFT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  URBAN METAL CRAFT
                </h3>
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase border border-slate-200 rounded-md px-2 py-0.5">
                  GLOBAL
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                A professional digital presence designed to showcase metal fabrication capabilities, communicate services clearly, and help potential customers explore bespoke architectural craftsmanship through immersive imagery and responsive design.
              </p>
            </div>

            {/* Meta Table */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">DELIVERABLES</p>
                <ul className="text-xs font-bold text-slate-800 space-y-1">
                  <li>CREATIVE DIRECTION</li>
                  <li>UX/UI DESIGN</li>
                  <li>RESPONSIVE WEB</li>
                  <li>DESIGN SYSTEM</li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">INDUSTRY</p>
                <p className="text-xs font-bold text-slate-800 mb-4">BESPOKE FAB</p>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">LIVE SITE</p>
                <p className="text-xs font-bold text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> AVAILABLE NOW
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">PUBLISHED</p>
                <p className="text-xs font-bold text-slate-800 mb-4">@2026</p>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">TIMELINES</p>
                <p className="text-xs font-bold text-slate-800">6 WEEKS</p>
              </div>
            </div>
          </div>

          {/* Right Mockup Graphic */}
          <div className="lg:col-span-7 bg-gradient-to-tr from-[#9a94e8] via-[#c2beff] to-[#e8e6ff] rounded-3xl p-6 sm:p-10 flex items-center justify-center min-h-[380px] shadow-sm relative overflow-hidden">
            <div className="w-full max-w-lg bg-slate-900 rounded-2xl p-2.5 shadow-2xl border border-slate-800">
              <div className="w-full h-2.5 bg-slate-800 rounded-t-xl flex items-center px-2 gap-1 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              </div>
              <div className="bg-[#0B0F19] rounded-lg p-6 text-white min-h-[220px] flex flex-col justify-center items-start">
                <span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider mb-2">LASER CUTTING</span>
                <h4 className="text-2xl font-black text-white mb-2 leading-tight">
                  Precision <br /><span className="text-orange-500">Laser Cutting</span> <br />Process
                </h4>
                <p className="text-[10px] text-slate-400">Clean Edges • Tight Tolerances • Exceptional Accuracy</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-200/80 my-4"></div>

        {/* PROJECT 2: URBAN METAL CRAFT CASE STUDY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Tablet Image Mockup */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-200/60 p-4 sm:p-8 flex items-center justify-center relative min-h-[360px]">
            <div className="relative w-full max-w-md bg-white rounded-2xl p-4 shadow-2xl border border-slate-200">
              <div className="bg-[#0B0F19] text-white rounded-xl p-5 min-h-[200px] flex flex-col justify-center relative overflow-hidden">
                <span className="text-[10px] text-yellow-400 font-bold tracking-widest mb-1">SIDDHANATH KRUPA</span>
                <h4 className="text-xl font-extrabold mb-2">Physics Classes</h4>
                <p className="text-[10px] text-slate-400 max-w-[180px] mb-3">Master Physics with Expert Guidance for JEE, NEET &amp; Board Exams.</p>
                <div className="w-12 h-12 rounded-full border border-yellow-400/40 absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-[10px] font-bold text-yellow-400">
                  SK
                </div>
              </div>

              {/* Tag Label at Bottom Left */}
              <div className="absolute left-6 bottom-6 bg-[#0B0F19] text-white text-[9px] font-mono px-3 py-1 rounded-md shadow-md">
                CLIENT: URBAN METAL CRAFT // DESKTOP SYSTEM
              </div>
            </div>
          </div>

          {/* Right Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  URBAN METAL CRAFT
                </h3>
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase border border-slate-200 rounded-md px-2 py-0.5">
                  GLOBAL
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                A professional digital presence designed to showcase architectural metal fabrication capabilities, present bespoke engineering services clearly, and convert enterprise commercial architects and builders.
              </p>
            </div>

            {/* Meta Table */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/80 mb-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">DELIVERABLES</p>
                <ul className="text-xs font-bold text-slate-800 space-y-1">
                  <li>WEBSITE STRATEGY</li>
                  <li>UI/UX DESIGN</li>
                  <li>RESPONSIVE WEB DEV</li>
                  <li>DESIGN SYSTEM</li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">INDUSTRY</p>
                <p className="text-xs font-bold text-slate-800 mb-4">METAL FABRICATION</p>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">LIVE STATUS</p>
                <p className="text-xs font-bold text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> LIVE PRODUCTION
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">PUBLISHED</p>
                <p className="text-xs font-bold text-slate-800">@2026</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">TIMELINES</p>
                <p className="text-xs font-bold text-slate-800">6 Weeks</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button className="bg-[#0B0F19] hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-full transition-all flex items-center gap-2">
                <span>EXPLORE CASE STUDY</span>
                <span>→</span>
              </button>

              <a href="#" className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1">
                Live View ↗
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-slate-200/80 my-4"></div>

        {/* PROJECT 3: SIDDHNESH KRUPA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full order-2 lg:order-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  SIDDHNESH KRUPA
                </h3>
                <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase border border-slate-200 rounded-md px-2 py-0.5">
                  REAL ESTATE
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                An architectural digital platform designed to present premier luxury residential developments, communicate comprehensive site metrics, and offer high-intent prospective investors seamless property discovery.
              </p>
            </div>

            {/* Meta Table */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200/80 mb-8">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">DELIVERABLES</p>
                <ul className="text-xs font-bold text-slate-800 space-y-1">
                  <li>PRODUCT STRATEGY</li>
                  <li>UX/UI DESIGN</li>
                  <li>FULL-STACK BUILD</li>
                  <li>DESIGN SYSTEM</li>
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">INDUSTRY</p>
                <p className="text-xs font-bold text-slate-800 mb-4">LUXURY LIVING / ESTATES</p>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">LIVE STATUS</p>
                <p className="text-xs font-bold text-green-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span> LIVE PRODUCTION
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">PUBLISHED</p>
                <p className="text-xs font-bold text-slate-800">@2026</p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">TIMELINES</p>
                <p className="text-xs font-bold text-slate-800">8 Weeks</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <button className="bg-[#0B0F19] hover:bg-slate-800 text-white font-bold text-xs px-6 py-3 rounded-full transition-all flex items-center gap-2">
                <span>EXPLORE PROJECT</span>
                <span>→</span>
              </button>

              <a href="#" className="text-xs font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1">
                Live View ↗
              </a>
            </div>
          </div>

          {/* Right Laptop Mockup */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-slate-200/60 p-4 sm:p-8 flex items-center justify-center relative min-h-[360px] order-1 lg:order-2">
            <div className="relative w-full max-w-md bg-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-800">
              <div className="bg-[#070A12] text-white rounded-xl p-5 min-h-[220px] flex flex-col justify-center items-start">
                <h4 className="text-2xl font-serif text-amber-100 mb-2">We Don't Give Leads.|</h4>
                <p className="text-[9px] text-slate-400 max-w-[200px] mb-4">India's first real estate marketing agency combining Meta Ads + Sales Team Training.</p>
                <button className="bg-amber-600 text-slate-950 font-bold text-[9px] px-3 py-1 rounded">
                  Book Free Consultation
                </button>
              </div>

              {/* Tag Label at Bottom Left */}
              <div className="absolute left-6 bottom-6 bg-[#0B0F19] text-white text-[9px] font-mono px-3 py-1 rounded-md shadow-md border border-slate-800">
                CLIENT: SIDDHNESH KRUPA // RETINA WORKSPACE
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}