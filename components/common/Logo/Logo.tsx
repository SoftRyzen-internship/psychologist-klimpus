import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import { LogoProps } from './type';

import data from '@/data/common.json';

export const Logo: React.FC<LogoProps> = ({ onClick, className = '' }) => {
  const { logo } = data.header;
  const logoStyles = classNames(
    'active:clickAccent transition-color cursor-pointer font-raleway text-base font-bold leading-[1.5] text-mainBlack duration-300 ease-out hover:text-accent focus:text-accent focus-visible:text-accent md:text-lg  md:leading-[1.5] xl:text-xl xl:leading-[1.5]',
    className,
  );

  return (
    <Link href="/" onClick={onClick} className={logoStyles}>
      {logo}
    </Link>
  );
};
