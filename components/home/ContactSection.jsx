'use client';
import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    websiteUrl: '',
    serviceRequired: '',
    projectBudget: '',
    projectDetails: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#060B18] via-[#0A1128] to-[#102A6B] text-white py-20 px-4 flex items-center justify-center font-sans relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] pointer-events-none rounded-full" />

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Heading & Graphic */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            {/* Top Badge */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center font-extrabold text-white text-lg backdrop-blur-md">
                S.
              </div>
              <div className="inline-flex items-center bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                <span className="text-[11px] font-bold tracking-widest text-slate-300 uppercase">
                  LET'S BUILD SOMETHING
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Have a Project? <br />
              <span className="text-[#3B82F6]">Let's Build It</span> <br />
              <span className="text-[#3B82F6]">Together.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Tell us about your business, idea, or digital product. We'll help you explore the right solution for your goals.
            </p>

            {/* Info Card Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md mb-10 max-w-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-400 flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                    LET'S TALK ABOUT YOUR PROJECT
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Share your requirements and the services you're interested in, and we'll take it from there.
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-blue-400">
                    <span>Websites</span> • <span>Web Apps</span> • <span>Custom Software</span> • <span>UI/UX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3D Logo Graphic Vector */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 relative self-start opacity-90 drop-shadow-[0_20px_35px_rgba(37,99,235,0.4)]">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M20 30L55 10L80 25L45 45L20 30Z" fill="url(#contactGrad1)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20 50L55 30L80 45L45 65L20 50Z" fill="url(#contactGrad2)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M20 70L55 50L80 65L45 85L20 70Z" fill="url(#contactGrad3)"/>
              <defs>
                <linearGradient id="contactGrad1" x1="20" y1="10" x2="80" y2="45" gradientUnits="userSpaceOnUse"><stop stopColor="#2563EB" /><stop offset="1" stopColor="#38BDF8" /></linearGradient>
                <linearGradient id="contactGrad2" x1="20" y1="30" x2="80" y2="65" gradientUnits="userSpaceOnUse"><stop stopColor="#1D4ED8" /><stop offset="1" stopColor="#60A5FA" /></linearGradient>
                <linearGradient id="contactGrad3" x1="20" y1="50" x2="80" y2="85" gradientUnits="userSpaceOnUse"><stop stopColor="#FFFFFF" /><stop offset="1" stopColor="#CBD5E1" /></linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: White Form Card */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Tell Us About Your Project
          </h3>
          <p className="text-slate-500 text-sm mb-8 font-normal">
            Share a few details so we can understand what you need.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                  FULL NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Alex Taylor"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                  WORK EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="alex@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Row 2: Company & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                  COMPANY OR BUSINESS NAME
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="e.g. Acme Corp"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                  WEBSITE URL <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="url"
                  name="websiteUrl"
                  placeholder="https://example.com"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Row 3: Service Required */}
            <div>
              <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                SERVICE REQUIRED <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 appearance-none focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                >
                  <option value="">Select a service...</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Web Application">Web Application &amp; Software</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Ongoing Support">Ongoing Support</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 4: Project Budget */}
            <div>
              <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                PROJECT BUDGET <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <div className="relative">
                <select
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 appearance-none focus:outline-none focus:border-blue-600 focus:bg-white transition-all"
                >
                  <option value="">Select your budget</option>
                  <option value="$1k - $3k">$1,000 - $3,000</option>
                  <option value="$3k - $5k">$3,000 - $5,000</option>
                  <option value="$5k - $10k">$5,000 - $10,000</option>
                  <option value="$10k+">$10,000+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Row 5: Project Details */}
            <div>
              <label className="block text-[11px] font-extrabold tracking-wider uppercase text-slate-800 mb-2">
                PROJECT DETAILS <span className="text-red-500">*</span>
              </label>
              <textarea
                name="projectDetails"
                rows="4"
                placeholder="Tell us about your goals, requirements, and what you'd like to build..."
                value={formData.projectDetails}
                onChange={handleChange}
                required
                className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-all resize-none"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="w-4 h-4 mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="agreeToTerms" className="text-xs text-slate-600 font-medium">
                I agree to be contacted about my enquiry and accept the <a href="#" className="underline text-slate-800">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-between bg-[#0B0F19] hover:bg-slate-800 text-white font-bold text-sm pl-6 pr-2 py-2.5 rounded-full transition-all duration-300 shadow-lg"
            >
              <span>Send Project Enquiry</span>
              <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                ↗
              </span>
            </button>

            {/* Footer Note */}
            <div className="flex items-center justify-center gap-2 pt-2 text-slate-500 text-xs">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Your project information will be handled responsibly.</span>
            </div>
          </form>
        </div>

      </div>

    </section>
  );
}