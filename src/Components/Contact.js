import React from "react";
import "../Styles/contact.css";
import { ContactForm } from "./ContactForm";

import { ContactDetails } from "./ContactDetails";

export const Contact = () => {
  return (
    <div className="contact">
      <h1 className="page-heading">Ping me</h1>
      <div className="contact-container">
        <ContactDetails></ContactDetails>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
