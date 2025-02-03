import { useContext, useState } from "react";
import { NavContext } from "../context/NavContext";
import "./Projects.css";
import { LangContext } from "../context/LangContext";
import { ModalProject } from "./ModalProject.jsx";


import projectsData from "../data/projects.json";

export const Projects = () => {
  const { projectsRef } = useContext(NavContext);
  const { lang } = useContext(LangContext);
  const [showModalProject, setShowModalProject] = useState(false);
  const [imageToModal, setImageToModal] = useState(null);
  const [titleToModal, setTitleToModal] =useState(null)

  return (
    <>
      <hr />
      <h3>{lang === "fr" ? "Projets" : "Projects"}</h3>
      <div ref={projectsRef} id="projects-container">
        {/* <hr /> */}
        {projectsData.map((project, key) => (
          <div className="card" key={key}>
            <a href={project.links.liveDemo}>
              <div className="card-overlay">
                <h5>{project.title}</h5>
                <p>{project.technologies}</p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (project.links.liveDemo.length === 0 ){
                      setShowModalProject(true);
                      setImageToModal(project.links.image)
                      setTitleToModal(project.title)

                    } else {
                    window.open(
                      project.links.liveDemo,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}}
                  className="btn btn-primary"
                >
                  VOIR
                </button>
              </div>
              <img
                className="card-img-top"
                src={project.links.image}
                alt="Card image cap"
              />
            </a>{" "}
          </div>
        ))}

       {showModalProject && <ModalProject imageToModal={imageToModal} titleToModal={titleToModal} setShowModalProject={setShowModalProject}/>}

      </div>
      <hr />
    </>
  );
};
