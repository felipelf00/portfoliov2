import ProjectCard from "./ProjectCard";
import projectData from "../project_data.json";
import { Project } from "../types/Project";

interface ProjectsProps {
  className?: string;
}

export default function Projects({ className }: ProjectsProps) {
  return (
    <section className={`${className}`}>
      <h2 className="uppercase text-center text-7xl md:text-8xl font-bold mb-12">Personal projects</h2>
      <div className="flex flex-col gap-20">
        {projectData.projects
          .slice()
          .reverse()
          .map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}
