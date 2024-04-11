import React from 'react';

import classNames from 'classnames';

import { CheckBoxProps } from './types';

import form from '@/data/form.json';

export const CheckBox: React.FC<CheckBoxProps> = ({
  register,
  errors,
  checkboxInput,
}) => {
  return (
    <>
      <label className="flex cursor-pointer items-start gap-2 font-roboto text-xs font-normal leading-[1.35]">
        <input
          type={form.checkBox.name}
          aria-label={form.checkBox.ariaLabel}
          {...register(form.checkBox.name, {
            required: true,
          })}
          className={classNames(
            'relative top-[2px] cursor-pointer appearance-none rounded-sm border-[1px] border-solid p-1.5',
            checkboxInput
              ? 'border-strokeForm bg-checkmark '
              : 'focus:border-mainRed',
            errors?.checkbox && 'border-mainRed focus:border-mainRed',
          )}
        />
        {form.checkBox.label}
      </label>
    </>
  );
};
