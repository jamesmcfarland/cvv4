"use client";
import { Element } from "react-scroll";
import Project from "../project";
import { projects } from "@/content/projects";

const ProjectsSection = () => {
  return (
    <Element name="projects">
      <div className="min-h-[80vh] flex justify-center items-center gap-8 flex-wrap mx-4">
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
    </Element>
  );
};

export default ProjectsSection;
