'use client';
'use client';

import React from 'react';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import classNames from 'classnames';

import { SiteLinkProps } from './types';

import ArrowRightSm from '@/public/icons/arrowRightSm.svg';
import ArrowDiagonal from '@/public/icons/arrowDiagonal.svg';

export const SiteLink: React.FC<SiteLinkProps> = ({
  linkType,
  isAccent,
  href,
  children,
  className,
}) => {
  const styles =
    'group cursor-pointer block text-cardTextLg inline-flex gap-2 font-roboto text-accent hover:text-hoverAccent focus:text-hoverAccent focus:text-hoverAccent active:text-clickAccent';

  const accentStyles =
    'transition hover:bg-hoverAccent focus:bg-hoverAccent active:bg-clickAccent cardTextLg inline-block text-center cursor-pointer rounded-[12px] bg-accent px-12 py-5 text-white xl:leading-[1.35] w-full max-w-[448px] md:max-w-[320px] xl:max-w-[340px]';

  const iconStyles =
    'h-[25px] w-[25px] group-hover:fill-hoverAccent group-active:fill-clickAccent ';

  return linkType === 'scroll' ? (
    <ScrollLink
      to={href.slice(1)}
      spy={true}
      smooth={true}
      duration={1500}
      className={classNames(isAccent ? accentStyles : styles, className)}
    >
      {children}
      {!isAccent && <ArrowDiagonal className={iconStyles} />}
    </ScrollLink>
  ) : (
    <Link href={href} className={classNames(styles, className)}>
      {children}
      <ArrowRightSm className={iconStyles} />
    </Link>
  );
};
