"use client";
import { Element } from "react-scroll";
import Project from "../project";
import { projects } from "@/content/projects";

const ProjectsSection = () => {
  return (
    <Element name="projects">
      <div className="min-h-[80vh] m-4 flex flex-col gap-4">
        <h1 className="text-3xl tracking-tighter font-bold text-center">
          Projects
        </h1>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {projects.map((project) => (
            <Project
              key={project.name}
              name={project.name}
              url={project.url}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ProjectsSection;
