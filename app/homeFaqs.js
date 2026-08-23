// Shared FAQ data for the home page — kept in a plain (non-'use client') module
// so it can be imported both by the client-rendered FAQ section (HomeClient.jsx)
// and by the server page (page.js) for FAQPage JSON-LD structured data.
export const faqs = [
  { q:'What IT services does StandoutDev provide?',          a:'We build websites, mobile apps, web applications, e-commerce stores, SaaS dashboards, and other custom software. From first idea to launch and support, we handle the full development cycle.' },
  { q:'How does StandoutDev approach a new project?',        a:'Every project starts with a Discovery phase — we map your goals, users, and technical needs. Then we move through planning, design, development, QA, and launch in structured sprints with weekly reviews.' },
  { q:'How long does a typical engagement take?',            a:'Business websites usually take 3–6 weeks. Mobile apps and custom software typically take 2–4 months. We scope tightly and ship in phases so you see progress early.' },
  { q:'Do you work with startups and small businesses?',     a:'Yes. We work with founders, local businesses, and growing companies that need a website, app, or custom IT product without a large in-house team.' },
  { q:'What tech stack do you build in?',                    a:'Next.js, React, and Node.js for web products. React Native for mobile apps. Tailwind CSS for UI. Vercel or similar cloud hosting. We also work with WordPress, Shopify, and your existing stack when needed.' },
  { q:'Do you offer ongoing support after launch?',          a:'Yes. Most clients stay with us for updates, new features, hosting help, and maintenance after the first launch.' },
  { q:'Can you work with our in-house team?',                a:'Yes. We can lead the build, support your developers, or take a specific module — depending on what you need.' },
  { q:'How do you handle pricing?',                          a:"We scope each project based on the product and outcome, not open-ended hours. We'll share a range on the first call and a firm number after discovery." },
];
