
'use client';

const row1 = [
  'Uma Metal Craft',
  'Siddhanath Physics',
  'Digital Developers',
  'Vercel',
  'Linear',
  'Notion',
  'Figma',
  'Supabase',
];

const row2 = [
  'OpenAI',
  'GitHub',
  'Slack',
  'Discord',
  'Spotify',
  'Airbnb',
  'Uber',
  'Netflix',
  'Adobe',
  'Dribbble',
];

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
          animation: marqueeLeft 30s linear infinite;
        }

        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marqueeRight 35s linear infinite;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
          Built for Businesses Ready to Grow
        </h2>
      </div>

      <div className="relative flex flex-col gap-6">
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-left items-center gap-12 sm:gap-16">
            {[...row1, ...row1, ...row1, ...row1].map((name, index) => (
              <span
                key={`row1-${index}`}
                className="whitespace-nowrap text-lg font-bold text-slate-700 transition-colors duration-200 hover:text-slate-900 sm:text-xl md:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee-right items-center gap-12 sm:gap-16">
            {[...row2, ...row2, ...row2, ...row2].map((name, index) => (
              <span
                key={`row2-${index}`}
                className="whitespace-nowrap text-lg font-bold text-slate-700 transition-colors duration-200 hover:text-slate-900 sm:text-xl md:text-2xl"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
