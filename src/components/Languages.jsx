import { useContext } from "react";
import { NavContext } from "../context/NavContext";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Languages.css";

import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.png";
import bootstrap from "../assets/images/bootstrap.png";
import javascript from "../assets/images/javascript.png";
import symfony from "../assets/images/symfonybon.png";
import mysql from "../assets/images/mysql.png";
import php from "../assets/images/phpbon.jpg";
import photoshop from "../assets/images/photoshop.png";
import powerPlatform from "../assets/images/Microsoft-Power-Platform.jpg";
import googleAnalytics from "../assets/images/googleanalyticsbon.png";
import googleSearchConsole from "../assets/images/googlesearchconsole.png";
import figma from "../assets/images/figma.png";
import react from "../assets/images/react.png";
import sql from "../assets/images/sql.png";
import { LangContext } from "../context/LangContext";
import wordpress from "../assets/images/wordpress.png";


export const Languages = () => {
  const { languagesRef } = useContext(NavContext);

  const { lang } = useContext(LangContext);


  return (
    <>
    <div id="languages"  ref={languagesRef}>
    <h3>{lang === "fr" ? "Langages" : "Languages"}</h3>

      <hr />
      <div className="laguages-container">
        <div className="language-content">
          <div className="language-image-container">
            <img src={html5} alt="Logo HTML 5" />
          </div>
          <p>HTML</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={css3} alt="Logo CSS 3" />
          </div>
          <p>CSS</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={bootstrap} alt="Logo Bootstrap" />
          </div>
          <p>Bootstrap</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={javascript} alt="Logo JavaScript" />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={react} alt="Logo Bootstrap" />
          </div>
          <p>ReactJs</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={php} alt="Logo PHP" />
          </div>
          <p>PHP</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={symfony} alt="Logo Symfony" />
          </div>
          <p>Symfony</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={sql} alt="Logo MySQL" />
          </div>
          <p>SQL</p>
        </div>
        <div className="language-content">
          <div className="language-image-container">
            <img src={mysql} alt="Logo MySQL" />
          </div>
          <p>MySQL</p>
        </div>

        <div className="language-content">
          <div className="language-image-container">
            <img src={photoshop} alt="Logo Photoshop" />
          </div>
          <p>Photoshop</p>
        </div>
      </div>

      <hr />

      <div className="laguages-container">
      <div className="language-content-medium">
          <div className="language-image-container">
            <img src={wordpress} alt="Logo Google Analytics" />
          </div>
          <p>Wordpress</p>
        </div>
        <div className="language-content-medium">
          <div className="language-image-container">
            <img src={googleAnalytics} alt="Logo Google Analytics" />
          </div>
          <p>Google Analytics</p>
        </div>
        <div className="language-content-medium">
          <div className="language-image-container">
            <img src={googleSearchConsole} alt="Logo Google Search Console" />
          </div>
          <p>Google Search Console</p>
        </div>
      </div>

      <hr/>

      <div className="laguages-container">
        <div className="language-content-big">
          <div className="language-image-container">
            <img src={powerPlatform} alt="Logo Microsoft Power Platform" />
          </div>
          <p>Microsoft Power Platform</p>
        </div>
      </div>
      <hr/>
    </div>
    <hr/>
    </>
  );
};
