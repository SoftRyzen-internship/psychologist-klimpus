import React from 'react';

import SoftRyzenIcon from '@/public/icons/logoSoft.svg';
import GoItIcon from '@/public/icons/logoGo.svg';

import { FooterItemProps } from './types';

export const FooterItem: React.FC<FooterItemProps> = ({
  name,
  href,
  ariaL,
}) => {
  return (
    <li key={name} className="p-3 first:pl-0">
      <a
        href={href}
        aria-label={ariaL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className=" text-white transition hover:text-rose focus-visible:text-accent active:text-accent"
      >
        {name === 'goit' && <GoItIcon className="h-10 w-[92px] pl-0" />}
        {name === 'softryzen' && <SoftRyzenIcon className=" h-10 w-[149px]" />}
      </a>
    </li>
  );
};
