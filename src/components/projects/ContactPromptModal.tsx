"use client";
import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";
export function ContactPromptModal({ onClose }: { onClose: () => void }) {
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
      aria-labelledby="contact-prompt-title"
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
          aria-label="Close"
        >
          ×
        </button>
        <div className="modal-copy">
          <p className="eyebrow">SELECTED WORK</p>
          <h2 id="contact-prompt-title">Want to see more?</h2>
          <p>
            This is a curated selection. Reach out and I’ll walk you through
            the rest of my work.
          </p>
          {profile.email ? (
            <a
              className="contact-link"
              href={`mailto:${profile.email}`}
              data-cursor="click"
            >
              {profile.email} ↗
            </a>
          ) : (
            <p className="contact-placeholder">Contact details coming soon.</p>
          )}
          {profile.linkedin && (
            <a
              className="contact-secondary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="view"
            >
              LinkedIn ↗
            </a>
          )}
        </div>
      </div>
    </dialog>
  );
}
