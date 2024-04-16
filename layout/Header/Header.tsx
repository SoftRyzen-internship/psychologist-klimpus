'use client';
import React, { useState } from 'react';

import { NavBar } from '@/components/common/NavBar';

import { BurgerMenu } from '@/components/common/BurgerMenu';

import { Logo } from '@/components/common/Logo';

import { SiteLink } from '@/components/ui/SiteLink';

import Burger from '@/public/icons/burger.svg';

import common from '@/data/common.json';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <header className="w-full py-3 md:py-[18px] xl:py-9">
      <div className="container flex items-center xl:gap-24 notXL:justify-between">
        <Logo />
        <div className="hidden xl:flex">
          <NavBar />
        </div>
        <SiteLink
          href={common.url.contacts}
          linkType="scroll"
          isAccent={false}
          className="ml-auto notXL:hidden"
        >
          {common.linksText.contacts}
        </SiteLink>

        <button
          type="button"
          className="block transition hover:scale-110 xl:hidden"
          aria-label={common.layout['aria-label'].burger}
          onClick={() => setIsOpen(true)}
        >
          <Burger width={32} height={32} />
        </button>
        <BurgerMenu isOpen={isOpen} onClose={handleClose} />
      </div>
    </header>
  );
};
