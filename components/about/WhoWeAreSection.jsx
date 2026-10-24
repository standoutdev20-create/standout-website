import { Code2, Target, Users } from "lucide-react";
import {
  sectionLabel,
  sectionHeading,
  bodyText,
  gradientText,
} from "./aboutShared";

const features = [
  {
    icon: Target,
    title: "Business-first thinking",
    description:
      "We start with your business goals and build solutions around what you need to achieve.",
  },
  {
    icon: Code2,
    title: "Technology that works",
    description:
      "We combine thoughtful design and reliable development to create useful digital products.",
  },
  {
    icon: Users,
    title: "Built around people",
    description:
      "We focus on the experience of the people who will use your website, app, or software.",
  },
];

export default function WhoWeAreSection() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <p style={sectionLabel}>Who we are</p>

          <h2 style={sectionHeading}>
            More than code.
            <br />
            <span style={gradientText}>A partner in growth.</span>
          </h2>

          <p className="mt-6" style={bodyText}>
            We are an IT solutions team helping businesses turn
            ideas into practical digital experiences. From websites
            to custom software, we focus on clarity, performance,
            and measurable value.
          </p>
        </div>

        <div className="grid gap-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <Icon className="mb-4 h-6 w-6 text-blue-600" />

              <h3 className="text-lg font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-2" style={bodyText}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}