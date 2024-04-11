import React from 'react';

import { Card } from '@/components/ui/Card';

import { FeedbackCardProps } from './type';

export const FeedbackCard: React.FC<FeedbackCardProps> = ({ data }) => {
  const { text, owner } = data;

  return (
    <Card isReviews>
      <p className="cardTextLg xl:leading-[1.35]">{text}</p>
      <p>{owner}</p>
    </Card>
  );
};
