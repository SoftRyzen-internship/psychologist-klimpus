import React from 'react';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

import { ButtonLinkProps } from './types';

import ArrowRightSm from '@/public/icons/arrowRightSm.svg';
import ArrowDiagonal from '@/public/icons/arrowDiagonal.svg';

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  isLink,
  content,
  onClick,
  href,
}) => {
  const styles =
    'group cursor-pointer block text-cardTextLg flex gap-2 font-roboto text-accent hover:text-hoverAccent focus:text-hoverAccent focus:text-hoverAccent active:text-clickAccent';

  const iconStyles =
    'h-[25px] w-[25px] group-hover:fill-hoverAccent group-active:fill-clickAccent ';

  return isLink ? (
    href === '/contacts' ? (
      <ScrollLink
        to={href.slice(1)}
        spy={true}
        smooth={true}
        duration={1500}
        className={styles}
      >
        <>
          <p>{content}</p>
          <ArrowDiagonal className={iconStyles} />
        </>
      </ScrollLink>
    ) : (
      <Link href={href!} className={styles}>
        <>
          <p>{content}</p>
          <ArrowRightSm className={iconStyles} />
        </>
      </Link>
    )
  ) : (
    <button type="button" onClick={onClick} className={styles}>
      <p>{content}</p>
      <ArrowRightSm className={iconStyles} />
    </button>
  );
};
