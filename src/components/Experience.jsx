import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import "./Experience.css";
import { LangContext } from "../context/LangContext";
import frenchTranslation from "./translations/french.json";
import englishTranslation from "./translations/english.json";

export const Experience = () => {
  const { experienceRef } = useContext(NavContext);

  const { lang } = useContext(LangContext);

  const texts = lang === "fr" ? frenchTranslation : englishTranslation;

  return (
    <div ref={experienceRef} className="section" id="experience">
      <h3>Parcours</h3>
      {/* <hr/> */}
      <div className="experience-container container">
        <div className="col-md-10 mx-auto">
          <ul className="timeline">
            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">Octobre 2024</p>
                <h4>{texts.diploma2}</h4>
                <h5>Greta</h5>
              </div>
            </li>
            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2024</p>
                <h4>{texts.diploma2}</h4>
                <h5>M2I Academy</h5>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2022 - 2024</p>
                <h4>{texts.experience1}</h4>
                <h5>Prodware - Paris, France</h5>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2021-2022</p>
                <h4>{texts.experience2}</h4>
                <h5>Pero - Villebon-sur-Yvette, France</h5>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2020</p>
                <h4>{texts.diploma3}</h4>
                <h5>WEBFORCE3 Paris 4</h5>
                <p>Formation "Développeur Web et Web mobile" de 490h</p>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2018-2020</p>
                <h4>{texts.experience3}</h4>
                <h5>Paris, France</h5>
                <p>{texts.company3task1}</p>
                <p>{texts.company3task2}</p>
                <p>{texts.company3task3}</p>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2017 - 2019</p>
                <h4>{texts.experience4}</h4>
                <h5>{texts.company4}</h5>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2016 - 2017</p>
                <h4>{texts.experience5}</h4>
                <h5>{texts.company5}</h5>
              </div>
            </li>

            <li className="timeline-event" data-aos="fade-up">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2014 - 2015</p>
                <h4>{texts.experience6}</h4>
                <h5>{texts.company6}</h5>
              </div>
            </li>

            <li
              className="timeline-event"
              data-aos="fade-up"
              data-aos-delay=".2"
            >
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2014</p>
                <h4>{texts.diploma4}</h4>
                <h5>Université Paris-Est Créteil</h5>
              </div>
            </li>

            <li
              className="timeline-event"
              data-aos="fade-up"
              data-aos-delay=".4"
            >
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">2011 - 2014</p>
                <h4>{texts.experience7}</h4>
                <h5>L'oeil du Jour - Viroflay, France</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
