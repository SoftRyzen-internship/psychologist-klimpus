import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  isLink,
  children,
  to,
  onClick,
}) => {
  return isLink && to ? (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      duration={1500}
      className="inline-block cursor-pointer rounded-[12px] bg-[#CA1246] px-12 py-5 text-base leading-[21.6px] text-[#FCFCFC]"
    >
      {children}
    </ScrollLink>
  ) : (
    <button
      onClick={onClick}
      className="inline-block cursor-pointer rounded-[12px] bg-[#CA1246] px-12 py-5 text-base leading-[21.6px] text-[#FCFCFC]"
    >
      {children}
    </button>
  );
};
