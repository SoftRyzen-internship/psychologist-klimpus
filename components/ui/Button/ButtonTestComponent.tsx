'use client';
import React from 'react';

import { Button } from './Button';

import { ButtonLink } from '../ButtonLink';

import common from '@/data/common.json';

interface ButtonProps {
  classNames?: string;
}

const contacts = 'contacts';

export const ButtonTestComponent: React.FC<ButtonProps> = () => {
  return (
    <div className="container">
      <p>Link button</p>
      <Button isLink={true} to={contacts} className="">
        {common.buttonsText.v1}
      </Button>
      <p>Submit button</p>
      <Button isLink={false} onClick={() => console.log('submit')} className="">
        {common.buttonsText.v1}
      </Button>
      <ButtonLink href="/" className="" />
      <ButtonLink href="/contacts" className="" />
      <div className="h-[600px]"></div>
      <section id={contacts} className="outline-dashed">
        {contacts}
      </section>
    </div>
  );
};
