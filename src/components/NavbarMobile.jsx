import { useContext } from "react";
import { NavContext } from "../context/NavContext";
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

  return (
    <div id="nav-mobile">
      <ul>
        <li>
          <button style={{color: "#425bb5"}}onClick={() => scrollToSection(homeRef)}>Accueil</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(aboutMeRef)}>
            Qui-suis-je ?
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(languagesRef)}>
            Langages
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(experienceRef)}>
            Parcours
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(projectsRef)}>Projets</button>
        </li>
        <li>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </li>
      </ul>
      {/* <hr /> */}
    </div>
  );
};
