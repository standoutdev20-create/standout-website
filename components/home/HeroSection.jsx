
export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#b8bec9] via-[#dcdfe5] to-[#f8f9fa] px-4 py-20 font-sans text-slate-900">

      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Gradient.png')",
        }}
      />

      {/* Light overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-white/40 to-white/95" />

      {/* Background glass effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
        <div className="h-[400px] w-[600px] rotate-12 transform rounded-3xl border border-blue-400/40 shadow-2xl backdrop-blur-sm" />
        <div className="absolute h-[350px] w-[500px] -rotate-6 transform rounded-2xl border border-cyan-400/30" />
        <div className="absolute h-[300px] w-[400px] rotate-4 transform rounded-2xl border border-purple-400/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
            IT PRODUCTS &amp; DIGITAL SOLUTIONS
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          IT Products That Help You{" "}
          <br className="hidden sm:inline" />
          <span className="text-blue-600">Stand Out.</span>
        </h1>

        {/* Description */}
        <p className="mb-10 max-w-2xl text-base font-normal leading-relaxed text-slate-600 sm:text-lg md:text-xl">
          StandoutDev designs, develops, and delivers websites, web
          applications, and custom software that help businesses grow.
        </p>

        {/* Buttons */}
        <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            className="flex items-center justify-between gap-4 rounded-full bg-black py-2 pl-6 pr-2 font-medium text-white shadow-md transition-all duration-300 hover:bg-slate-800"
          >
            <span>Let's Build Your Idea</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              ↗
            </span>
          </button>

          <button
            type="button"
            className="flex items-center justify-between gap-4 rounded-full border border-slate-300 bg-white/80 py-2 pl-6 pr-2 font-medium text-slate-900 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-slate-400"
          >
            <span>Explore Our Services</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              ↗
            </span>
          </button>
        </div>

        {/* Bottom text */}
        <p className="text-xs font-medium text-slate-500 sm:text-sm">
          From idea to launch, we build digital products around your business goals.
        </p>
      </div>
    </section>
  );
}
