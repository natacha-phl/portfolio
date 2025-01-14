import { useState } from "react";
import { AboutMe } from "./components/AboutMe";
import { Languages } from "./components/Languages";
import { Home } from "./components/Home";
import { NavProvider } from "./context/NavContext";

function App() {

  return (
    <div>
      <NavProvider>
        <Home />
        <AboutMe />
        <Languages />
      </NavProvider>
    </div>
  );
}

export default App;
