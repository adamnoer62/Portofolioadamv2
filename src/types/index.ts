export type ProjectCategory =
  | "Website Development"
  | "Game Development"
  | "Interactive Installation";
export interface Project {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  stack: string[];
  image: string;
  year: string;
  demo?: string;
  github?: string;
}
