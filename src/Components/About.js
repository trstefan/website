import React from "react";
import "../Styles/about.css";
import { Tools } from "./Tools";

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="page-heading">About</h1>
      <div className="about-content">
        <div className="content-img">
          <img
            src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg?q=60"
            alt="me"
            id="me"
          />
        </div>
        <div className="content-text">
          <h4>Some bits about me and my interests</h4>
          <p className="normal-text">
            Hello! My name is Stefan and I enjoy creating things that live on
            the internet. My interest in web development started back in high
            school when I had to build an elementary website using HTML & CSS
            about the city where I studied.
          </p>
          <p className="normal-text">
            Fast-forward to today, I have a{" "}
            <span className="uni">BSc in Computing Science</span> from{" "}
            <a className="uni-link" href="https://www.uea.ac.uk/">
              University of East Anglia
            </a>{" "}
            and I've become more passionate about brining lines of code to
            life.Currently solving deceptively simple problems at Frontend
            Mentor.
          </p>
          <p className="normal-text">
            In my "spare" time I could be doing any number of things. I'm pretty
            into watching sports (mainly football and Formula 1) and nerd stuff
            like Starwars or Marvel shows. I'm also a passionate gamer and a pet
            lover, having 3 clumsy cats.
          </p>
        </div>
      </div>
      <Tools></Tools>
      <div className="further-skills">
        <h1 className="page-subheading">Currently focusing on:</h1>
        <p className="normal-text" id="txt">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
          atque, recusandae dolorum ad voluptatem saepe nihil doloremque minima
          cumque commodi reprehenderit sit tenetur accusamus aut pariatur sunt
          itaque officia at! Doloremque, inventore, suscipit dolorum quidem
          corporis eum nesciunt officia sint reiciendis vero, magni iusto nemo
          beatae ut quis praesentium. Labore.
        </p>
      </div>
    </div>
  );
};
