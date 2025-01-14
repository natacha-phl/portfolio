import { useContext} from "react";
import { NavContext } from "../context/NavContext";
import './Navbar.css'

export const Navbar = (
 ) => {

  const {aboutMeRef, languagesRef, contactRef, experienceRef, projectsRef} = useContext(NavContext)
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header>
      <nav>
        <ul>
          <li><button onClick={() => scrollToSection(aboutMeRef)}>Qui-suis-je?</button></li>
          <li><button onClick={() => scrollToSection(languagesRef)}>Languages</button></li>
          <li><button onClick={() => scrollToSection(experienceRef)}>Parcours</button></li>
          <li><button onClick={() => scrollToSection(projectsRef)}>Projet</button></li>
          <li><button onClick={() => scrollToSection(contactRef)}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
};
