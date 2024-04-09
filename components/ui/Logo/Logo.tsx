import React from 'react';
import Link from 'next/link';

import { LogoProps } from './type';

// import data from '@/data/common.json';

export const Logo: React.FC<LogoProps> = ({ onClick }) => {
  // const { logo } = data.layout;

  return (
    <Link
      href="/"
      onClick={onClick}
      className="focus-visible:text cursor-pointer font-raleway text-base font-bold leading-[1.35] text-mainBlack outline-none transition hover:text-accent focus:text-accent  md:text-lg xl:text-xl
      "
    >
      {/* {logo.label} */}
      Ірина Климпуш
    </Link>
  );
};
