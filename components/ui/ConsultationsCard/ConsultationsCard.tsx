import React from 'react';

import classNames from 'classnames';

import { ConsultationsCardProps } from './type';

import { Card } from '../Card';

export const ConsultationsCard: React.FC<ConsultationsCardProps> = ({
  className = '',
  card,
}) => {
  const { title, text, description } = card;
  return (
    <Card isConsultations className={classNames('h-auto', className)}>
      <h3 className="cardTitleLight mb-4 leading-[1.35] xl:leading-[1.35]">
        {title}
      </h3>
      <p className="cardTextLg leading-[1.35] xl:leading-[1.35]">{text}</p>
      <ul>
        {description.map(item => {
          const { id, descrText } = item;
          return <li key={id}>{descrText}</li>;
        })}
      </ul>
    </Card>
  );
};
