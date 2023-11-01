import React from "react";
import "./Header.css";
import OPFrenzy from "/assests/OPFrenzy.png";
import signin from "/assests/Signin-bt.png";

const Header = () => {
  return (
    <header>
      <div className="header-border">
        <div className="container">
          <div className="wrapper">
            <aside className="start">
              <div className="nav-logo">
                <a href="/Home">
                  <img src={OPFrenzy} alt="OPFrenzy" />
                </a>
              </div>
              <div className="drop-down">
                <ul className="nav-links">
                  <li>
                    <a href="#">Types</a>
                    <div className="dropdown-content">
                      <a href="#">Fillers</a>
                      <a href="#">One-shot</a>
                    </div>
                  </li>
                  <li>
                    <a href="#">Arcs</a>
                    <div className="dropdown-content">
                      <a href="#">Marine-Ford</a>
                      <a href="#">Dressrosa</a>
                      <a href="#">Wano</a>
                    </div>
                  </li>
                  <li>
                    <a href="/Home/Newest">Newest</a>
                  </li>
                  <li>
                    <a href="/Home/About">About</a>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="end">
              <div className="nav-login">
                <a href="/Home/Sign-in">
                  <img src={signin} alt="OPFrenzy" />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
