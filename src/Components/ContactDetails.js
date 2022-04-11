import React from "react";
import Mailto from "react-protected-mailto";
import "../Styles/contact.css";

export const ContactDetails = () => {
  return (
    <div className="contact-info">
      <p className="normal-text">
        Dropping a line to say g’day, ask for my resume or see if we can build
        something amazing together? I’d love to hear from you!
      </p>
      <p className="normal-text">
        Not a fan of filling a form? Shoot me an email at{" "}
        <Mailto
          className="email-link"
          email="stefantraciu20@gmail.com"
        ></Mailto>
      </p>
    </div>
  );
};
