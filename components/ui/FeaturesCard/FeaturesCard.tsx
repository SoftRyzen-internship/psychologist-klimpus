import React from 'react';

import classNames from 'classnames';

import { FeaturesCardProps } from './type';

import { Card } from '../Card';

export const FeaturesCard: React.FC<FeaturesCardProps> = ({
  className = '',
  card,
}) => {
  const { title, text } = card;
  return (
    <Card
      isFeatures
      isSlider={false}
      className={classNames('h-auto', className)}
    >
      <h3 className="cardTitleLight mb-4 leading-[1.35] xl:leading-[1.35]">
        {title}
      </h3>
      <p className="cardTextLg leading-[1.35] xl:leading-[1.35]">{text}</p>
    </Card>
  );
};
