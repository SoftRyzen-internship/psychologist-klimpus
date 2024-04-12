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
    'mb-4 font-raleway text-lg text-center md:text-xl leading-[1.35] xl:text-2xl font-semibold uppercase',
    type === 'success' ? 'text-mainBlack' : 'text-mainRed',
  );

  const textStyles = classNames(
    'whitespace-pre-line  text-center font-roboto text-[15px] md-text-base leading-[1.5] font-normal ',
    type === 'success'
      ? 'max-w-[232px] md:max-w-[352px]'
      : 'max-w-[267px] md:max-w-[285px]',
  );

  return (
    <div className="flex flex-col items-center">
      {type === 'success' ? (
        <SuccessIcon width={64} height={64} className="mb-6" />
      ) : (
        <ErrorIcon width={64} height={64} className="mb-6" />
      )}
      <p className={titleStyles}>{title}</p>
      <p className={textStyles}>{text}</p>
    </div>
  );
};
