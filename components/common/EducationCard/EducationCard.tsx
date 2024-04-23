import React from 'react';
import classNames from 'classnames';

import { EducationCardProps } from './types';

export const EducationCard: React.FC<EducationCardProps> = ({
  id,
  year,
  name,
  className,
}) => {
  return (
    <li
      key={id}
      className={classNames(
        'mainText listItem flex gap-[31px] md:w-[403px] md:gap-5 md:leading-[1.5] xl:w-[598px] xl:pr-12 xl:leading-[1.35]',
        className,
      )}
    >
      <p className="text-accent">{year}</p>
      {name}
    </li>
  );
};
