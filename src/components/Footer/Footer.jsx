import React from "react";
import "./Footer.css"; // Assuming you have a CSS file for styling
import OPFrenzyW from "/assests/OPFrenzywhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Body = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="item">
          <img src="/assests/luffy.jpg" alt="Manga 1" />
          <div className="item-text">Luffy</div>
        </div>
        <div className="item">
          <img src="/assests/Zoro.jpg" alt="Manga 1" />
          <div className="item-text">Zoro</div>
        </div>
        <div className="item">
          <img src="/assests/Sanji.jpg" alt="Manga 1" />
          <div className="item-text">Sanji</div>
        </div>
        <div className="item">
          <img src="/assests/Usopp.jpg" alt="Manga 1" />
          <div className="item-text">Usopp</div>
        </div>
        <div className="item">
          <img src="/assests/Nami.jpg" alt="Manga 1" />
          <div className="item-text">Nami</div>
        </div>
      </div>
      <div className="centered-quote">
        <h3>
          - Power Isn't Determined By Your Size, <br /> But By The Size Of Your
          Heart And Dreams.
        </h3>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <img src={OPFrenzyW} alt="Logo" className="Foot-logo" />
        <p>© 2023 OPFrenzy.to</p>
      </div>
      <div className="credits">
        <p className="credits-text">Made with 🤍 from MULLAI</p>
      </div>
      <div className="footer-right">
        <div className="column text-light center-icons">
          <a
            href="https://linkedin.com/in/mullai-vendhan333"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginBottom: "10px" }}
          >
            <FontAwesomeIcon icon={faLinkedin} color="white" />
          </a>
          <a
            href="https://github.com/MullaiVen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="white" />
          </a>
        </div>
        <div className="links">
          <a href="/Home/contact-us">Contact</a>
          <a href="/Home/request">Request</a>
        </div>
      </div>
    </div>
  );
};

const FooterSection = () => {
  return (
    <div className="footer-section">
      <Body />
      <Footer />
    </div>
  );
};

export default FooterSection;
