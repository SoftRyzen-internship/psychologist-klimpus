'use client';
import React from 'react';

import { Button } from './Button';

import common from '@/data/common.json';

interface ButtonProps {}

const contacts = 'contacts';

export const ButtonTestComponent: React.FC<ButtonProps> = () => {
  return (
    <>
      <Button isLink={true} to={contacts}>
        {common.buttonsText.v1}
      </Button>
      <Button isLink={false} onClick={() => console.log('submit')}>
        Submit
      </Button>
      <div className="h-[1000px]"></div>
      <section id={contacts} className="outline-dashed">
        {contacts}
      </section>
    </>
  );
};
