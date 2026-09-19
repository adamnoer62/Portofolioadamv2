import { Fragment } from "react";
import { experience } from "@/data/experience";
import { SectionLabel } from "@/components/ui/SectionLabel";
export function Experience() {
  return (
    <section id="experience" className="section experience container">
      <div>
        <SectionLabel number="04">EXPERIENCE & FOCUS</SectionLabel>
        <h2>
          Learning by
          <br />
          making<span className="accent" aria-hidden="true">.</span>
        </h2>
      </div>
      <div className="experience-story">
        {experience.map((item, index) => (
          <Fragment key={item.period}>
            <article className="experience-row">
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="experience-company">{item.company}</p>
                <p>{item.detail}</p>
              </div>
            </article>
            {index < experience.length - 1 && (
              <span className="experience-connector" aria-hidden="true">
                ↓
              </span>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
