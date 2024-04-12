'use client';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { SliderBtn } from '@/components/ui/SliderBtn/SliderBtn';

type SliderProps = {
  data: any[];
  component: any;
  section: 'community' | 'requestsMain' | 'requestsConsultancy' | 'reviews';
  className?: string;
};

export const Slider = ({
  data,
  component: Card,
  section,
  className = '',
}: SliderProps) => {
  const [isPrevSlide, setIsPrevSlide] = useState(true);
  const [isNextSlide, setIsNextSlide] = useState(false);

  const swiperParams = {
    centeredSlides: false,
    modules: [Navigation],
    navigation: {
      nextEl: `.button-next-${section}`,
      prevEl: `.button-prev-${section}`,
    },
    //   slidesPerView: section === 'requestsMain' ? 2 : 1,
    slidesPerView: 1,
    spaceBetween: 16,
    onSlideChange: (swiper: SwiperType) => {
      setIsPrevSlide(swiper.isBeginning);
      setIsNextSlide(swiper.isEnd);
    },
    breakpoints: {
      768: {
        slidesPerView: section === 'requestsConsultancy' ? 3 : 2,
        // spaceBetween: 16,
      },

      1280: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },

    // lazyPreloadPrevNext: 1,
  };

  return (
    <div className="relative">
      <Swiper {...swiperParams} className={`w-full ${className}`}>
        {data?.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <Card data={card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SliderBtn
        section={section}
        isPrevSlide={isPrevSlide}
        isNextSlide={isNextSlide}
      />
    </div>
  );
};
