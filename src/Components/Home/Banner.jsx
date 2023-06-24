// import React from 'react';
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import "../../Style/Banner.css";

/* https://i.ibb.co/L0JW5zw/dutanto.png
https://i.ibb.co/t4VKGXy/phonix.png
https://i.ibb.co/BGkkqCr/VELOCE.png */

const Banner = () => {
  return (
    <div className="h-96">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://i.ibb.co/L0JW5zw/dutanto.png" alt="" />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/t4VKGXy/phonix.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/BGkkqCr/VELOCE.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
