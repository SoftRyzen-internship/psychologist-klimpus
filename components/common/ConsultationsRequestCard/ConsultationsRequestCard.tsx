'use client';

import React from 'react';
import Image from 'next/image';

import { useViewportSize } from '@/utils/useScreen';
import classNames from 'classnames';

import { ConsultationsRequestCardProps } from './type';
import './ConsultationsRequestCard.modules.css';

export const ConsultationsRequestCard: React.FC<
  ConsultationsRequestCardProps
> = ({ data, className }) => {
  const { images, requestText, alt } = data;

  const { width } = useViewportSize();
  const isMobile = width && width < 767.98;
  const notMobile = width && width >= 768;

  const styles = classNames(
    className,
    'requestCard rounded-[20px] md:w-[225px] xl:w-[392px] relative',
  );

  return (
    <div className={styles}>
      {isMobile && (
        <Image
          width={428}
          height={218}
          src={images.mobImage}
          alt={alt}
          priority
          className="h-auto w-full rounded-[20px]"
        />
      )}
      {notMobile && (
        <Image
          width={392}
          height={525}
          src={images.tabdeskImage}
          alt={alt}
          priority
          className="h-[301px] w-[225px] rounded-[20px] xl:h-[525px] xl:w-[392px]"
        />
      )}

      <p className="absolute left-4 top-4 font-roboto text-xl font-semibold leading-[1.35] text-white md:left-5 md:top-5 md:text-[22px] md:leading-[1.35] xl:left-8 xl:top-8 xl:text-2xl xl:leading-[1.35]">
        {requestText}
      </p>
    </div>
  );
};
