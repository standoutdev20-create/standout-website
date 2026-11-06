
import {
  Layout,
  Search,
  Smartphone,
  Zap,
  Target,
  Shield,
  Users,
  Megaphone,
  PenTool,
  Sparkles,
  Monitor,
  BarChart3,
  Award,
} from "lucide-react";

export const projects = [
  {
    id: "meteoroid",
    isNew: true,
    title: "Meteoroid",
    subtitle: "Luxurious Stones · CNC Stone Cladding",
    category: "Website",
    tag: "Architecture & Interiors",
    year: "2026",
    color: "from-stone-500 to-amber-700",
    colorHex: "#a16207",
    accentLight: "rgba(161,98,7,0.12)",
    accentBorder: "rgba(161,98,7,0.25)",
    url: "https://meteoroid.in/",
    description:
      "A luxury showcase website for premium CNC stone cladding, with editorial design, rich collections and enquiry-first product pages.",
    fullDescription:
      "Meteoroid Luxurious Stones creates precision-cut CNC stone cladding and bespoke natural stone designs. We built a premium, editorial-style website that lets their materials take centre stage: immersive collections, a CNC design gallery, detailed product pages and direct enquiry paths.",
    challenge:
      "Present a large, highly visual catalogue of stone collections and CNC designs in a way that feels as premium as the product, while making it easy for architects and homeowners to enquire.",
    solution:
      "An editorial layout with large photography, a bento-style collections grid, product pages with clear specifications (category, finish, application, format), a downloadable catalogue and WhatsApp enquiries on every page.",
    thumbnail: "/images/projects/meteoroid-1.webp",
    screenshots: [
      "/images/projects/meteoroid-1.webp",
      "/images/projects/meteoroid-2.webp",
      "/images/projects/meteoroid-3.webp",
      "/images/projects/meteoroid-4.webp",
    ],
    features: [
      {
        icon: Sparkles,
        title: "Editorial Luxury Design",
        description: "Large photography and refined typography that match a premium brand.",
      },
      {
        icon: Layout,
        title: "Collections Showcase",
        description: "A bento-style grid for cladding, panels, inlays and landscaping stones.",
      },
      {
        icon: PenTool,
        title: "CNC Design Gallery",
        description: "Dedicated pages for 2D and 3D CNC designs and artworks.",
      },
      {
        icon: Monitor,
        title: "Product Detail Pages",
        description: "Clear specifications: category, finish, application and format.",
      },
      {
        icon: Megaphone,
        title: "WhatsApp Enquiries",
        description: "One-tap enquiries on WhatsApp from anywhere on the site.",
      },
      {
        icon: Award,
        title: "Downloadable Catalogue",
        description: "A catalogue download right from the navigation.",
      },
    ],
    services: [
      "Web Design",
      "UI/UX Design",
      "Next.js Development",
      "Product Catalogue",
    ],
    technologies: ["Next.js", "React"],
    results: [
      { metric: "Live", label: "Website Status" },
      { metric: "Collections", label: "Product Showcase" },
      { metric: "Catalogue", label: "Downloadable" },
      { metric: "WhatsApp", label: "Direct Enquiries" },
    ],
  },

  {
    id: "uma-metals",
    title: "Uma Metal Craft",
    subtitle: "Premium Metal Manufacturing",
    category: "Website",
    tag: "Manufacturing",
    year: "2024",
    duration: "6 Weeks",
    color: "from-amber-500 to-orange-600",
    colorHex: "#f59e0b",
    accentLight: "rgba(245,158,11,0.15)",
    accentBorder: "rgba(245,158,11,0.25)",
    url: "https://umametalcraft.com/",
    description:
      "A premium manufacturing website showcasing industrial expertise through modern design and a conversion-focused experience.",
    fullDescription:
      "A digital presence for a metal manufacturing business, designed to showcase products, capabilities and industrial solutions.",
    challenge:
      "Present manufacturing capabilities clearly and help potential clients discover products and submit inquiries.",
    solution:
      "A responsive website with an organized product showcase, clear calls to action and an SEO-friendly structure.",
    thumbnail: "/uma1.webp",
    screenshots: ["/uma1.webp", "/uma2.webp", "/uma3.webp"],
    features: [
      {
        icon: Layout,
        title: "Product Showcase",
        description: "Organized presentation of products and capabilities.",
      },
      {
        icon: Search,
        title: "SEO Friendly",
        description: "Structured content and metadata for discoverability.",
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Layouts adapted for desktop, tablet and mobile.",
      },
      {
        icon: Zap,
        title: "Performance",
        description: "Optimized assets and a smooth browsing experience.",
      },
      {
        icon: Target,
        title: "Inquiry Focused",
        description: "Clear paths for prospective clients to get in touch.",
      },
      {
        icon: Shield,
        title: "Modern Stack",
        description: "Built with Next.js and Tailwind CSS.",
      },
    ],
    services: [
      "Web Design",
      "Frontend Development",
      "UI/UX Design",
      "SEO Optimization",
      "Performance Tuning",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    results: [
      { metric: "Live", label: "Website Status" },
      { metric: "100%", label: "Responsive Layout" },
      { metric: "SEO", label: "Search Friendly Structure" },
      { metric: "Direct", label: "Inquiry Path" },
    ],
  },

  {
    id: "siddhanath-physics",
    title: "Siddhanath Krupa Physics",
    subtitle: "Interactive Education Platform",
    category: "Product",
    tag: "Education",
    year: "2024",
    duration: "4 Weeks",
    color: "from-blue-500 to-indigo-600",
    colorHex: "#3b82f6",
    accentLight: "rgba(59,130,246,0.15)",
    accentBorder: "rgba(59,130,246,0.25)",
    url: "https://siddhanath-physics.vercel.app/",
    description:
      "An education website designed to make physics course information accessible and easy for students and parents to explore.",
    fullDescription:
      "A web presence for a physics coaching institute, bringing course information and essential student resources together.",
    challenge:
      "Make course details, schedules and contact information easier for students and parents to find online.",
    solution:
      "A clean, responsive interface with clear navigation, readable content and mobile-friendly layouts.",
    thumbnail: "/phy1.webp",
    screenshots: ["/phy1.webp", "/phy2.webp", "/phy3.webp"],
    features: [
      {
        icon: Users,
        title: "Student Information",
        description: "Dedicated sections for course and faculty details.",
      },
      {
        icon: Layout,
        title: "Clean Interface",
        description: "Readable typography and straightforward navigation.",
      },
      {
        icon: Smartphone,
        title: "Mobile First",
        description: "A comfortable experience on smaller screens.",
      },
      {
        icon: Zap,
        title: "Fast Experience",
        description: "Lightweight layouts for smoother browsing.",
      },
      {
        icon: Megaphone,
        title: "Announcements",
        description: "A place to communicate important institute updates.",
      },
      {
        icon: PenTool,
        title: "Visual Identity",
        description: "A consistent look suited to an education brand.",
      },
    ],
    services: [
      "UI/UX Design",
      "Web Development",
      "Content Strategy",
      "Mobile Optimization",
      "Deployment",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Responsive Design",
    ],
    results: [
      { metric: "Live", label: "Website Status" },
      { metric: "Mobile", label: "Friendly Design" },
      { metric: "Unified", label: "Course Information" },
      { metric: "Clear", label: "Navigation" },
    ],
  },

  {
    id: "digital-developers",
    title: "Digital Developers",
    subtitle: "Premium Agency Website",
    category: "Website",
    tag: "Digital Agency",
    year: "2024",
    duration: "8 Weeks",
    color: "from-violet-500 to-purple-600",
    colorHex: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.15)",
    accentBorder: "rgba(139,92,246,0.25)",
    url: "https://digitaldeveloperss.com/",
    description:
      "A bold agency website presenting digital services through a modern visual identity and a clear client journey.",
    fullDescription:
      "A digital agency website designed to present services, communicate expertise and make it easier for prospective clients to get in touch.",
    challenge:
      "Create a distinctive online presence that communicates services clearly and helps visitors understand the agency's offering.",
    solution:
      "A modern website with structured service sections, visual storytelling and clear contact paths.",
    thumbnail: "/dg.webp",
    screenshots: ["/dg.webp", "/dgg.webp", "/gdd.webp"],
    features: [
      {
        icon: Sparkles,
        title: "Motion Design",
        description: "Animations and micro-interactions throughout the UI.",
      },
      {
        icon: Monitor,
        title: "Visual Experience",
        description: "A distinctive, modern presentation of services.",
      },
      {
        icon: BarChart3,
        title: "Project Showcase",
        description: "Sections for presenting work and capabilities.",
      },
      {
        icon: Target,
        title: "Conversion Focus",
        description: "Clear calls to action across the experience.",
      },
      {
        icon: Zap,
        title: "Performance",
        description: "Careful asset and layout optimization.",
      },
      {
        icon: Award,
        title: "Brand Presentation",
        description: "A consistent visual identity for the agency.",
      },
    ],
    services: [
      "Website Design",
      "Web Development",
      "UI/UX Design",
      "Lead Generation",
      "SEO & Analytics",
    ],
    technologies: [
      "Next.js",
      "React",
      "Three.js",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel",
    ],
    results: [
      { metric: "Live", label: "Website Status" },
      { metric: "Visual", label: "Interactive Experience" },
      { metric: "Clear", label: "Service Presentation" },
      { metric: "Direct", label: "Contact Journey" },
    ],
  },
];

export const filters = ["All", "Website", "Product"];

export const clientNames = [
  "Meteoroid Luxurious Stones",
  "Uma Metal Craft",
  "Siddhanath Krupa Physics",
  "Digital Developers",
  "Creative Solutions",
  "Digital Experiences",
];

export const workStats = [
  { value: "03", label: "Featured Projects" },
  { value: "03", label: "Industries" },
  { value: "2026", label: "Our Journey" },
  { value: "100%", label: "Responsive Design" },
];
