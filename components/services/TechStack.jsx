import { Container, Section, SectionHeader } from '@/components/site/ui';

const stack = [
  { name: 'Next.js', file: 'nextdotjs', use: 'Modern web applications' },
  { name: 'React', file: 'react', use: 'Interactive interfaces' },
  { name: 'Node.js', file: 'nodedotjs', use: 'Server-side functionality' },
  { name: 'MongoDB', file: 'mongodb', use: 'Flexible data storage' },
  { name: 'Tailwind CSS', file: 'tailwindcss', use: 'Responsive styling' },
  { name: 'JavaScript', file: 'javascript', use: 'Dynamic experiences' },
  { name: 'Three.js', file: 'threedotjs', use: '3D & motion on the web' },
  { name: 'Docker', file: 'docker', use: 'Reliable deployments' },
  { name: 'Vercel', file: 'vercel', use: 'Fast global hosting' },
  { name: 'Figma', file: 'figma', use: 'Design & prototyping' },
  { name: 'GitHub', file: 'github', use: 'Version control' },
  { name: 'HTML5', file: 'html5', use: 'Accessible markup' },
];

export default function TechStack() {
  return (
    <Section tone="muted">
      <Container>
        <SectionHeader
          eyebrow="Tools & technology"
          title="The right tools."
          accent="Built for what comes next."
          description="We choose technologies around your project requirements, focusing on performance, flexibility and a reliable user experience."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {stack.map((t) => (
            <div key={t.name} className="card-lift flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/logos/tech/${t.file}.svg`} alt="" className="h-6 w-6" loading="lazy" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900">{t.name}</p>
                <p className="truncate text-xs text-slate-500 sm:text-sm">{t.use}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
