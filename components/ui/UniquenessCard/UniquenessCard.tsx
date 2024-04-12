import React from 'react';

import classNames from 'classnames';

import { UniquenessCardProps } from './type';

import { Card } from '../Card';

export const UniquenessCard: React.FC<UniquenessCardProps> = ({
  total,
  text,
  className,
}) => {
  return (
    <Card
      isUniqueness
      className={classNames(
        'flex min-h-[98px] items-center justify-center gap-4 md:h-[159px] md:flex-col md:gap-5 xl:h-[182px] xl:gap-8',
        className,
      )}
    >
      <span className="font w-[124px] font-roboto text-[27px] font-medium leading-[1.5] text-accent md:w-[130px] md:text-[30px] xl:w-[275px] xl:text-[36px]">
        {total}
      </span>
      <p className="cardTextLg w-[124px] leading-[1.35] md:h-16 md:w-[130px] xl:w-[275px] xl:pr-20 xl:leading-[1.35]">
        {text}
      </p>
    </Card>
  );
};
