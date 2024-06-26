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

  const containerClass = classNames(
    'mt-[16px] flex md:absolute md:right-0 md:z-10 md:mt-0',
    {
      'md:top-[-78px] xl:top-[-105px]': section === 'consultancyReviews',
      'md:top-[-56px] xl:top-[-68px]':
        section == 'requestsMain' || section == 'reviews',
      'md:top-[-148px] xl:top-[-126px]': section == 'requestsConsultancy',
    },
  );

  return (
    <div className={containerClass}>
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
