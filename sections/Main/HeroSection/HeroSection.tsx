import React from 'react';

import Image from 'next/image';

import { SiteLink } from '@/components/ui/SiteLink';

import data from '@/data/common.json';

export const HeroSection = () => {
  return (
    <section className="pb-[27px] pt-10 md:pb-10 md:pt-12 xl:pb-[50px] xl:pt-14">
      <div className="container">
        <div className="flex flex-col md:flex-row md:gap-[34px] xl:gap-[69px] mdOnly:items-center">
          <h1 className="mb-3 inline font-raleway text-large font-semibold uppercase text-mainBlack md:hidden">
            {data.hero.title3}
          </h1>
          <Image
            className="aspect-video h-[300px] w-full rounded-[20px] object-cover object-top md:h-[300px] md:w-[328px] xl:h-[584px] xl:w-[598px] smOnly:mb-4"
            src={data.hero.src}
            width={598}
            height={584}
            priority
            alt={data.hero.alt}
          />
          <div className="flex flex-col justify-center">
            <div className="relative hidden flex-col md:flex md:w-[346px] xl:w-[495px]">
              <h1 className="font-raleway text-large font-semibold uppercase text-mainBlack md:text-[50px] xl:text-[86px] xl:text-extraLarge mdOnly:mb-[13px]">
                {data.hero.title1}
              </h1>
              <h2 className="static font-raleway text-large font-semibold uppercase text-mainBlack md:absolute md:right-[15px] md:top-[69px] md:text-right md:text-[50px] xl:right-[-50px] xl:top-[90px] xl:text-[86px] xl:text-extraLarge">
                {data.hero.title2}
              </h2>
            </div>
            <ul className="mb-3 ml-[25px] list-disc gap-1 font-roboto text-xs font-normal uppercase leading-[1.5] text-accent md:mb-[70px] md:text-sm md:leading-[1.5] xl:mb-[50px] xl:mt-[-10px] xl:text-base xl:leading-[1.5]">
              {data.hero.profession.map((profession, index) => (
                <li key={index}>{profession}</li>
              ))}
            </ul>
            <SiteLink
              linkType="scroll"
              href={data.url.form}
              isAccent={true}
              className="w-full rounded-[20px]"
            >
              {data.linksText.signUp}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
};
