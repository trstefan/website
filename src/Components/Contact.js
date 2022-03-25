import React from "react";
import "../Styles/contact.css";
import { ContactForm } from "./ContactForm";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { ContactDetails } from "./ContactDetails";

export const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Contact</h1>
      <div className="contact-container">
        <ContactDetails></ContactDetails>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
