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
          <h4>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            iste.
          </h4>
          <p className="normal-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            veniam nobis natus sequi minus maxime voluptatibus officiis dolores
            non eius, saepe tempore error debitis veritatis.
          </p>
          <p className="normal-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            veniam nobis natus sequi minus maxime voluptatibus officiis dolores
            non eius, saepe tempore error debitis veritatis.
          </p>
          <p className="normal-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            veniam nobis natus sequi minus maxime voluptatibus officiis dolores
            non eius, saepe tempore error debitis veritatis.
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
