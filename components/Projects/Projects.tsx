import Caption from "../Caption";
import { Card } from "./components/Card";
import { Quote } from "./components/Quote";

interface ToolsProps {
  name: string;
  imageUrl: string;
  link: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tools: ToolsProps[];
  previewUrl?: string;
  githubUrl: string;
}

interface ComponentProps {
  projects: ProjectProps[]
}

export function Projects(props: ComponentProps) {
  return (
    <>
      <Caption text="Things i've made" />
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10">
        {props.projects.map((project, idx) => (
          <Card key={idx} {...project}/>
        ))}
      </div>
      <Quote/>
    </>
  );
}