'use client';

import React from 'react';

import classNames from 'classnames';

import { Card } from '@/components/ui/Card';

import { FeedbackCardProps } from './type';

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  data,
  section,
}) => {
  const { text, owner } = data;

  const cardStyles = classNames('flex h-[288px] flex-col justify-between', {
    'md:h-[379px] xl:h-[385px]': section === 'reviews',
    'md:h-[270px] xl:h-[340px]': section === 'consultancyReviews',
  });

  return (
    <Card isReviews className={cardStyles}>
      <p className="cardTextLg xl:leading-[1.35]">{text}</p>
      <p className="text-[12px] font-semibold leading-[1.5] text-accent md:text-[14px] xl:text-[16px]">
        {owner}
      </p>
    </Card>
  );
};
