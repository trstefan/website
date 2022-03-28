import React from "react";
import { ProjectCard } from "./ProjectCard";
import "../Styles/projects.css";
import ProjectList from "../ProjectList.json";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="page-heading">Projects</h1>
      <div className="projects-grid">
        {ProjectList.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};
