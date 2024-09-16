import { Project } from "../types/Project";
import React from "react";
import ResponsiveHeading from "./ResponsiveHeading";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-4">
      <div className="w-1/3 flex flex-col justify-between">
        <ResponsiveHeading>{project.title}</ResponsiveHeading>
        <p className="text-xl text-neutral-600">
          {project.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="flex justify-center gap-5 text-2xl mb-12">
          {project.live_url && (
            <a
              href={project.live_url}
              className="bg-black text-white px-2 py-1"
            >
              Live page
            </a>
          )}
          {project.repo_url && (
          <a href="#" className="px-2 py-1">
            Repo
          </a>
          )}
        </div>
      </div>
      <div className="w-2/3">
        <img className="" src={project.image_url} alt="" />
      </div>
    </div>
  );
}
