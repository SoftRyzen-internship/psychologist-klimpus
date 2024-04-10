import Link from 'next/link';
import React from 'react';

import classNames from 'classnames';

import { ContactsProps } from './type';

import Email from '@/public/icons/mail.svg';
import Tel from '@/public/icons/phone.svg';

import common from '@/data/common.json';

export const Contacts: React.FC<ContactsProps> = ({
  className = '',
  isFooter,
}) => {
  const { email, tel } = common;

  const classLink = classNames(
    className,
    'transition font-roboto  text-sm md:text-base xl:text-lg leading-[1.35] md:leading-[1.35] xl:leading-[1.35] font-normal inline-flex items-center gap-2',
    {
      'contactsLink text-mainBlack active:text-clickAccent': !isFooter,
      'text-white active:text-accent xl:hover:text-rose xl:focus:text-rose ':
        isFooter,
    },
  );

  const classList = classNames(className, 'inline-flex flex-col', {
    'gap-6': !isFooter,
    'gap-3': isFooter,
  });

  return (
    <ul className={classList}>
      <li className="h-[25px]">
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={classLink}
        >
          {isFooter ? (
            <Email className="h-[25px] w-[25px]" />
          ) : (
            <span className="text-accent">
              <Email className="h-[25px] w-[25px]" />
            </span>
          )}
          <span className="py-[3px] md:py-[2px] xl:py-0">{email}</span>
        </Link>
      </li>
      <li className="h-[25px]">
        <Link
          href={`tel:${tel}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={classLink}
        >
          {isFooter ? (
            <Tel className="h-[25px] w-[25px]" />
          ) : (
            <span className="text-accent">
              <Tel className="h-[25px] w-[25px]" />
            </span>
          )}
          <span className="py-[3px] md:py-[2px] xl:py-0">{tel}</span>
        </Link>
      </li>
    </ul>
  );
};
