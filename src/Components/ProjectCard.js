import React from "react";
import { AiFillGithub } from "react-icons/ai";

import "../Styles/projects.css";

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <a id="imglink" href={project.demo_link}>
        <img src={project.img_link} alt={project.alt} id="project-img" />
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
