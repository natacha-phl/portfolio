import { createContext, useRef } from "react"

export const NavContext = createContext();

export const NavProvider = ({children}) => {
      const aboutMeRef = useRef(null);
      const languagesRef = useRef(null);
      const experienceRef = useRef(null);
      const projectsRef = useRef(null);
      const contactRef = useRef(null);


      return (
        <NavContext.Provider value={{aboutMeRef, languagesRef, experienceRef, projectsRef, contactRef}}>
            {children}
        </NavContext.Provider>
      )



}