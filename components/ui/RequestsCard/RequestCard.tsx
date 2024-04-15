'use client';
import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';
import { useScreen } from '@/utils/useScreen';

import { RequestCardProps } from './type';

export const RequestCard: React.FC<RequestCardProps> = ({
  data,
  className,
}) => {
  const { isMobile, isTablet, isDesktop } = useScreen();

  const { images, requestSet, alt } = data;

  const styles = classNames(
    className,
    'rounded-[20px] smOnly:max-w-[428px] md:w-[255px] xl:w-[237px] relative',
  );

  return (
    <div className={styles}>
      {isMobile && (
        <Image width={428} height={300} src={images.mobImage} alt={alt} />
      )}
      {isTablet && (
        <Image width={255} height={327} src={images.tabImage} alt={alt} />
      )}
      {isDesktop && (
        <Image width={237} height={327} src={images.pcImage} alt={alt} />
      )}
      <ul className="absolute bottom-4 left-5 flex flex-wrap gap-2">
        {requestSet.map(item => (
          <li key={item}>
            <p className="cardTextSm rounded-[20px] bg-plashkaBlack px-3 py-1 text-white md:leading-[1.5] smOnly:leading-[1.35]">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
