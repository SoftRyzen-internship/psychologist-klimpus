import React from 'react';
import { EducationCardProps } from './types';

export const EducationCard: React.FC<EducationCardProps> = ({
  id,
  year,
  name,
}) => {
  return (
    <li key={id} className="mainText listItem flex gap-[31px] md:gap-5">
      <p className="text-accent">{year}</p>
      {name}
    </li>
  );
};
