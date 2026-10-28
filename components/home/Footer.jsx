import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#050810] text-slate-400 py-10 px-6 sm:px-12 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top Row: Logo, Tagline & Navigation Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              {/* StandoutDev Logo Icon */}
              <div className="w-9 h-9 bg-[#0B0F19] border border-slate-800 rounded-xl flex items-center justify-center shadow-md overflow-hidden p-1.5">
                <img 
                  src="/images/Group.png" 
                  alt="StandoutDev Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Standout<span className="text-blue-500">Dev</span>
              </span>
            </div>

            <span className="hidden sm:inline text-slate-700">|</span>

            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              Digital products, websites, and software built around your business goals.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1">
              LinkedIn <span className="text-[10px]">↗</span>
            </a>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-slate-900/90" />

        {/* Bottom Row: Copyright & Tech Stack */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>
            © 2026 StandoutDev. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built with React · Next.js · Laravel · AWS
          </p>
        </div>

      </div>
    </footer>
  );
}