"use client";
import { useEffect, useRef } from "react";
import type { Project } from "@/types";
import { Tag } from "@/components/ui/Tag";
import { ProjectVisual } from "./ProjectVisual";
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      dialog?.close();
    };
  }, []);
  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-inner">
        <button
          autoFocus
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>
        <ProjectVisual image={project.image} title={project.title} />
        <div className="modal-copy">
          <p className="eyebrow">
            {project.category} · {project.client}
          </p>
          <h2 id="project-title">{project.title}</h2>
          <p>{project.description}</p>
          <div className="tags">
            {project.stack.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
          <div className="modal-links">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
              >
                Live project ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="view"
              >
                Source code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
