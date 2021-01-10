import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <span>About Disney+ Hotstar</span>
        <span>Terms Of Use</span>
        <span>Privacy</span>
        <span>Policy</span>
        <span>FAQ</span>
        <span>Feedback</span>
        <span>Careers</span>
      </div>
      <div className="footer-right">
        <span>Connect With Us</span>
        <div className="icons">
          <a href="https://github.com/Justinnn07/hotstar-clone">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B919319275200&text=Text%20with%20Your%20boi%20Justin&app_absent=0">
            <i class="fab fa-whatsapp-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
