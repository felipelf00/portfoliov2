import { Project } from "../types/Project";
import React from "react";
import ResponsiveHeading from "./ResponsiveHeading";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-8">
      <div
        className="md:w-1/2 flex flex-col justify-between gap-8"
        data-aos="fade-right"
        data-aos-offset="300"
      >
        <ResponsiveHeading>{project.title}</ResponsiveHeading>
        <p className="text-xl">
          {project.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="flex justify-center gap-5 text-2xl mb-12">
          {project.live_url && (
            <a href={project.live_url} className="btn-primary px-4 py-2">
              Live page
            </a>
          )}
          {project.repo_url && (
            <a href="#" className="btn-secondary px-4 py-2">
              Repo
            </a>
          )}
        </div>
      </div>
      <div className="md:w-1/2">
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
