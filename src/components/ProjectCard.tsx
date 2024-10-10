import { Project } from "../types/Project";
import React from "react";
import ResponsiveHeading from "./ResponsiveHeading";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-8">
      <div
        className="w-1/2 flex flex-col justify-between"
        data-aos="fade-right"
        data-aos-offset="300"
      >
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
            <a href={project.live_url} className="btn-primary px-2 py-1">
              Live page
            </a>
          )}
          {project.repo_url && (
            <a href="#" className="btn-secondary px-2 py-1">
              Repo
            </a>
          )}
        </div>
      </div>
      <div className="w-1/2">
        <img
          className="rounded-lg shadow-md"
          src={project.image_url}
          alt=""
          data-aos="flip-left"
          data-aos-offset="300"
        />
      </div>
    </div>
  );
}
