import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import bootstrap from "../assets/images/bootstrap.png";
import css from "../assets/images/css3.png";
import html from "../assets/images/html5.png";
import javascript from "../assets/images/javascript.png";
import symfony from "../assets/images/symfonybon.png";

export const Languages = () => {
  const languagesImages = [html, css, bootstrap, javascript, symfony];

  return (
    <div>
      <Swiper
        spaceBetween={3}
        centeredSlides={false}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }} // Permet la navigation par points (pagination)
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1, // Affiche une seule image sur petits écrans
          },
          768: {
            slidesPerView: 2, // Affiche deux images sur tablettes
          },
          1024: {
            slidesPerView: 3, // Affiche trois images sur grands écrans
          },
        }}
      >
        {languagesImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
