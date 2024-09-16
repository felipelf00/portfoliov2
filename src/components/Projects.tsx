import ProjectCard from "./ProjectCard";
import projectData from "../project_data.json";
import { Project } from "../types/Project";

interface ProjectsProps {
  className?: string;
}

export default function Projects({ className }: ProjectsProps) {
  return (
    <div className={`${className} flex flex-col gap-8`}>
      {projectData.projects
        .slice()
        .reverse()
        .map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
}
