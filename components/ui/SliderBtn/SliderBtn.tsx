import React from 'react';

import classNames from 'classnames';

import ArrowLeft from '@/public/icons/arrowLeftMd.svg';
import ArrowRight from '@/public/icons/arrowRightMd.svg';

import data from '@/data/common.json';

import { SliderBtnProps } from './types';

import css from './SliderBtn.module.css';

export const SliderBtn: React.FC<SliderBtnProps> = ({
  section,
  isNextSlide,
  isPrevSlide,
}: SliderBtnProps) => {
  const ariaLabel = data.sliderBtn;

  const arrowLeftClass = classNames('h-[40px] w-[40px]', {
    [css['slider-inactive-arrow']]: isPrevSlide,
    [css['slider-arrow']]: !isPrevSlide,
  });

  const arrowRightClass = classNames('h-[40px] w-[40px]', {
    [css['slider-inactive-arrow']]: isNextSlide,
    [css['slider-arrow']]: !isNextSlide,
  });

  return (
    <div className="mt-[16px] flex md:absolute md:right-0 md:top-[-56px] md:z-10 md:mt-0 xl:top-[-68px]">
      <button
        aria-label={ariaLabel.rightArrow}
        type="button"
        className={`button-prev-${section} mr-10 cursor-pointer md:mr-16`}
      >
        <ArrowLeft className={arrowLeftClass} />
      </button>
      <button
        aria-label={ariaLabel.leftArrow}
        type="button"
        className={`button-next-${section} cursor-pointer`}
      >
        <ArrowRight className={arrowRightClass} />
      </button>
    </div>
  );
};
