import React from "react";
import "../Styles/contact.css";

import { GrLocation, GrMail } from "react-icons/gr";

export const ContactDetails = () => {
  return (
    <div className="contact-info">
      <p>
        Dropping a line to say g’day, ask for my resume or see if we can build
        something amazing together? I’d love to hear from you!
      </p>
      <div className="info">
        <GrMail className="info-icon" />
        <small>stefantraciu20@gmail.com</small>
      </div>
      <div className="info">
        <GrLocation className="info-icon" />
        Norwich, United Kingdom.
      </div>
    </div>
  );
};
