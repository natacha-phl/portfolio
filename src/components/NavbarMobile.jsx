import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { LangContext } from "../context/LangContext";
import "./NavbarMobile.css";

export const NavbarMobile = () => {
  const {
    homeRef,
    aboutMeRef,
    languagesRef,
    contactRef,
    experienceRef,
    projectsRef
  } = useContext(NavContext);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  const {lang} = useContext(LangContext)

  return (
    <div id="nav-mobile">
      <ul>
        <li>
          <button style={{color: "#425bb5"}}onClick={() => scrollToSection(homeRef)}>{lang === "fr" ? "Accueil" : "Home"}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(aboutMeRef)}>
          {lang === "fr" ? "Qui suis-je ?" : "About me"}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(languagesRef)}>
          {lang === "fr" ? "Langages" : "Languages"}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(experienceRef)}>
          {lang === "fr" ? "Parcours" : "Background"}
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(projectsRef)}>{lang === "fr" ? "Projets" : "Projects"}</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </li>
      </ul>
      {/* <hr /> */}
    </div>
  );
};
