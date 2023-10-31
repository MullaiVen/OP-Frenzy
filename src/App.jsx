import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main.jsx";
import Scroll from "./components/Scroll/Scroll.jsx";
import FooterSection from "./components/Footer/Footer.jsx";
import Reader from "./components/MangaReader/Reader.jsx";

const Section = ({ children, background }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </section>
  );
};

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section className="main" background="/src/assests/OP1-BG.jpg">
                <Main />
              </Section>

              <Section
                className="scroll"
                background="/src/assests/ScrollBG.jpg"
              >
                <Scroll />
              </Section>

              <Section className="footer-section">
                <FooterSection />
              </Section>
            </>
          }
        />

        <Route path="/chapter/:id" element={<Reader />} />
      </Routes>
    </>
  );
}
