'use client';
import React from 'react';
import Image from 'next/image';

import classNames from 'classnames';

import { RequestCardProps } from './type';

export const RequestCard: React.FC<RequestCardProps> = ({
  data,
  className,
}) => {
  const { image, requestSet, alt } = data;
  console.log(image);

  const styles = classNames(
    className,
    'rounded-[20px] md:w-[255px] xl:w-[237px] relative',
  );

  return (
    <div className={styles}>
      <Image
        className="width={428} height={300} rounded-[20px] object-cover object-[center] md:h-[327px] md:w-[255px] md:object-top xl:h-[327px] xl:w-[237px] smOnly:aspect-[1.426]"
        src={image}
        width={765}
        height={981}
        priority
        alt={alt}
      />
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
