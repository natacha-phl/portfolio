import { AboutMe } from "./components/AboutMe";
import { Languages } from "./components/Languages";
import { Home } from "./components/Home";
import { NavProvider } from "./context/NavContext";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ScrollUpProvider } from "./context/ScrollUpContext";

function App() {
  return (
    <div>
      <NavProvider>
        <ScrollUpProvider>
          <Home />
          <AboutMe />
          <Languages />
          <Experience />
          <Projects />
          <Contact />
        </ScrollUpProvider>
      </NavProvider>
    </div>
  );
}

export default App;
