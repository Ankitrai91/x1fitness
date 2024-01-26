import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Gympic from "../../assets/gympic0.jpeg";
import Gympic1 from "../../assets/gympic1.jpeg";
import Gympic2 from "../../assets/gympic2.jpeg";
import Gympic3 from "../../assets/gympic3.jpeg";
import Gympic4 from "../../assets/gympic4.jpeg";
import Gympic5 from "../../assets/gympic5.jpeg";
import Gympic6 from "../../assets/gympic6.jpeg";
import Gympic7 from "../../assets/gympic7.jpeg";
import Gympic8 from "../../assets/gympic8.jpeg";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,EffectFlip, Pagination, Navigation } from 'swiper/modules';
import './Gallery.css'
const Gallery = () => {



  return(
    <>
    <div id='gallery'>

    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFlip,Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={Gympic} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic1} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic2} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic3} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic4} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic5} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic6} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic7} alt="" className="" /></SwiperSlide>
        <SwiperSlide><img src={Gympic8} alt="" className="" /></SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Gallery;
