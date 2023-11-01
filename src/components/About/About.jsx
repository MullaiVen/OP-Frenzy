import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import photo from "/assests/StrawHat-Grp.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const h1Ref = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const openModal = () => {
    document.body.classList.add("noScroll");
    setModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("noScroll");
    setModalOpen(false);
  };

  useEffect(() => {
    if (h1Ref.current) {
      h1Ref.current.onmouseover = (event) => {
        let iterations = 0;
        const originalText = event.target.innerText;
        const interval = setInterval(() => {
          if (iterations >= 9) {
            clearInterval(interval);
            event.target.innerText = originalText;
          } else {
            event.target.innerText = event.target.innerText
              .split("")
              .map((letter, index) => {
                if (index < event.target.dataset.value.length) {
                  return letters[Math.floor(Math.random() * 26)];
                }

                return letter;
              })
              .join("");
          }

          iterations += 1 / 3;
        }, 30);
      };
    }
  }, []);

  return (
    <body>
      <div className="OPAboutContainer">
        <img src={photo} alt="About" />
        <div className="content-container">
          <div className="text-container">
            <h1 ref={h1Ref} className="AbtH1" data-value="ONE PIECE">
              ONE PIECE
            </h1>
            <p className="AbtP">ワンピース</p>
            <Link to="/chapter/1">
              <button className="circle-button">Read Now</button>
            </Link>
          </div>
          <div className="Details-container">
            <p>
              <b>Type:</b> Manga <br />
              <b>Author:</b> Eiichiro Oda <br />
              <b>Published:</b> Jul 21, 1997 to ?<br />
              <b>Genres:</b> Action, Comedy, Shounen, Super Power, <br />
              Adventure, Fantasy, Military <br />
              <b>Magazines:</b> Shounen Jump (Weekly)
            </p>
          </div>
        </div>
      </div>
      <div className="Aboutdescription">
        <p className="OPStory">
          Gol D. Roger, a man referred to as the "Pirate King,"
          <br />
          is set to be executed by the World Government. But
          <br />
          just before his demise, he confirms the existence of
          <br />a great treasure{" "}
          <a href="#Read-more" onClick={openModal}>
            Read more+
          </a>
        </p>
      </div>

      {modalOpen && (
        <div className="Modal">
          <div className="Modal-content">
            <span className="Close" onClick={closeModal}>
              ×
            </span>
            <p>
              Gol D. Roger, a man referred to as the "Pirate King," is set to be
              executed by the World Government. But just before his demise, he
              confirms the existence of a great treasure, One Piece, located
              somewhere within the vast ocean known as the Grand Line.
              Announcing that One Piece can be claimed by anyone worthy enough
              to reach it, the Pirate King is executed and the Great Age of
              Pirates begins. <br /> Twenty-two years later, a young man by the
              name of Monkey D. Luffy is ready to embark on his own adventure,
              searching for One Piece and striving to become the new Pirate
              King. Armed with just a straw hat, a small boat, and an elastic
              body, he sets out on a fantastic journey to gather his own crew
              and a worthy ship that will take them across the Grand Line to
              claim the greatest status on the high seas.
            </p>
          </div>
        </div>
      )}
    </body>
  );
};

export default About;
