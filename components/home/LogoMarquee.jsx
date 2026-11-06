'use client';

// Real clients we have delivered for. Swap `logo` in once client logo files
// are available (e.g. '/logos/clients/uma-metal-craft.svg').
const clients = [
  { name: 'Meteoroid Luxurious Stones', initials: 'ME', logo: null },
  { name: 'Uma Metal Craft', initials: 'UM', logo: null },
  { name: 'Siddhanath Krupa Physics', initials: 'SK', logo: null },
  { name: 'Digital Developers', initials: 'DD', logo: null },
];

// Official brand marks (simple-icons) for the stack we actually build with.
const stack = [
  { name: 'Next.js', file: 'nextdotjs' },
  { name: 'React', file: 'react' },
  { name: 'Node.js', file: 'nodedotjs' },
  { name: 'MongoDB', file: 'mongodb' },
  { name: 'Tailwind CSS', file: 'tailwindcss' },
  { name: 'Three.js', file: 'threedotjs' },
  { name: 'Docker', file: 'docker' },
  { name: 'Vercel', file: 'vercel' },
  { name: 'GitHub', file: 'github' },
  { name: 'Figma', file: 'figma' },
  { name: 'JavaScript', file: 'javascript' },
  { name: 'HTML5', file: 'html5' },
];

function ClientMark({ client }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap">
      {client.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={client.logo} alt={client.name} className="h-9 w-auto" />
      ) : (
        <>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0B0F19] text-xs font-bold tracking-wide text-white">
            {client.initials}
          </span>
          <span className="font-display text-lg font-semibold text-slate-800 sm:text-xl">
            {client.name}
          </span>
        </>
      )}
    </div>
  );
}

function StackMark({ item }) {
  return (
    <div className="group flex items-center gap-2.5 whitespace-nowrap opacity-60 transition-opacity duration-200 hover:opacity-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/tech/${item.file}.svg`}
        alt=""
        aria-hidden="true"
        className="h-6 w-6 sm:h-7 sm:w-7"
        loading="lazy"
      />
      <span className="text-base font-semibold text-slate-900 sm:text-lg">{item.name}</span>
    </div>
  );
}

export default function LogoMarquee() {
  return (
    <section className="w-full select-none overflow-hidden bg-white py-16 font-sans">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 45s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
        .marquee-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-left, .animate-marquee-right { animation: none; }
        }
      `}</style>

      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Built for Businesses Ready to Grow
        </h2>
      </div>

      <div className="relative flex flex-col gap-10">
        <div>
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Trusted by
          </p>
          <div className="marquee-mask flex w-full overflow-hidden">
            <div className="animate-marquee-left items-center gap-14 sm:gap-20">
              {Array.from({ length: 6 }, () => clients).flat().map((client, index) => (
                <ClientMark key={`client-${index}`} client={client} />
              ))}
            </div>
          </div>
        </div>

        <div>
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Built with
          </p>
          <div className="marquee-mask flex w-full overflow-hidden">
            <div className="animate-marquee-right items-center gap-12 sm:gap-16">
              {[...stack, ...stack].map((item, index) => (
                <StackMark key={`stack-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
