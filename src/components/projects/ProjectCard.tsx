import type { Project } from "@/types";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <button
      className="project-card"
      onClick={() => onSelect(project)}
      aria-label={`View ${project.title} details`}
      data-cursor="open"
    >
      <ProjectVisual image={project.image} title={project.title} />
      <div className="project-info">
        <div>
          <p className="project-category">
            {project.category} <span> / {project.year}</span>
          </p>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
        </div>
        <span className="project-arrow" aria-hidden="true">
          ↗
        </span>
      </div>
    </button>
  );
}
