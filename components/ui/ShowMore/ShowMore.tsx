'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { Button } from '@/components/ui/Button';

import data from '@/data/myHistory.json';

import { IShowMoreProps } from './types';

export const ShowMore: React.FC<IShowMoreProps> = ({ showText, hideText }) => {
  const { secondPhoto, secondPhotoAlt, secondText, thirdText } = data;

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`transition-all duration-500 ${isOpen ? 'max-h-[1000px] opacity-100 ease-in' : 'max-h-0 opacity-0 ease-out'} overflow-hidden md:hidden xl:gap-[123px] mdOnly:justify-between `}
      >
        <Image
          src={secondPhoto}
          alt={secondPhotoAlt}
          width={495}
          height={450}
          className="mb-4 mdOnly:h-[390px] mdOnly:w-[306px]"
        />
        <div className="flex-col md:flex md:w-[346px] xl:w-[587px]">
          <p className=" mb-3 font-roboto text-[15px] font-normal leading-[1.5]  md:text-[18px] xl:mb-9 xl:text-[20px]">
            {secondText}
          </p>
          <p className=" mb-3 font-roboto text-[15px] font-normal leading-[1.5] md:mb-8  md:text-[18px] xl:mb-9 xl:text-[20px]">
            {thirdText}
          </p>
        </div>
      </div>
      <Button
        type="button"
        onClick={toggleOpen}
        className="mb-2 py-4 pr-[58px] md:hidden"
      >
        {isOpen ? hideText : showText}
      </Button>
    </>
  );
};
