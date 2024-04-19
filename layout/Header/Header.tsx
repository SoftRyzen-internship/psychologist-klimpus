'use client';
import React, { useState } from 'react';

import { NavBar } from '@/components/common/NavBar';

import { BurgerMenu } from '@/components/common/BurgerMenu';

import { Logo } from '@/components/common/Logo';

import { SiteLink } from '@/components/ui/SiteLink';

import Burger from '@/public/icons/burger.svg';

import data from '@/data/common.json';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="w-full py-4 md:py-5 xl:py-9">
      <div className="container flex items-center xl:gap-24 notXL:justify-between">
        <Logo />
        <div className="hidden xl:flex">
          <NavBar onClose={handleClose} />
        </div>
        <SiteLink
          linkType="scroll"
          href={data.url.footer}
          isAccent={false}
          className="ml-auto notXL:hidden"
        >
          {data.linksText.contacts}
        </SiteLink>

        <button
          type="button"
          className="block transition hover:scale-110 xl:hidden"
          aria-label={data.layout['aria-label'].burger}
          onClick={() => setIsOpen(true)}
        >
          <Burger width={24} height={24} />
        </button>
        <BurgerMenu isOpen={isOpen} onClose={handleClose} />
      </div>
    </header>
  );
};
