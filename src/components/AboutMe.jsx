import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import myPicture from "../assets/images/natachapamphil.jpg";
import myPic from "../assets/images/natacha-pamphil.png";

import "./AboutMe.css";
import { LangContext } from "../context/LangContext";
import frenchTranslation from "../data/french.json";
import englishTranslation from "../data/english.json";

export const AboutMe = () => {
  const { aboutMeRef } = useContext(NavContext);

  const { lang } = useContext(LangContext);

  const texts = lang === "fr" ? frenchTranslation : englishTranslation;

  return (
    <>
      <section id="aboutme-container" ref={aboutMeRef}>
        <h3>{lang === "fr" ? "Qui suis-je ?" : "About me"}</h3>
        {/* <hr /> */}

        <div id="aboutme-content">
          <div id="aboutme-img-container">
            <img src={myPicture} alt="natacha pamphil développeuse web" />
          </div>
          <p>{texts.description}</p>
        </div>
      </section>
      <hr />
    </>
  );
};
