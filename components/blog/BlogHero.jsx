const DESCRIPTION =
  "Notes on websites, apps, and custom software from the StandoutDev team.";

const gradientText = {
  background:
    "linear-gradient(135deg,#60a5fa 0%,#06b6d4 50%,#818cf8 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const labelStyle = {
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: "0.3em",
  color: "rgba(96,165,250,0.8)",
  marginBottom: 16,
  fontWeight: 600,
};

export default function BlogHero({ tag }) {
  return (
    <>
      <div className="max-w-2xl">
        <div style={labelStyle}>Journal</div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Ideas, notes &amp;{" "}
          <span style={gradientText}>field reports</span>
        </h1>

        <p className="mt-4 text-slate-500">{DESCRIPTION}</p>
      </div>

      {tag && (
        <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
          <span>
            Tagged{" "}
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-cyan-700">
              {tag}
            </span>
          </span>

          <a
            href="/blog"
            className="text-slate-400 underline underline-offset-2 hover:text-slate-600"
          >
            Clear
          </a>
        </div>
      )}
    </>
  );
}