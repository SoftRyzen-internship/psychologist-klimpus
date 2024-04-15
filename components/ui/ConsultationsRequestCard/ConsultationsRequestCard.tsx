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
    'rounded-[20px] smOnly:max-w-[428px] md:w-[255px] xl:w-[237px] relative',
  );

  return (
    <div className={styles}>
      {isMobile && (
        <Image
          width={428}
          height={300}
          src={images.mobImage}
          alt={requestText}
        />
      )}
      {isTablet && (
        <Image
          width={255}
          height={327}
          src={images.tabImage}
          alt={requestText}
        />
      )}
      {isDesktop && (
        <Image
          width={237}
          height={327}
          src={images.pcImage}
          alt={requestText}
        />
      )}
      <p className="cardTextSm absolute bottom-4 left-5 text-white md:leading-[1.5] smOnly:leading-[1.35]">
        {requestText}
      </p>
    </div>
  );
};
