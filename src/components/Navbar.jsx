import { useContext, useState, useEffect } from "react";
import { NavContext } from "../context/NavContext";
import { LangContext } from "../context/LangContext";
import { NavbarMobile } from "./NavbarMobile";


import "./Navbar.css";
import frenchTranslation from "../data/french.json";
import englishTranslation from "../data/english.json";

import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
export const Navbar = () => {
  // MOBILE MENU MODAL

  const [showNavMobile, setShowNavMobile] = useState(false);

  // ------- SCROLL TO SECTION --------

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

  // ------- SECTION ACTIVE --------

  const [activeSection, setActiveSection] = useState("");
  const handleScroll = () => {
    const sectionHomeRef = homeRef.current.getBoundingClientRect();
    const sectionAboutMeRef = aboutMeRef.current.getBoundingClientRect();
    const sectionLanguagesRef = languagesRef.current.getBoundingClientRect();
    const sectionContactRef = contactRef.current.getBoundingClientRect();
    const sectionExperienceRef = experienceRef.current.getBoundingClientRect();
    const sectionProjectsRef = projectsRef.current.getBoundingClientRect();

    if (
      sectionHomeRef.top <= window.innerHeight &&
      sectionHomeRef.bottom >= 0
    ) {
      setActiveSection("home-active");
    } else if (
      sectionAboutMeRef.top <= window.innerHeight &&
      sectionAboutMeRef.bottom >= 0
    ) {
      setActiveSection("aboutme-active");
    } else if (
      sectionLanguagesRef.top <= window.innerHeight &&
      sectionLanguagesRef.bottom >= 0
    ) {
      setActiveSection("languages-active");
    } else if (
      sectionContactRef.top <= window.innerHeight &&
      sectionContactRef.bottom >= 0
    ) {
      setActiveSection("contact-active");
    } else if (
      sectionExperienceRef.top <= window.innerHeight &&
      sectionExperienceRef.bottom >= 0
    ) {
      setActiveSection("experience-active");
    } else if (
      sectionProjectsRef.top <= window.innerHeight &&
      sectionProjectsRef.bottom >= 0
    ) {
      setActiveSection("projects-active");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ------- THEME --------

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // ------ LANGUAGES  ----

  const { lang, setLang } = useContext(LangContext);
  const [buttonText, setButtonText] = useState("EN");
  const texts = lang === "fr" ? frenchTranslation : englishTranslation;

  return (
    <header>
      <div id="nav-mobile-tooggle">
        <MenuIcon
          sx={{ color: "#425bb5", fontSize: "2rem" }}
          className="menu-burger"
          onClick={() => {
            if (showNavMobile === false) {
              setShowNavMobile(true);
            } else {
              setShowNavMobile(false);
            }
          }}
        />
        {showNavMobile && <NavbarMobile />}

        <nav>
          <ul>
            <li>
              <button
                className={activeSection === "home-active" ? "active" : ""}
                onClick={() => scrollToSection(homeRef)}
              >
                {lang === "fr" ? "Accueil" : "Home"}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "aboutme-active" ? "active" : ""}
                onClick={() => scrollToSection(aboutMeRef)}
              >
                {lang === "fr" ? "Qui suis-je ?" : "About me"}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "languages-active" ? "active" : ""}
                onClick={() => scrollToSection(languagesRef)}
              >
                {lang === "fr" ? "Langages" : "Languages"}
              </button>
            </li>
            <li>
              <button
                className={
                  activeSection === "experience-active" ? "active" : ""
                }
                onClick={() => scrollToSection(experienceRef)}
              >
                {lang === "fr" ? "Parcours" : "Background"}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "projects-active" ? "active" : ""}
                onClick={() => scrollToSection(projectsRef)}
              >
                {lang === "fr" ? "Projets" : "Projects"}
              </button>
            </li>
            <li>
              <button
                className={activeSection === "contact-active" ? "active" : ""}
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </button>
            </li>
          </ul>
          {/* <hr /> */}
        </nav>
      </div>

      <div id="language-container">
        <button
          onClick={() => {
            if (lang === "fr") {
              setLang("en");
              setButtonText("FR");
            } else {
              setLang("fr");
              setButtonText("EN");
            }
          }}
        >
          {buttonText}
        </button>
      </div>

      <div id="theme-container">
        <button onClick={toggleTheme}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
    </header>
  );
};
