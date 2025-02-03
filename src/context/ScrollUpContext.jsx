import "./ScrollUpContext.css";


import { createContext, useContext, useState, useEffect } from "react";
import { NavContext } from "./NavContext";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export const ScrollUpContext = createContext();

export const ScrollUpProvider = ({ children }) => {
  const {
    homeRef,
    aboutMeRef,
    languagesRef,
    experienceRef,
    projectsRef,
    contactRef
  } = useContext(NavContext);
  const [showScrollIcon, setShowScrollIcon] = useState(false);

  const handleScroll = () => {
    const sectionHomeRef = homeRef.current.getBoundingClientRect();
    if (
        !(sectionHomeRef.top <= window.innerHeight &&
          sectionHomeRef.bottom >= 0)
      ) {
      setShowScrollIcon(true);
    } else if (sectionHomeRef.top <= window.innerHeight &&
          sectionHomeRef.bottom >= 0) {
            setShowScrollIcon(false)
  };

}


    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    const scrollUp = () => {
        homeRef.current.scrollIntoView({ behavior: "smooth" })
    }
  return (
    <>
      {/* {showScrollIcon &&<ArrowCircleUpIcon id="scroll-up-button" onClick={()=>scrollUp()} />} */}
      {showScrollIcon &&<button id="scroll-up-button" onClick={()=>scrollUp()}>&uarr;</button>}
      <ScrollUpContext.Provider>{children}</ScrollUpContext.Provider>
    </>
  );
};
