'use client';

import React from 'react';

import Image from 'next/image';

import classNames from 'classnames';

import { CommunityCardProps } from './types';

import { Card } from '../../ui/Card';

export const CommunityCard: React.FC<CommunityCardProps> = ({
  data,
  className,
}) => {
  return (
    <div className="md:max-w-[346px] xl:max-w-[289px]">
      <Card
        isCommunities
        className={classNames(
          'mb-2 flex justify-center md:mb-4 xl:mb-6',
          className,
        )}
      >
        <Image src={data.logo} alt={data.text} width={133} height={133} />
      </Card>
      <p className="textBold flex text-darkBlue md:leading-[1.35] mdOnly:max-w-[280px]">
        {data.text}
      </p>
    </div>
  );
};
