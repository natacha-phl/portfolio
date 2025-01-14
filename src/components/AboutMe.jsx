import { useContext } from "react";
import { NavContext } from "../context/NavContext";

export const AboutMe = () => {

    const {aboutMeRef} = useContext(NavContext)
  
  return (
    <section ref={aboutMeRef}>
      <h2>Qui suis-je ?</h2>
      <p>
        Passionnée par le digital depuis mon plus jeune âge, je me suis
        orientée, lors de mes études, vers un master e-commerce. Après avoir
        travaillé 5 ans dans l'e-commerce et le marketing digital, notamment sur
        des projets de refonte de site, j'ai décidé de me diriger vers le
        développement web. J'ai aujourd'hui un diplôme niveau bac+4 de
        Concepteur Développeur d'Applications
      </p>
    </section>
  );
};
