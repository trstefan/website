import React from "react";
import { AiFillGithub } from "react-icons/ai";

import "../Styles/projects.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a id="imglink" href={project.demo_link}>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="project-pic"
          id="project-img"
        />
      </a>

      <div className="project-info">
        <div className="card-info">
          <a id="link" href={project.demo_link}>
            <h2 className="project-title">{project.title}</h2>{" "}
          </a>
          <a id="ghlink" href={project.github_link}>
            <AiFillGithub className="github-icon"></AiFillGithub>
          </a>
        </div>
        <div className="project-description">
          <p className="project-text">{project.description}</p>
        </div>
      </div>
    </div>
  );
};
