'use client';

import React from 'react';
import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';

import { ConsultationsRequestCardProps } from './type';

export const ConsultationsRequestCard: React.FC<
  ConsultationsRequestCardProps
> = ({ data, className }) => {
  const { images, requestText, alt } = data;

  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  const mobileStyles = isMobile
    ? 'before:absolute before:left-0 before:top-0 before:z-10 before:h-[40%] before:w-full before:bg-gradient-to-b from-black/65 to-transparent before:rounded-[20px]'
    : '';

  const styles = classNames(
    className,
    'rounded-[20px] md:w-[225px] xl:w-[392px] relative',
    mobileStyles,
  );

  return (
    <div className={styles}>
      <Image
        width={392}
        height={525}
        src={images.tabdeskImage}
        alt={alt}
        priority
        className="aspect-video h-[218px] w-full rounded-[20px] object-cover object-center md:h-[301px] md:w-[224px] xl:h-[525px] xl:w-[392px]"
      />
      <p className="absolute left-4 top-4 z-20 font-roboto text-xl font-semibold leading-[1.35] text-white md:left-5 md:top-5 md:text-[22px] md:leading-[1.35] xl:left-8 xl:top-8 xl:text-2xl xl:leading-[1.35]">
        {requestText}
      </p>
    </div>
  );
};
