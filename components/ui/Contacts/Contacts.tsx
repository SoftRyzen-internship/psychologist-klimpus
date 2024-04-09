import Link from 'next/link';
import React from 'react';

import classNames from 'classnames';

import Email from '@/public/icons/mail.svg';
import Tel from '@/public/icons/phone.svg';
import EmailRed from '@/public/icons/mailRed.svg';
import TelRed from '@/public/icons/phoneRed.svg';

import common from '@/data/common.json';

type IContacts = {
  className?: string;
  isFooter?: boolean;
};

export const Contacts = ({ className = '', isFooter }: IContacts) => {
  const { email, tel } = common;

  const classLink = classNames(
    className,
    'transition py-[3px] md:py-[1.5px] xl:py-0 font-roboto text-mainBlack text-sm md:text-base xl:text-lg leading-[1.35] md:leading-[1.35] xl:leading-[1.35] font-normal inline-flex items-center gap-2',
    {
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
            <EmailRed className="h-[25px] w-[25px]" />
          )}
          <span>{email}</span>
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
            <TelRed className="h-[25px] w-[25px]" />
          )}
          <span>{tel}</span>
        </Link>
      </li>
    </ul>
  );
};
