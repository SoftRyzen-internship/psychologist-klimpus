import React from 'react';
import { Link } from 'react-scroll';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  isLink,
  children,
  to,
  onClick,
  className,
}) => {
  const buttonStyles =
    'transition hover:bg-hoverAccent focus:bg-hoverAccent active:bg-clickAccent cardTextLg inline-block text-center cursor-pointer rounded-[12px] bg-accent px-12 py-5 text-white xl:leading-[1.35] max-w-[448px] md:max-w-[320px] xl:max-w-[340px]';
  return isLink && to ? (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={1500}
      className={className ? `${buttonStyles} ${className}` : buttonStyles}
    >
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonStyles} type="submit">
      {children}
    </button>
  );
};
