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
  const { contacts } = common;

  const classLink = classNames(
    className,
    'transition font-roboto  text-sm md:text-base xl:text-lg leading-[1.35] md:leading-[1.35] xl:leading-[1.35] font-normal inline-flex items-center gap-2',
    {
      'contactsLink text-mainBlack active:text-clickAccent': !isFooter,
      'text-white active:text-accent xl:hover:text-rose xl:focus:text-rose xl:active:text-accent':
        isFooter,
    },
  );

  const classList = classNames(className, 'inline-flex flex-col', {
    'gap-6': !isFooter,
    'gap-3': isFooter,
  });

  return (
    <ul className={classList}>
      {contacts.map(contact => {
        const { name, value } = contact;
        return (
          <li key={name} className="h-[25px]">
            <Link
              href={name === 'email' ? `mailto:${value}` : `tel:${value}`}
              className={classLink}
            >
              {name === 'email' && (
                <Email
                  className={classNames('h-[25px] w-[25px]', {
                    'text-accent': !isFooter,
                  })}
                />
              )}
              {name === 'tel' && (
                <Tel
                  className={classNames('h-[25px] w-[25px]', {
                    'text-accent': !isFooter,
                  })}
                />
              )}
              <span className="py-[3px] md:py-[2px] xl:py-0">{value}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
