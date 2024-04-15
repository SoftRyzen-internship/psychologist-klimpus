import React from 'react';

import Image from 'next/image';

import classNames from 'classnames';

import { CommunityCardProps } from './types';

import { Card } from '../Card';

export const CommunityCard: React.FC<CommunityCardProps> = ({
  data,
  className,
}) => {
  return (
    <div className="md:max-w-[346px] xl:max-w-[289px]">
      <Card
        isCommunities
        className={classNames('mb-2 flex justify-center md:mb-4', className)}
      >
        <Image src={data.logo} alt={data.text} width={133} height={133} />
      </Card>
      <span className="textBold">{data.text}</span>
    </div>
  );
};
