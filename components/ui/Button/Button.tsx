import React from 'react';

import classNames from 'classnames';

import ArrowRightSm from '@/public/icons/arrowRightSm.svg';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className,
}) => {
  const styles =
    'inline-block group cursor-pointer block text-cardTextLg flex gap-2 font-roboto text-accent hover:text-hoverAccent focus:text-hoverAccent focus:text-hoverAccent active:text-clickAccent';

  const accentStyles =
    'transition hover:bg-hoverAccent focus:bg-hoverAccent active:bg-clickAccent cardTextLg inline-block text-center cursor-pointer rounded-[12px] bg-accent px-12 py-5 text-white xl:leading-[1.35] w-full max-w-[448px] md:max-w-[320px] xl:max-w-[340px]';

  const iconStyles =
    'h-[25px] w-[25px] group-hover:fill-hoverAccent group-active:fill-clickAccent ';

  const buttonStyles = classNames(
    type === 'submit' ? accentStyles : styles,
    className,
  );

  return (
    <button className={buttonStyles} onClick={onClick} type={type}>
      {children}
      {type === 'button' && <ArrowRightSm className={iconStyles} />}
    </button>
  );
};
