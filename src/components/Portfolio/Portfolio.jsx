import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination'

import billiard from "../../img/billard.png";
import resume_med from "../../img/resume_med.png";
import irregation from "../../img/irregation.png";
import cafe from "../../img/cafe.png";





import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>LAST PROJECT</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={resume_med} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={irregation} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cafe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={billiard} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
