import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import myPicture from "../assets/images/natachapamphil.jpg";
import "./AboutMe.css";
import { LangContext } from "../context/LangContext";
import frenchTranslation from "./translations/french.json";
import englishTranslation from "./translations/english.json";

export const AboutMe = () => {
  const { aboutMeRef } = useContext(NavContext);

  const { lang } = useContext(LangContext);

  const texts = lang === "fr" ? frenchTranslation : englishTranslation;

  return (
    <>
      <section id="aboutme-container" ref={aboutMeRef}>
        <h3>Qui suis-je ?</h3>
        {/* <hr /> */}

        <div id="aboutme-content">
          <div id="aboutme-img-container">
            <img src={myPicture} alt="natacha pamphil développeuse web" />
          </div>
          {/*       <p>
        Passionnée par le digital depuis mon plus jeune âge, je me suis
        orientée, lors de mes études, vers un master e-commerce.<br/> Après avoir
        travaillé 5 ans dans l'e-commerce et le marketing digital, notamment sur
        des projets de refonte de site, j'ai décidé de me diriger vers le<br/>
        développement web. <br/>J'ai aujourd'hui un diplôme niveau bac+4 de
        Concepteur Développeur d'Applications
      </p> */}
          <p>{texts.description}</p>
        </div>
      </section>
      <hr />
    </>
  );
};
