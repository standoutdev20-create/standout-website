import { Eyebrow } from "@/components/site/ui";

const DESCRIPTION =
  "Notes on websites, apps, and custom software from the StandoutDev team.";

export default function BlogHero({ tag }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>Journal</Eyebrow>
      <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
        Ideas, notes &amp; <span className="text-shimmer">field reports.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{DESCRIPTION}</p>

      {tag && (
        <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-500">
          <span>
            Tagged{" "}
            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-medium text-blue-700">{tag}</span>
          </span>
          <a href="/blog" className="text-slate-400 underline underline-offset-2 hover:text-slate-600">
            Clear
          </a>
        </div>
      )}
    </div>
  );
}
