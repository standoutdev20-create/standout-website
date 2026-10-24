'use client';
import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does StandoutDev provide?",
      answer: "StandoutDev provides end-to-end digital services including custom web development, UI/UX design, web applications, SaaS platforms, e-commerce solutions, and ongoing technical support."
    },
    {
      question: "How does your project development process work?",
      answer: "Our process follows a clear 4-step path: Discovery & Planning, Scope & Architecture, Design & Development, and Launch with ongoing support to ensure smooth delivery."
    },
    {
      question: "How much does a website or software project cost?",
      answer: "Project costs vary depending on scope, complexity, features, and timeline. We offer transparent pricing with fixed or flexible custom quotes based on your exact requirements."
    },
    {
      question: "How long does a project take to complete?",
      answer: "A standard website typically takes 4 to 6 weeks, while complex web applications or software platforms can take 8 to 12 weeks depending on feature requirements."
    },
    {
      question: "Can you work with our existing website or application?",
      answer: "Yes, we can audit, redesign, optimize, or rebuild existing websites and applications, as well as seamlessly integrate new APIs and custom features."
    },
    {
      question: "Will we receive ongoing support after launch?",
      answer: "Absolutely. We stay on as your Growth Partner providing continuous maintenance, performance optimization, security monitoring, and updates."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        <div className="inline-flex items-center bg-white border border-slate-200 px-4 py-1 rounded-full shadow-sm">
          <span className="text-xs font-extrabold tracking-widest text-slate-700 uppercase">
            FAQ
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
          Everything You Need to Know <br />
          Before <span className="text-[#2563EB]">Starting Your Project.</span>
        </h2>
      </div>

      {/* FAQ Accordion List */}
      <div className="w-full max-w-4xl flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'border-blue-300 shadow-md' 
                  : 'border-slate-200/80 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900">
                  {faq.question}
                </span>

                {/* Round Plus/Minus Icon Button */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                    isOpen ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <span className="text-lg font-medium leading-none">
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
              </button>

              {/* Answer Content */}
              {isOpen && (
                <div className="px-6 pb-6 pt-0 text-slate-500 text-sm leading-relaxed border-t border-slate-100 mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}