import React from "react";
import { Carousel } from "react-bootstrap";
import "../Styles/homepage.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homepage">
      <Carousel className="carousel" indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            className="c-image"
            src="https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to my website</h3>
            <p className="carousel-text">
              I'm Stef, aspiring web developer, if you want to get to know me
              and my skills, <Link to="/about">click here</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="c-image"
            src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Second slide"
          />
          <Carousel.Caption>
            <p className="carousel-text">
              Also, you can get to know my work by{" "}
              <Link to="/projects">clicking here</Link>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
