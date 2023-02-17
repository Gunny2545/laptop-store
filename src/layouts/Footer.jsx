import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <p className="copy">
          &copy;{new Date().getFullYear()} React-Project Design and Develop By
          𝙇𝘼𝙋𝙏𝙊𝙋 ✯ 𝙎𝙏𝙊𝙍𝙀™
        </p>
      </footer>
    </div>
  );
};

export default Footer;
