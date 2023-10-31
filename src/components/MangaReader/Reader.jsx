import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Reader.css";
import OPFrenzyW from "/src/assests/OPFrenzywhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Reader = () => {
  let { id } = useParams();
  id = id.replace(":", "");

  const chapterPages = {
    1: 54,
    100: 22,
    1000: 14,
    1001: 14,
    1002: 13,
    1003: 13,
    1004: 16,
    1005: 17,
    1006: 17,
    1007: 16,
    1008: 16,
    1009: 15,
    1010: 16,
    1011: 16,
    1012: 14,
    1013: 16,
    1014: 14,
    1015: 15,
  };

  const images = Array.from(
    { length: chapterPages[id] },
    (v, i) => `/src/assests/chapters/${id}/${i + 1}.jpg`
  );

  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < images.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const indicatorsPerColumn = 10;
  const numColumns = Math.ceil(images.length / indicatorsPerColumn);

  // Create a two-dimensional array
  const indicatorColumns = Array.from({ length: numColumns }, (_, i) =>
    images.slice(i * indicatorsPerColumn, (i + 1) * indicatorsPerColumn)
  );

  return (
    <div className={`reader-container ${darkMode ? "dark" : ""}`}>
      <div className="reader-sidebar">
        <div className="nav-logo">
          <a href="/">
            <img src={OPFrenzyW} alt="OPFrenzy" />
          </a>
          <div className="chapter-details">
            <p className="cnum">Chapter: {id}</p>
            <p>{}</p>
            <p className="cpage">
              Page <br /> {currentPage + 1}/{images.length}
            </p>
            <div className="progress-indicator">
              {indicatorColumns.map((column, i) => (
                <div key={i} className="column">
                  {column.map((image, j) => (
                    <div
                      key={j}
                      className={`progress-dot ${
                        currentPage === i * indicatorsPerColumn + j
                          ? "active"
                          : ""
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="extra">
              <div className="dark-mode-toggle">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="social-icons">
                <p>Queries</p>
                <div className="icons-row">
                  <a
                    href="https://github.com/MullaiVen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mullai-vendhan333"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reader-content">
        <div className="click-area left" onClick={prevPage} />
        <div className="click-area right" onClick={nextPage} />
        <img
          src={images[currentPage]}
          alt={`Page ${currentPage + 1}`}
          className="reader-image"
        />
      </div>
    </div>
  );
};

export default Reader;
