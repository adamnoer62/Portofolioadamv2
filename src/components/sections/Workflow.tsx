import { workflow } from "@/data/profile";
import { SectionLabel } from "@/components/ui/SectionLabel";
export function Workflow() {
  return (
    <section id="process" className="process">
      <div className="container section">
        <SectionLabel number="05">HOW I WORK</SectionLabel>
        <div className="section-heading">
          <h2>
            Good things start
            <br />
            with a clear process.
          </h2>
          <p>
            From the first question to the final polish.
            <br />
            Collaborative, considered, and always curious.
          </p>
        </div>
        <div className="process-grid">
          {workflow.map((step, index) => (
            <article key={step.title}>
              <span className="step-number">
                0{index + 1}
                <span aria-hidden="true">↗</span>
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
