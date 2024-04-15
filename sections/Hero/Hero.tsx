'use client';

import React from 'react';
import Image from 'next/image';
import { SiteLink } from '../../components/ui/SiteLink';
import data from '@/data/common.json';

export const Hero = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-start md:flex-row md:items-center md:gap-[34px] xl:gap-[69px]">
          <Image
            className="aspect-video h-[300px] w-full rounded-[20px] object-cover object-top md:h-[300px] md:w-[328px] xl:h-[584px] xl:w-[598px] smOnly:mb-4"
            src={data.hero.src}
            width={598}
            height={584}
            priority
            alt={data.hero.alt}
          />
          <div className="flex-1 flex-col md:flex-1">
            <div className="relative hidden flex-col md:flex md:w-[346px] xl:w-[495px]">
              <h1 className="font-raleway text-large font-semibold uppercase text-mainBlack md:text-[50px] xl:text-[86px] xl:text-extraLarge mdOnly:mb-[13px]">
                {data.hero.title1}
              </h1>
              <h2 className="static font-raleway text-large font-semibold uppercase text-mainBlack md:absolute md:right-[15px] md:top-[69px] md:text-right md:text-[50px] xl:right-[-50px] xl:top-[80px] xl:text-[86px] xl:text-extraLarge">
                {data.hero.title2}
              </h2>
            </div>
            <ul className="mb-3 ml-[25px] list-disc gap-1 font-roboto text-xs font-normal uppercase leading-[1.5] text-accent md:mb-[70px] md:text-sm xl:mb-[50px] xl:mt-[-18px] xl:text-base">
              {data.hero.profession.map((profession, index) => (
                <li key={index}>{profession}</li>
              ))}
            </ul>
            <SiteLink
              linkType="scroll"
              href={data.url.contacts}
              isAccent={true}
              className="w-full"
            >
              {data.linksText.signUp}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
};
