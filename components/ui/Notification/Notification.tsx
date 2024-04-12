import React from 'react';

import classNames from 'classnames';

import SuccessIcon from '@/public/icons/success.svg';
import ErrorIcon from '@/public/icons/error.svg';

import { NotificationProps } from './types';

import data from '@/data/common.json';

export const Notification = ({ type }: NotificationProps) => {
  const title =
    type === 'success'
      ? data.notification.success.title
      : data.notification.error.title;

  const text =
    type === 'success'
      ? data.notification.success.text
      : data.notification.error.text;

  const titleStyles = classNames(
    'mb-6 font-roboto text-2xl text-center md:text-[28px] md:leading-9 xl:text-4xl ',
    type === 'success' ? 'text-accent' : 'text-mainBlack',
  );

  return (
    <div className="flex flex-col items-center">
      {type === 'success' ? (
        <SuccessIcon width={64} height={64} className="mb-8 xl:mb-10" />
      ) : (
        <ErrorIcon width={64} height={64} className="mb-8 xl:mb-10" />
      )}
      <p className={titleStyles}>{title}</p>
      <p className="whitespace-pre-line text-center font-roboto text-sm xl:text-base">
        {text}
      </p>
    </div>
  );
};
