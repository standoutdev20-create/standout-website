'use client';
import React, { useState } from 'react';

export default function WhyStandoutDev() {
  const [openIndex, setOpenIndex] = useState(0);

  const accordions = [
    {
      title: "One Connected Team",
      content: "Design, development, and technical decisions work together from the start. You get a coordinated team focused on building the right solution without unnecessary handoffs.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Solutions Built Around Your Business",
      content: "Every business is unique. We tailor our software architecture, user flows, and integrations around your specific operational workflows and growth targets.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Design Meets Development",
      content: "We bridge the gap between aesthetics and performance. Beautiful interfaces paired with scalable, clean, and high-performance codebases.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Support Beyond Launch",
      content: "Our partnership doesn't end when your site goes live. We offer ongoing optimization, security monitoring, and feature updates as your business scales.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop"
    }
  ];

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
            WHY STANDOUTDEV
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          Technology That <span className="text-[#2563EB]">Moves Your</span> <br />
          <span className="text-[#2563EB]">Business Forward.</span>
        </h2>
      </div>

      {/* Main 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-6xl items-stretch">
        
        {/* LEFT FEATURED IMAGE */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[460px] relative">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
            alt="Developer Working in Office" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT ACCORDION LIST */}
        <div className="lg:col-span-7 flex flex-col gap-4 justify-center">
          {accordions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#EEF2F6] border-blue-200 shadow-sm p-6 sm:p-7' 
                    : 'bg-white hover:bg-slate-50 border-slate-200/80 p-5 sm:p-6'
                }`}
              >
                {/* Accordion Header */}
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  {/* Toggle Arrow Button */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0 ${
                    isOpen 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'border border-slate-300 text-slate-600 bg-white'
                  }`}>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
                    </svg>
                  </div>
                </button>

                {/* Accordion Body Content */}
                {isOpen && (
                  <div className="mt-6 pt-2 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center animate-fadeIn">
                    <p className="sm:col-span-8 text-slate-600 text-sm leading-relaxed font-normal">
                      {item.content}
                    </p>
                    <div className="sm:col-span-4 rounded-2xl overflow-hidden h-28 border border-slate-200 shadow-sm">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}