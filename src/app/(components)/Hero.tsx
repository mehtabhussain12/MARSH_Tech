"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import frontend from "./banner.jpeg";
import ScrollToTopButton from './Scroller';


const Hero = () => {
  const sliderItems = [
    { img: frontend },
    { img: frontend }
  ];

  return (
    <>
 <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
    {sliderItems.map((item, index) => (
      <SwiperSlide key={index}>
        <div className="overflow-hidden">
          <Image src={item.img} alt={`Slide `} width={1550} height={300} />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  

  <ScrollToTopButton/>
    </>
  );
};

export default Hero;
