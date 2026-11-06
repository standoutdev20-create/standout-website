// Shared marketing content. Copy comes from the existing site; edit here and
// it updates every page that uses it.
import {
  Code2,
  LayoutDashboard,
  PenTool,
  ShoppingBag,
  Smartphone,
  Search,
  Palette,
  Wrench,
  Target,
  Gauge,
  ShieldCheck,
  Layers,
  MessagesSquare,
  LifeBuoy,
} from 'lucide-react'

export const CONTACT = {
  email: 'contact@standoutdev.com',
  phone: '+91 88780 25649',
  phoneHref: 'tel:+918878025649',
  location: 'Pune, Maharashtra 411052',
}

export const services = [
  {
    slug: 'web-development',
    icon: Code2,
    title: 'Website Development',
    short: 'Fast, responsive and scalable websites designed to turn visitors into customers.',
    image: '/images/stock/responsive-design.jpg',
    points: ['Responsive on every screen', 'SEO-friendly structure', 'Performance-focused builds'],
  },
  {
    slug: 'web-apps',
    icon: LayoutDashboard,
    title: 'Web Apps & SaaS',
    short: 'Custom web platforms, dashboards and SaaS products built around your workflows.',
    image: '/images/stock/dashboard-dark.jpg',
    points: ['Dashboards & portals', 'Database and API planning', 'Scalable architecture'],
  },
  {
    slug: 'ui-ux-design',
    icon: PenTool,
    title: 'UI/UX Design',
    short: 'Intuitive digital experiences with thoughtful layouts and user-focused interactions.',
    image: '/images/stock/wireframe-sketch.jpg',
    points: ['User journeys & wireframes', 'Design systems', 'Interactive prototypes'],
  },
  {
    slug: 'ecommerce-development',
    icon: ShoppingBag,
    title: 'E-commerce Development',
    short: 'Online stores built to make product discovery, checkout and shopping effortless.',
    image: '/images/stock/ecommerce.jpg',
    points: ['Product catalogues', 'Smooth checkout', 'Payment integrations'],
  },
  {
    slug: 'mobile-app-development',
    icon: Smartphone,
    title: 'Mobile App Development',
    short: 'Mobile-first product experiences that help your business stay connected with users.',
    image: '/images/stock/mobile-apps.jpg',
    points: ['Mobile-first UX', 'Cross-platform builds', 'App store launch support'],
  },
  {
    slug: 'seo-optimization',
    icon: Search,
    title: 'SEO & Optimization',
    short: 'Improve discoverability, technical performance and the experience of your website.',
    image: '/images/stock/analytics-laptop.jpg',
    points: ['Technical SEO', 'Core Web Vitals', 'On-page structure'],
  },
  {
    slug: 'branding-identity',
    icon: Palette,
    title: 'Branding & Identity',
    short: "Build a consistent digital identity that communicates your brand's personality.",
    image: '/images/stock/wireframes-table.jpg',
    points: ['Visual identity', 'Brand guidelines', 'Digital assets'],
  },
  {
    slug: 'website-maintenance',
    icon: Wrench,
    title: 'Maintenance & Support',
    short: 'Ongoing improvements, updates and technical care to keep your product running smoothly.',
    image: '/images/stock/developers-pair.jpg',
    points: ['Updates & monitoring', 'Feature improvements', 'Technical support'],
  },
]

export const process = [
  {
    step: '01',
    title: 'Discovery & Planning',
    text: 'We understand your business, audience, goals and requirements before defining the right product strategy, scope and roadmap.',
    image: '/images/stock/planning-session.jpg',
  },
  {
    step: '02',
    title: 'Scope & Design',
    text: 'We define deliverables, timeline and budget, then shape the visual direction, page layouts and interactions around your users.',
    image: '/images/stock/ux-flow.jpg',
  },
  {
    step: '03',
    title: 'Development & Testing',
    text: 'We build responsive interfaces and the required functionality, then test across screen sizes before anything goes live.',
    image: '/images/stock/code-laptop.jpg',
  },
  {
    step: '04',
    title: 'Launch & Growth',
    text: 'We ship, then stay on as your growth partner if you want us to. Most clients do.',
    image: '/images/stock/launch-celebration.jpg',
  },
]

