import React from 'react';

import Link from 'next/link';

import classNames from 'classnames';

import { ButtonLinkProps } from './types';

import ArrowRightSm from '@/public/icons/arrowRightSm.svg';
import ArrowDiagonal from '@/public/icons/arrowDiagonal.svg';

import data from '@/data/common.json';

export const ButtonLink: React.FC<ButtonLinkProps> = ({ onClick, href }) => {
  const styles = classNames(
    'group block text-cardTextLg flex gap-2 font-roboto text-accent hover:text-hoverAccent focus:text-hoverAccent focus:text-hoverAccent active:text-clickAccent',
    {
      'w-[186px] py-4 px-[13px] justify-end': href === '/contacts',
    },
    {
      'w-[162px] xl:w-[145px] py-[15px] justify-start': href !== '/contacts',
    },
  );

  const iconStyles =
    'h-[25px] w-[25px] group-hover:fill-hoverAccent group-active:fill-clickAccent ';

  return (
    <Link href={href} onClick={onClick} className={styles}>
      {href !== '/contacts' ? (
        <>
          <p>{data.buttonsText.v2}</p>
          <ArrowRightSm className={iconStyles} />
        </>
      ) : (
        <>
          <p>{data.buttonsText.v3}</p>
          <ArrowDiagonal className={iconStyles} />
        </>
      )}
    </Link>
  );
};
