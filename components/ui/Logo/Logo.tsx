import React from 'react';
import Link from 'next/link';

import { LogoProps } from './type';

import data from '@/data/common.json';

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
  const { logo } = data.header;

  return (
    <Link
      href="/"
      onClick={onClick}
      className="active:clickAccent transition-color cursor-pointer font-raleway text-base font-bold leading-[1.35] text-mainBlack outline-none duration-300 ease-out hover:text-accent focus:text-accent focus-visible:text-accent  md:text-lg xl:text-xl
      "
    >
      {logo}
    </Link>
  );
};