export const benefits = [
  { icon: Target, title: 'Built around your goals', text: 'We start by understanding your business, your users and what success looks like before shaping the solution.' },
  { icon: Gauge, title: 'Performance that matters', text: 'Thoughtful development and optimization create fast, responsive experiences across modern devices.' },
  { icon: ShieldCheck, title: 'Quality at every step', text: 'From first design to final testing, we focus on consistency, usability and maintainable code.' },
  { icon: Layers, title: 'Ready to scale', text: 'We consider your future plans so your product can evolve as your business and customers change.' },
  { icon: MessagesSquare, title: 'Clear communication', text: 'Stay informed about progress, decisions and next steps with a collaborative, transparent workflow.' },
  { icon: LifeBuoy, title: 'Support beyond launch', text: 'Your launch is a milestone, not the end. We help plan improvements and keep your product evolving.' },
]

export const engagements = [
  {
    name: 'Website Development',
    tagline: 'Professional, responsive websites that present your business and support your goals.',
    features: ['Responsive website design', 'Essential website pages', 'Contact form integration', 'Core on-page SEO setup', 'Testing and launch support'],
  },
  {
    name: 'Web Application & Software',
    tagline: 'Custom web platforms and software built around your business requirements.',
    featured: true,
    features: ['Requirement-based planning', 'Custom UI/UX experience', 'Custom features and workflows', 'Database and API planning', 'Scalable architecture', 'Post-launch assistance'],
  },
  {
    name: 'Ongoing Support',
    tagline: 'Maintenance, improvements and technical support to keep your products running smoothly.',
    features: ['Updates and monitoring', 'Performance improvements', 'New features on request', 'Flexible engagement'],
  },
]

export const faqs = [
  {
    q: 'What services does StandoutDev provide?',
    a: 'End-to-end digital services: website development, UI/UX design, web applications and SaaS platforms, e-commerce, mobile apps, SEO, branding and ongoing technical support.',
  },
  {
    q: 'How does your project process work?',
    a: 'A clear four-step path: Discovery & Planning, Scope & Design, Development & Testing, and Launch, with ongoing support afterwards if you want it.',
  },
  {
    q: 'How much does a website or software project cost?',
    a: 'It depends on scope, complexity, features and timeline. We discuss your goals first, then prepare a clear proposal with fixed deliverables tailored to your requirements.',
  },
  {
    q: 'How long does a project take?',
    a: 'A standard website typically takes 4 to 6 weeks, while web applications or software platforms can take 8 to 12 weeks depending on features. We agree the timeline before starting.',
  },
  {
    q: 'Will my website work on mobile devices?',
    a: 'Yes. Every project is designed and tested to adapt to mobile phones, tablets and desktop screens.',
  },
  {
    q: 'Can you work with our existing website or application?',
    a: 'Yes. We can audit, redesign, optimize or rebuild existing websites and applications, and integrate new APIs and features.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We can stay on for maintenance, performance improvements, security updates and new features, agreed according to your needs.',
  },
  {
    q: 'Who owns the code and designs?',
    a: 'You do. Source code, design files and assets belong to you once the project is delivered.',
  },
]

export const values = [
  { title: 'Results over decoration', text: 'Every decision is tied to outcomes: better inquiries, fewer support tickets and higher retention.' },
  { title: 'Product and code, together', text: 'We plan the product and write the code together, so what ships matches your goals.' },
  { title: 'Speed without shortcuts', text: 'A clear process, no unnecessary meetings, and a focus on delivering quality efficiently.' },
  { title: 'Ownership and transparency', text: 'You own what we build. Clear communication, honest timelines and regular updates.' },
]
