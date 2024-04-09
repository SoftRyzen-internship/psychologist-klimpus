import React from 'react';
import { Link } from 'react-scroll';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  isLink,
  children,
  to,
  onClick,
}) => {
  const buttonStyles =
    'block cursor-pointer rounded-[12px] bg-[#CA1246] px-12 py-5 text-base leading-[21.6px] text-[#FCFCFC]';
  return isLink && to ? (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={1500}
      className={buttonStyles}
    >
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
};
