import { ArrowUpRight } from "lucide-react";
import {
  principles,
  sectionLabel,
  sectionHeading,
  bodyText,
  gradientText,
} from "./aboutShared";

export default function PrinciplesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p style={sectionLabel}>Our principles</p>

        <h2 style={sectionHeading}>
          What guides
          <br />
          <span style={gradientText}>everything we do.</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.number}
              className="group rounded-2xl border border-slate-200 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold text-blue-600">
                  {item.number}
                </span>

                <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3" style={bodyText}>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}