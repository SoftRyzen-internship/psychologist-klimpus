import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';

import { ConsultationsRequestCardProps } from './type';

export const ConsultationsRequestCard: React.FC<
  ConsultationsRequestCardProps
> = ({ data, className }) => {
  const { images, requestText } = data;

  const styles = classNames(
    className,
    'rounded-[20px] md:w-[225px] xl:w-[392px] relative',
  );

  return (
    <div className={styles}>
      <Image
        width={448}
        height={218}
        src={images.mobImage}
        alt={requestText}
        priority
        className="rounded-[20px] md:hidden"
      />
      <Image
        width={392}
        height={525}
        src={images.tabdeskImage}
        alt={requestText}
        priority
        className="rounded-[20px] md:h-[301px] md:w-[225px] xl:h-[525px] xl:w-[392px] smOnly:hidden"
      />
      <p className="absolute left-4 top-4 font-roboto text-xl font-semibold leading-[1.35] text-white md:left-5 md:top-5 md:text-[22px] md:leading-[1.35] xl:left-8 xl:top-8 xl:text-2xl xl:leading-[1.35]">
        {requestText}
      </p>
    </div>
  );
};
