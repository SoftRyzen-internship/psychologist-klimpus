import React from 'react';

import classNames from 'classnames';

import { SocialsItem } from '../SocialsItem';

import { SocialsProps } from './types';

import data from '@/data/common.json';

export const Socials: React.FC<SocialsProps> = ({ className }) => {
  const { socials } = data;

  const socialsClasses = classNames('flex gap-8 bg-mainBlack', className);

  return (
    <div className="container">
      <ul className={socialsClasses}>
        {socials.map(item => (
          <SocialsItem
            key={item.name}
            name={item.name as 'instagram' | 'facebook' | 'telegram' | 'watsup'}
            href={item.path}
            ariaL={item.ariaLabel}
          />
        ))}
      </ul>
    </div>
  );
};
