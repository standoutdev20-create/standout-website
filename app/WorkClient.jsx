
"use client";

import { useState } from "react";
import { projects, filters, clientNames } from "@/components/work/projectsData";
import WorkHero from "@/components/work/WorkHero";
import LogoMarquee from "@/components/work/LogoMarquee";
import FeaturedProjects from "@/components/work/FeaturedProjects";
import ResultsSection from "@/components/work/ResultsSection";
import TechnologiesSection from "@/components/work/TechnologiesSection";
import ClientStories from "@/components/work/ClientStories";
import WorkCTA from "@/components/work/WorkCTA";
import ProjectDetail from "@/components/work/ProjectDetail";
import "./../components/work/workStyles.css";

export default function WorkClient() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="work-page">
      <WorkHero projectCount={projects.length} />

      <LogoMarquee clientNames={clientNames} />

      <FeaturedProjects
        projects={projects}
        filters={filters}
        onProjectOpen={setSelectedProject}
      />

      <ResultsSection />

      <TechnologiesSection projects={projects} />

      <ClientStories />

      <WorkCTA />

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}
