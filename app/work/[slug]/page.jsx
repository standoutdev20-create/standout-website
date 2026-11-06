import { notFound } from 'next/navigation';
import CaseStudy from '@/components/work/CaseStudy';
import { projects } from '@/components/work/projectsData';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  const title = `${project.title} — Case Study`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.id}` },
    openGraph: {
      title: `${title} — StandoutDev`,
      description: project.description,
      url: `/work/${project.id}`,
      images: [{ url: project.thumbnail }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — StandoutDev`,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();
  return <CaseStudy project={project} />;
}
