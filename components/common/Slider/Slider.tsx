"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";

import { getSliderSettings } from "./SliderSettings";

import { SliderProps } from "./types";

export const Slider: React.FC<SliderProps> = ({
  slides,
  section
}) => {
  return (
    <>
      <Swiper
        wrapperTag={slides?.length === 1 ? "div" : "ul"}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `.button-next-${section}`,
          prevEl: `.button-prev-${section}`,
        }}
        slidesPerView={1}
        updateOnWindowResize={true}
        loop={slides?.length !== 1}
        speed={800}
        spaceBetween={slides?.length === 1 ? 0 : 24}
        lazyPreloadPrevNext={1}
        grabCursor={true}
        breakpoints={getSliderSettings(section)}
        className="w-full"
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide
            key={idx}
            tag={slides?.length === 1 ? "div" : "li"}
            className=
              "overflow-hidden rounded-3xl relative"
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};