import React from "react";
import "../Styles/footer.css";
import {
  AiFillGithub,
  AiOutlineCodepen,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="copy">
        <AiOutlineCopyrightCircle id="copyright-ic" />{" "}
        <span>
          <b>2022</b>
        </span>
        <p>Stefan Traciu</p>
      </div>
      <div>
        <a href="https://codepen.io/StefFcp">
          <AiOutlineCodepen id="ft-icons" />
        </a>
        <a href="https://github.com/trstefan">
          <AiFillGithub id="ft-icons" />
        </a>
      </div>
    </footer>
  );
};
