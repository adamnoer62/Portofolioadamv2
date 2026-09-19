import { skills } from "@/data/skills";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Skills() {
  return (
    <section id="skills" className="section skills container">
      <SectionLabel number="03">SKILLS & TOOLS</SectionLabel>
      <h2>A small, intentional toolkit.</h2>
      <ul className="skill-cloud">
        {skills.map((skill) => (
          <li className="skill-word" tabIndex={0} key={skill.name}>
            <span>{skill.name}</span>
            <small>{skill.note}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
