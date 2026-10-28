import React from 'react';

export default function ApproachSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8FAFC] flex flex-col justify-center items-center px-4 py-20 overflow-hidden font-sans text-slate-900">
      
      {/* Top Header Badge / Tag with Logo */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {/* Logo Box */}
        <div className="w-10 h-10 bg-[#0B0F19] rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1.5">
          <img 
            src="/images/Group.png" 
            alt="StandoutDev Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
            THE STANDOUTDEV APPROACH
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-6">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          Disconnected Teams Create <br />
          <span className="text-[#2563EB]">Digital Products.</span>
        </h2>
      </div>

      {/* Subtitle / Description */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
          Scattered communication, inconsistent design, delayed development, and disconnected decisions can slow your digital product down. StandoutDev brings design, development, and delivery together in one coordinated process.
        </p>
      </div>

      {/* Main Graphic & Cards Section */}
      <div className="relative w-full max-w-4xl flex items-center justify-center min-h-[380px] mt-4">
        
        {/* Background Glowing Circular Grid Line */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-blue-200/60 bg-gradient-to-b from-blue-50/30 to-transparent flex items-center justify-center relative">
            <div className="absolute -top-1.5 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>
          </div>
        </div>

        {/* Center Graphic Image */}
        <div className="relative z-10 flex items-center justify-center my-8">
          <div className="w-32 h-32 sm:w-44 sm:h-44 relative flex items-center justify-center drop-shadow-[0_20px_35px_rgba(37,99,235,0.25)]">
            <img 
              src="/images/Group.png" 
              alt="StandoutDev Approach Graphic" 
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>

        {/* Left Card: The common approach */}
        <div className="absolute left-2 sm:left-6 bottom-4 sm:bottom-8 z-20 w-[240px] sm:w-[280px] bg-[#2563EB] text-white p-6 rounded-2xl shadow-2xl transform -translate-y-2 hover:-translate-y-3 transition-transform duration-300">
          <p className="text-xs text-blue-100/80 font-medium mb-3">
            The common approach
          </p>
          <h3 className="text-xl sm:text-2xl font-bold leading-tight">
            Disconnected teams. <br />
            Endless delays.
          </h3>
        </div>

        {/* Right Card: The StandoutDev way */}
        <div className="absolute right-2 sm:right-6 bottom-4 sm:bottom-8 z-20 w-[240px] sm:w-[280px] bg-[#0B0F19] text-white p-6 rounded-2xl shadow-2xl transform -translate-y-2 hover:-translate-y-3 transition-transform duration-300 border border-slate-800">
          <p className="text-xs text-slate-400 font-medium mb-3">
            The StandoutDev way
          </p>
          <h3 className="text-xl sm:text-2xl font-bold leading-tight">
            One team. <br />
            One clear direction.
          </h3>
        </div>

        {/* Bottom Horizontal Light Bar */}
        <div className="absolute -bottom-2 w-full max-w-xs sm:max-w-md h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
      </div>

    </section>
  );
}