// import Image from 'next/image';
// import { ReactNode } from 'react';
// import { useState, useEffect } from 'react';

// import classNames from 'classnames';
// import { useMediaQuery } from 'react-responsive';

// import { Container } from '@/components/Container';
// import { NavBar } from '@/components/NavBar';

// import CloseIcon from '@/public/icons/close.svg';

// import { useCustomHook } from '@/hooks/useCustomHook';

// import data from '@/data/common.json';

// import { Type } from './types';

// import css from './TestComponent.module.css';

// interface ITestComponent = {
//   children: ReactNode;
//   className?: string;
// };

// export const TestComponent = ({ children, className = '' }: ITestComponent) => {
//   return <div className={classNames('container', className)}>{children}</div>;
// };

import { Contacts } from '@/components/ui/Contacts';
import { Icons } from '@/components/ui/Icons';
import { SectionTitle } from '@/components/ui/SectionTitle';

import data from '@/data/common.json';

import { Socials } from '@/components/ui/Socials';

import React from 'react';

export const TestComponent = () => {
  const { logo } = data.header;

  return (
    <div>
      <SectionTitle>{logo}</SectionTitle>
      <Icons />
      <Socials />
      <Contacts />
      <div className="bg-black">
        <Contacts isFooter />
      </div>
    </div>
  );
};
