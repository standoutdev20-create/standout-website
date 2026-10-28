import React from 'react';

export default function PricingSection() {
  const leftFeatures = [
    "Responsive website design and development",
    "Mobile-friendly layouts",
    "UI/UX design and visual consistency",
    "Core on-page SEO setup",
    "Contact form and essential integrations",
    "Testing and launch support"
  ];

  return (
    <section className="w-full min-h-screen bg-[#070A12] text-white py-20 px-4 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Top Header Badge */}
      <div className="flex items-center justify-center gap-3 mb-6 relative z-10">
        {/* Logo Box */}
        <div className="w-10 h-10 bg-blue-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-md overflow-hidden p-1.5">
          <img 
            src="/images/Group.png" 
            alt="StandoutDev Logo" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Pill Tag */}
        <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
          <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
            OUR PACKAGES
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-4 relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15]">
          Flexible Solutions. <span className="text-[#3B82F6]">Transparent</span> <br />
          <span className="text-[#3B82F6]">Pricing.</span>
        </h2>
      </div>

      {/* Subtitle / Description */}
      <div className="text-center max-w-xl mx-auto mb-16 relative z-10">
        <p className="text-slate-400 text-sm sm:text-base font-normal leading-relaxed">
          Choose the right level of support for your digital goals, with clear deliverables and a solution tailored to your business.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl relative z-10 items-stretch">
        
        {/* LEFT FEATURED CARD - Website Launch */}
        <div className="lg:col-span-5 bg-[#0F1420] border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative">
          <div>
            {/* Small Header */}
            <span className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2 block">
              FULL BUILD OFFER
            </span>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 pb-6 border-b border-white/10">
              Website Launch
            </h3>

            {/* Checklist */}
            <ul className="space-y-4 mb-10">
              {leftFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold shadow-md shadow-blue-600/50">
                    ✓
                  </div>
                  <span className="text-slate-300 text-sm font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Button */}
          <div>
            <button className="w-full inline-flex items-center justify-between bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm pl-6 pr-2 py-2 rounded-full transition-all duration-300 shadow-lg">
              <span>Discuss Your Project</span>
              <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT STACKED CARDS */}
        <div className="lg:col-span-7 flex flex-col gap-5 justify-between">
          
          {/* Card 1: Website Development (White Card) */}
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="max-w-xs">
              <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                Website Development
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Professional, responsive websites designed to present your business and support your goals.
              </p>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <p className="text-lg font-extrabold text-slate-900">
                Custom Quote
              </p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                Based on Project Scope
              </p>
            </div>
          </div>

          {/* Card 2: Web Application & Software (Highlighted Dark Card) */}
          <div className="bg-[#0F1420] border-2 border-blue-600/80 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl relative overflow-hidden">
            <div className="max-w-xs">
              <h4 className="text-xl font-extrabold text-white mb-2">
                Web Application &amp; Software
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Custom web platforms and software solutions built around your business requirements.
              </p>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <span className="inline-block bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-2 shadow-sm">
                RECOMMENDED
              </span>
              <p className="text-lg font-extrabold text-white">
                Custom Quote
              </p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Based on Project Scope
              </p>
            </div>
          </div>

          {/* Card 3: Ongoing Support (Dark Card) */}
          <div className="bg-[#0F1420] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
            <div className="max-w-xs">
              <h4 className="text-xl font-extrabold text-white mb-2">
                Ongoing Support
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Maintenance, improvements, and technical support to keep your digital products running smoothly.
              </p>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <p className="text-lg font-extrabold text-white">
                Custom Quote
              </p>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Flexible Engagement
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}