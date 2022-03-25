import React from "react";
import "../Styles/about.css";

export const Tools = () => {
  return (
    <div className="skills">
      <div className="skills-title">
        <h1>My Toolbox & Things I Can Do</h1>
        <h4>
          The skills, tools and technologies I use to bring your products to
          life:
        </h4>
      </div>
      <div className="tools-container">
        <div className="box-icon">
          <i id="element" className="devicon-html5-plain"></i>
          <p>HTML5</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-css3-plain"></i>
          <p>CSS3</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-javascript-plain"></i>
          <p>Javascript</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-react-original"></i>
          <p>React</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-bootstrap-plain"></i>
          <p>Bootstrap</p>
        </div>

        <div className="box-icon">
          <i id="element" className="devicon-git-plain"></i>
          <p>Git</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-github-original"></i>
          <p>Github</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>

        <div className="box-icon">
          <i id="element" className="devicon-nodejs-plain"></i>
          <p>NodeJS</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-express-original"></i>
          <p>Express</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-vscode-plain"></i>
          <p>VS Code</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-trello-plain-wordmark"></i>
          <p>Trello</p>
        </div>
        <div className="box-icon">
          <i id="element" className="devicon-heroku-original-wordmark"></i>
          <p>Heroku</p>
        </div>
        <div className="box-icon">
          <img
            id="ele"
            src="https://i.ibb.co/xXQvP6r/Layer-1.png"
            alt="Responsive Websites"
          ></img>
          <p>Responsivness </p>
        </div>
        <div className="box-icon">
          <img id="ele" src="https://i.ibb.co/s3NqLcC/api.png" alt="APIs"></img>
          <p>RESTful APIs</p>
        </div>
        <div className="box-icon">
          <img
            id="ele"
            src="https://i.ibb.co/B4SRnq9/ostpan.png"
            alt="Postman"
          ></img>
          <p>Postman</p>
        </div>
      </div>
    </div>
  );
};
