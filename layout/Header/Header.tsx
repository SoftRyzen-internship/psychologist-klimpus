'use client';
import React, { useState } from 'react';

import { NavBar } from '@/components/common/NavBar';

import { BurgerMenu } from '@/components/common/BurgerMenu';

import { Logo } from '@/components/ui/Logo';

import Burger from '@/public/icons/burger.svg';

import common from '@/data/common.json';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className="w-full py-9">
      <div className="container flex items-center xl:gap-24 notXL:justify-between">
        <Logo />
        <div className="hidden xl:flex">
          <NavBar />
        </div>
        <button type="button" className="notXL:hidden">
          <p className="text-cardTextLg relative inline-block font-roboto text-accent after:absolute after:left-[80px] after:top-0 after:h-[25px] after:w-[25px] after:content-arrowDiagonal hover:text-hoverAccent focus:text-hoverAccent active:text-clickAccent">
            Контакти
          </p>
        </button>
        <button
          type="button"
          className="block transition hover:scale-110 xl:hidden"
          aria-label={common.layout['aria-label'].burger}
          onClick={handleOpen}
        >
          <Burger width={32} height={32} />
        </button>
        {isOpen && <BurgerMenu isOpen={isOpen} onClose={handleClose} />}
      </div>
    </header>
  );
};
