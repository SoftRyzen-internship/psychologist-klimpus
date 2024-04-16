'use client';
import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';
import { useScreen } from '@/utils/useScreen';

import { ConsultationsRequestCardProps } from './type';

export const ConsultationsRequestCard: React.FC<
  ConsultationsRequestCardProps
> = ({ card, className }) => {
  const { isMobile, isTabletOrDesktop } = useScreen();

  const { images, requestText } = card;

  const styles = classNames(
    className,
    'rounded-[20px] smOnly:max-w-[428px] md:w-[225px] xl:w-[392px] relative',
  );

  return (
    <div className={styles}>
      {/* <Image
        className="aspect-video h-[168px] w-full rounded-[20px] object-cover object-top md:h-[301px] md:w-[225px] md:object-center xl:h-[525px] xl:w-[392px]"
        src={image}
        width={328}
        height={168}
        priority
        alt={requestText}
      /> */}
      {isMobile && (
        <Image
          width={428}
          height={218}
          src={images.mobImage}
          alt={requestText}
          className="rounded-[20px]"
        />
      )}
      {isTabletOrDesktop && (
        <Image
          width={392}
          height={525}
          src={images.tabdeskImage}
          alt={requestText}
          className="h-[301px] w-[225px] rounded-[20px] xl:h-[525px] xl:w-[392px]"
        />
      )}
      <p className="absolute left-4 top-4 font-roboto text-xl font-semibold leading-[1.35] text-white md:left-5 md:top-5 md:text-[22px] md:leading-[1.35] xl:left-8 xl:top-8 xl:text-2xl xl:leading-[1.35]">
        {requestText}
      </p>
    </div>
  );
};
