import {
  Zap,
  Target,
  Shield,
  MessageSquare,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import { values, sectionLabel, sectionHeading, bodyText, gradientText } from "./aboutShared";

const icons = [
  Zap,
  Target,
  Shield,
  MessageSquare,
  TrendingUp,
  HeartHandshake,
];

export default function ValuesSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p style={sectionLabel}>Our values</p>

        <h2 style={sectionHeading}>
          The values behind
          <br />
          <span style={gradientText}>our work.</span>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, index) => {
            const Icon = icons[index];

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg"
              >
                <Icon className="mb-5 h-6 w-6 text-blue-600" />

                <h3 className="text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3" style={bodyText}>
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}