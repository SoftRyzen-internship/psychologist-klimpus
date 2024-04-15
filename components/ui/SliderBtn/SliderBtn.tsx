import React from 'react';

import classNames from 'classnames';

import ArrowLeft from '@/public/icons/arrowLeftMd.svg';
import ArrowRight from '@/public/icons/arrowRightMd.svg';

import { SliderBtnProps } from './types';

export const SliderBtn: React.FC<SliderBtnProps> = ({
  section,
  isNextSlide,
  isPrevSlide,
}: SliderBtnProps) => {
  const arrowLeftClass = classNames('h-[40px] w-[40px]', {
    'slider-inactive-arrow': isPrevSlide,
    'slider-arrow': !isPrevSlide,
  });

  const arrowRightClass = classNames('h-[40px] w-[40px]', {
    'slider-inactive-arrow': isNextSlide,
    'slider-arrow': !isNextSlide,
  });

  return (
    <div className="mt-[16px] flex md:absolute md:right-0 md:top-[-56px] md:z-10 md:mt-0 xl:top-[-68px]">
      <button
        aria-label="Попередній слайд"
        type="button"
        className={`button-prev-${section} mr-[40px] cursor-pointer`}
      >
        <ArrowLeft className={arrowLeftClass} />
      </button>
      <button
        aria-label="Наступний слайд"
        type="button"
        className={`button-next-${section} cursor-pointer`}
      >
        <ArrowRight className={arrowRightClass} />
      </button>
    </div>
  );
};
