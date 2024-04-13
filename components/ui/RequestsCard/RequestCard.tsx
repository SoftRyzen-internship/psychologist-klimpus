'use client';
import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';
import { useScreen } from '@/utils/useScreen';

import { RequestCardProps } from './type';

export const RequestCard: React.FC<RequestCardProps> = ({
  image,
  alt,
  requestSet,
  className,
}) => {
  const { isMobile, isTablet, isDesktop } = useScreen();

  const styles = classNames(
    className,
    'rounded-[20px] outline-dotted w-[328px] md:w-[255px] xl:w-[237px] relative',
  );

  return (
    <div className={styles}>
      {isMobile && <Image width={328} height={230} src={image.mob} alt={alt} />}
      {isTablet && <Image width={255} height={327} src={image.tab} alt={alt} />}
      {isDesktop && <Image width={237} height={327} src={image.pc} alt={alt} />}
      <ul className="absolute bottom-2 left-2 flex flex-wrap">
        {requestSet.map(item => (
          <li key={item}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
