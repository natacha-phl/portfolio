import "./Home.css";
import { Navbar } from "./Navbar";

import { NavContext } from "../context/NavContext";
import { useContext } from "react";
import { useState } from "react";
import { LangContext } from "../context/LangContext";
import developpment2 from "../assets/images/code-developpeur2.png";
import developpment3 from "../assets/images/code-developpeur.png";
import developpment from "../assets/images/code-developpeur.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Languages.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css3.png";
import html from "../assets/images/html5.png";
import javascript from "../assets/images/javascript.png";
import symfony from "../assets/images/symfonybon.png";

import frenchTranslation from "../data/french.json";
import englishTranslation from "../data/english.json";

export const Home = () => {
  const { homeRef } = useContext(NavContext);

  const { lang, setLang } = useContext(LangContext);
  const languagesImages = [html, css, bootstrap, javascript, symfony];
  // const [buttonText, setButtonText] = useState("EN");
  const texts = lang === "fr" ? frenchTranslation : englishTranslation;



  return (
    <>
      <div ref={homeRef} id="home-container" className="container-fluid">
        <Navbar />

        <div id="home-content2">
          <div id="home-image">
            <img src={developpment2} alt="" />
          </div>
          <div id="home-content">
            <h2>Natacha PAMPHIL</h2>
            {/*           <h1>
            Conceptrice et développeuse
            <br /> d'applications
          </h1> */}
            <h1>{texts.title}</h1>
          </div>
        </div>
        <div id="swiper">
          {/* <Swiper
            // spaceBetween={3}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 4
              }
            }}
          >
            {languagesImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
      <hr />
    </>
  );
};
