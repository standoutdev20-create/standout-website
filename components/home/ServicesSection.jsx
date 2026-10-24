import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      number: "01",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Design That Engages",
      description: "User-friendly website and app experiences, intuitive interfaces, and thoughtful design systems built around your customers.",
      buttonText: "Explore UI/UX Design"
    },
    {
      number: "02",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: "Development That Delivers",
      description: "Responsive websites, web applications, and custom software built for performance, scalability, and real business needs.",
      buttonText: "Explore Development"
    },
    {
      number: "03",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
        </svg>
      ),
      title: "Solutions That Scale",
      description: "E-commerce, SaaS platforms, API integrations, and ongoing support to help your digital ecosystem evolve seamlessly.",
      buttonText: "Explore Our Solutions"
    }
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 px-4 flex flex-col items-center justify-center font-sans text-slate-900">
      
      {/* Top Header Badge with Logo */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {/* Dark Logo Icon */}
        <div className="w-10 h-10 bg-[#0B0F19] rounded-full flex items-center justify-center shadow-md">
          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Pill Badge */}
        <div className="inline-flex items-center bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
          <span className="text-xs font-extrabold tracking-widest text-slate-700 uppercase">
            OUR SERVICES
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          Everything Your Business Needs <br />
          to <span className="text-[#2563EB]">Build and Grow.</span>
        </h2>
      </div>

      {/* Subtitle / Description */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-slate-500 text-sm sm:text-base font-normal leading-relaxed">
          From design and development to scalable software solutions, we help businesses turn ideas into reliable digital products.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-14">
        {services.map((item, index) => (
          <div 
            key={index}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              {/* Card Header: Icon & Number */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                  {item.icon}
                </div>
                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-xs font-semibold text-slate-400">
                  {item.number}
                </div>
              </div>

              {/* Title & Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {item.description}
              </p>
            </div>

            {/* Card Button */}
            <div>
              <button className="inline-flex items-center justify-between gap-3 bg-[#0B0F19] hover:bg-slate-800 text-white text-xs font-semibold pl-5 pr-1.5 py-1.5 rounded-full transition-colors duration-200">
                <span>{item.buttonText}</span>
                <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  ↗
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Main CTA Button */}
      <div className="flex justify-center">
        <button className="inline-flex items-center justify-between gap-3 bg-[#0B0F19] hover:bg-slate-800 text-white text-sm font-medium pl-6 pr-2 py-2 rounded-full transition-colors duration-200 shadow-md">
          <span>Explore Services</span>
          <span className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            ↗
          </span>
        </button>
      </div>

    </section>
  );
}