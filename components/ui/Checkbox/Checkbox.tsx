import React from 'react';

import classNames from 'classnames';

import { CheckBoxProps } from './types';

import contacts from '@/data/contacts.json';

export const CheckBox: React.FC<CheckBoxProps> = ({
  register,
  errors,
  checkboxInput,
}) => {
  return (
    <>
      <label
        className={classNames(
          'flex cursor-pointer items-start gap-2 font-roboto text-xs font-normal leading-[1.35]',
          // errors?.checkbox ? 'text-error' : 'text-text',
        )}
      >
        <input
          type={contacts.checkBox.name}
          aria-label={contacts.checkBox.ariaLabel}
          {...register(contacts.checkBox.name, {
            required: true,
          })}
          className={classNames(
            'relative top-[2px] cursor-pointer appearance-none rounded-sm border-[1px] border-solid border-strokeForm p-1.5',
            checkboxInput
              ? 'border-mainRed bg-checkmark'
              : 'border-borderCheckbox bg-footerBcg',
            errors?.checkbox && 'border-mainRed',
          )}
        />
        {contacts.checkBox.label}
      </label>
    </>
  );
};
