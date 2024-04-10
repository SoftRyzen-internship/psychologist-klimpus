import React from 'react';

import Instagram from '@/public/icons/instagram.svg';
import Facebook from '@/public/icons/facebook.svg';
import Telegram from '@/public/icons/telegram.svg';
import Watsup from '@/public/icons/watsup.svg';

import { SocialsItemProps } from './types';

export const SocialsItem: React.FC<SocialsItemProps> = ({
  name,
  href,
  ariaL,
}) => {
  return (
    <li key={name}>
      <a
        href={href}
        aria-label={ariaL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="text-white transition hover:text-rose focus:text-rose active:text-accent"
      >
        {name === 'instagram' && <Instagram className="h-8 w-8" />}
        {name === 'facebook' && <Facebook className="h-8 w-8" />}
        {name === 'telegram' && <Telegram className="h-8 w-8" />}
        {name === 'watsup' && <Watsup className="h-8 w-8" />}
      </a>
    </li>
  );
};
