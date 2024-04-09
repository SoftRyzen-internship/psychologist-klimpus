import Link from 'next/link';
import React from 'react';

import classNames from 'classnames';

import EmailIcon from '@/public/icons/email.svg';
import TelIcon from '@/public/icons/telegram.svg';

import common from '@/data/common.json';

type IContacts = {
  className?: string;
  isFooter?: boolean;
};

export const Contacts = ({ className = '', isFooter }: IContacts) => {
  const { email, tel } = common;

  const classname = classNames(className, 'text-black', {
    'text-white': isFooter,
  });

  return (
    <ul className={classname}>
      <li>
        <Link
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className=" active: xl:hover: xl:focus: inline-flex items-center gap-2 transition-all duration-300"
        >
          <EmailIcon className="h-[25px] w-[25px]" />
          <span className="active: xl:hover: xl:focus: transition-all duration-300">
            {email}
          </span>
        </Link>
      </li>
      <li>
        <Link
          href={`tel:${tel}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="active: xl:hover: xl:focus: inline-flex items-center gap-2 transition-all duration-300 xl:py-3"
        >
          <TelIcon className="h-[25px] w-[25px]" />
          <span className=" active: xl:hover: xl:focus: transition-all duration-300">
            {tel}
          </span>
        </Link>
      </li>
    </ul>
  );
};
