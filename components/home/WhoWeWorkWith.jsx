import React from 'react';

export default function WhoWeWorkWith() {
  const points = [
    "Want to build a professional website, web app, or digital product.",
    "Need a reliable team to turn their idea into a working solution.",
    "Value thoughtful design, scalable development, and clear communication.",
    "Want a long-term technology partner, not just a one-time service provider."
  ];

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
            WHO WE WORK WITH
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          Built for Businesses Ready to <span className="text-[#2563EB]">Stand</span> <br />
          <span className="text-[#2563EB]">Out.</span>
        </h2>
      </div>

      {/* Main 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl items-stretch">
        
        {/* LEFT WHITE CARD */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              We work best with businesses that:
            </h3>

            {/* Shield / Check Bullet List */}
            <ul className="space-y-6 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-slate-600 text-sm font-medium leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dark CTA Box Inside Left Card */}
          <div className="bg-[#0B0F19] text-white rounded-2xl p-6 sm:p-7 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <h4 className="text-base font-bold text-white">
                Not Sure Where to Start?
              </h4>
            </div>

            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Tell us about your business or idea. We'll help you identify the right digital solution for your goals.
            </p>

            <button className="inline-flex items-center justify-between gap-3 bg-white text-slate-900 font-bold text-xs pl-5 pr-1.5 py-1.5 rounded-full hover:bg-slate-100 transition-all">
              <span>Let's Discuss Your Project</span>
              <span className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE CONTAINER */}
        <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 min-h-[420px] relative flex">
          <img
            src="/images/WeWork.png"
            alt="How We Work"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

    </section>
  );
}