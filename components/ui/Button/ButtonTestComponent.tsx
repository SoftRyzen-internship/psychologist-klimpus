'use client';
import React from 'react';

import { Button } from './Button';

import { SiteLink } from '../SiteLink';

import common from '@/data/common.json';

interface ButtonProps {
  classNames?: string;
}

const contacts = 'contacts';

export const ButtonTestComponent: React.FC<ButtonProps> = () => {
  return (
    <div className="container">
      <p>Scroll link</p>
      <SiteLink linkType="scroll" href={common.url.contacts} isAccent={true}>
        {common.linksText.signUp}
      </SiteLink>
      <p>Scroll link</p>
      <SiteLink linkType="scroll" href={common.url.contacts} isAccent={false}>
        {common.linksText.contacts}
      </SiteLink>
      <p>Link</p>
      <SiteLink linkType="link" href={common.url.individual} isAccent={false}>
        {common.linksText.inDetail}
      </SiteLink>
      <p>Submit button</p>
      <Button type="submit" onClick={() => console.log('submit')}>
        {common.buttonsText.signUp}
      </Button>
      <p>Show more button</p>
      <Button type="button" onClick={() => console.log('more')}>
        {common.buttonsText.more}
      </Button>
      <p>Hide button</p>
      <Button type="button" onClick={() => console.log('hide')}>
        {common.buttonsText.hide}
      </Button>

      <div className="h-[600px]"></div>
      <section id={contacts} className="outline-dashed">
        {contacts}
      </section>
    </div>
  );
};
