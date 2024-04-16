'use client';
import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';
import { useScreen } from '@/utils/useScreen';

import { ConsultationsRequestCardProps } from './type';

export const ConsultationsRequestCard: React.FC<
  ConsultationsRequestCardProps
> = ({ card, className }) => {
  const { isMobile, isTablet, isDesktop } = useScreen();

  const { images, requestText } = card;

  const styles = classNames(
    className,
    'rounded-[20px] smOnly:max-w-[428px] md:w-[225px] xl:w-[392] relative',
  );

  return (
    <div className={styles}>
      {isMobile && (
        <Image
          width={428}
          height={218}
          src={images.mobImage}
          alt={requestText}
        />
      )}
      {isTablet && (
        <Image
          width={225}
          height={301}
          src={images.tabImage}
          alt={requestText}
        />
      )}
      {isDesktop && (
        <Image
          width={392}
          height={525}
          src={images.pcImage}
          alt={requestText}
        />
      )}
      <p className="absolute left-4 top-4 font-roboto text-xl font-semibold leading-[1.35] text-white md:text-[22px] md:leading-[1.35]  xl:text-2xl xl:leading-[1.35]">
        {requestText}
      </p>
    </div>
  );
};
