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
          className=" mb-4 aspect-video h-[290px] w-full rounded-[20px] object-cover object-top"
        />
        <div className="flex-col md:flex md:w-[346px] xl:w-[587px]">
          <p className="mainText mb-3 md:leading-[1.5] xl:mb-9 xl:leading-[1.5]">
            {secondText}
          </p>
          <p className="mainText mb-8  md:leading-[1.5] xl:mb-9 xl:leading-[1.5]">
            {thirdText}
          </p>
        </div>
      </div>
      <Button type="button" onClick={toggleOpen} className="mb-6  md:hidden">
        {isOpen ? hideText : showText}
      </Button>
    </>
  );
};
