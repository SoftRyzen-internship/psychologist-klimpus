'use client';
import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

import { Button } from './Button';

import common from '@/data/common.json';

interface ButtonProps {}

const contacts = 'contacts';

export const ButtonTestComponent: React.FC<ButtonProps> = () => {
  return (
    <>
      <ScrollLink
        to="contacts"
        spy={true}
        smooth={true}
        duration={1500}
        className="cursor-pointer"
      >
        ScrollLink
      </ScrollLink>
      <Button isLink={true} to={contacts}>
        {common.buttonsText.v1}
      </Button>
      <div className="h-[600px]"></div>
      <section id={contacts} className="outline-dashed">
        {contacts}
      </section>
    </>
  );
};
