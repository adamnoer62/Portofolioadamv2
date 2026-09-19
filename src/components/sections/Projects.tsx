"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/projects/ProjectCard";

const ProjectModal = dynamic(() =>
  import("@/components/projects/ProjectModal").then((mod) => mod.ProjectModal),
);
const ContactPromptModal = dynamic(() =>
  import("@/components/projects/ContactPromptModal").then(
    (mod) => mod.ContactPromptModal,
  ),
);
const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Website Development",
  "Game Development",
  "Interactive Installation",
];
export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showContactPrompt, setShowContactPrompt] = useState(false);
  const visibleProjects = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  return (
    <section id="work" className="section container">
      <SectionLabel number="01">SELECTED WORK</SectionLabel>
      <div className="section-heading">
        <h2>
          A few things
          <br />
          I’ve put my mind to<span className="accent" aria-hidden="true">.</span>
        </h2>
        <p>
          Real client and product work across web, games, and interactive
          <br />
          installations.
        </p>
      </div>
      <div className="work-toolbar">
        <div className="filters" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "All" && (
                <span> {projects.length.toString().padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>
      {visibleProjects.length === 0 && (
        <p role="status">No projects in this category yet.</p>
      )}
      <div className="more-portfolio">
        <button
          className="more-portfolio-btn"
          onClick={() => setShowContactPrompt(true)}
          data-cursor="click"
        >
          More Portfolio <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      {showContactPrompt && (
        <ContactPromptModal onClose={() => setShowContactPrompt(false)} />
      )}
    </section>
  );
}
