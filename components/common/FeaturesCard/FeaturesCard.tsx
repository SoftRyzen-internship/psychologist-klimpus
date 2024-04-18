import React from 'react';

import classNames from 'classnames';

import { FeaturesCardProps } from './type';

import { Card } from '@/components/ui/Card';
import './FeaturesCard.modules.css';

export const FeaturesCard: React.FC<FeaturesCardProps> = ({
  className = '',
  card,
}) => {
  const { title, text } = card;
  return (
    <Card isFeatures className={classNames('h-full', className)}>
      <h3 className="cardTitleLight mb-4 leading-[1.35] xl:leading-[1.35]">
        {title}
      </h3>
      <p className="cardTextLg leading-[1.35] xl:leading-[1.35]">{text}</p>
    </Card>
  );
};
