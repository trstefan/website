import React from "react";
import "../Styles/about.css";

export const Tools = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1 className="page-subheading">My Toolbox & Things I Can Do</h1>
        <h4>
          The skills, tools and technologies I use to bring products to life:
        </h4>
      </div>
      <div className="tools-container">
        <div className="box-icon">
          <i id="element" className="devicon-html5-plain"></i>
          <p className="tool-name">HTML5</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-css3-plain"></i>
          <p className="tool-name">CSS3</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-javascript-plain"></i>
          <p className="tool-name">Javascript</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-react-original"></i>
          <p className="tool-name">React</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-bootstrap-plain"></i>
          <p className="tool-name">Bootstrap</p>
        </div>

        <div className="box-icon">
          <i id="element" className="devicon-git-plain"></i>
          <p className="tool-name">Git</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-github-original"></i>
          <p className="tool-name">Github</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-mongodb-plain"></i>
          <p className="tool-name">MongoDB</p>
        </div>

        <div className="box-icon">
          <i id="element" className="devicon-nodejs-plain"></i>
          <p className="tool-name">NodeJS</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-express-original"></i>
          <p className="tool-name">Express</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-vscode-plain"></i>
          <p className="tool-name">VS Code</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-trello-plain-wordmark"></i>
          <p className="tool-name">Trello</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-heroku-original-wordmark"></i>
          <p className="tool-name">Heroku</p>
        </div>
        <div className="box-icon">
          <img
            id="ele"
            src="https://i.ibb.co/xXQvP6r/Layer-1.png"
            alt="Responsive Websites"
          ></img>
          <p className="tool-name">Responsive Design</p>
        </div>
        <div className="box-icon">
          <img id="ele" src="https://i.ibb.co/s3NqLcC/api.png" alt="APIs"></img>
          <p className="tool-name">RESTful APIs</p>
        </div>
        <div className="box-icon">
          <img
            id="ele"
            src="https://i.ibb.co/B4SRnq9/ostpan.png"
            alt="Postman"
          ></img>
          <p className="tool-name">Postman</p>
        </div>
      </div>
    </div>
  );
};
