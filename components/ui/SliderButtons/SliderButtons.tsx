import React from 'react';

import classNames from 'classnames';

import LeftArrow from '@/public/icons/arrowLeftMd.svg';

import data from '@/data/common.json';

import { SliderButtonsProps } from './types';

export const SliderButtons: React.FC<SliderButtonsProps> = ({
  className = '',
}) => {
  const { sliderNav } = data;

  return (
    <div>
      {sliderNav.map(({ id, ariaLabel }, index) => (
        <button
          key={index}
          className={classNames('slider-button', className)}
          type="button"
          aria-label={ariaLabel}
        >
          <LeftArrow
            className={classNames('h-[40px] w-[40px]', {
              'rotate-180': id === 'next',
            })}
          />
        </button>
      ))}
    </div>
  );
};
