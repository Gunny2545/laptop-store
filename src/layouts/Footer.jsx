import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <p className="copy">
          &copy;{new Date().getFullYear()} React-Project Design and Develop By
          ππΌππππ | πππππβ’
        </p>
      </footer>
    </div>
  );
};

export default Footer;
