import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { ConsultationProps } from './types';
import { SectionTitle } from '@/components/common/SectionTitle';
import { SiteLink } from '@/components/ui/SiteLink';
import data from '@/data/common.json';
export const ConsultationsHeroSections = ({
  consultation,
  className = '',
}: ConsultationProps) => {
  const { format, frequency, duration } = consultation || {};

  const info = [format, frequency, duration];

  const classPlate = classNames(
    className,
    ' inline-block rounded-[20px] bg-plashka px-4 py-[6px] font-roboto text-xs font-medium leading-[1.35] text-mainBlack md:text-sm md:leading-[1.35]',
  );
  return (
    <section className="w-full pb-5 pt-10 md:pb-10 md:pt-12 xl:pb-[50px] xl:pt-14">
      <div className="container">
        {consultation && (
          <div className="flex flex-col">
            <div className="flex flex-col pb-8 md:flex-row md:justify-between md:pb-8 xl:pb-12">
              <div className="flex w-full flex-col justify-between md:w-[346px] xl:w-[598px]">
                <SectionTitle className="smOnly:mb-4">
                  {consultation.text}
                </SectionTitle>
                <ul className="hidden flex-wrap gap-[10px] md:flex md:gap-[10px] smOnly:mb-4">
                  {info.map((item, index) => {
                    return (
                      <li key={index} className={classPlate}>
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="xl: flex w-full flex-col md:w-[346px] xl:w-[495px]">
                <p className="mainText flex pb-6">{consultation.description}</p>
                <ul className="flex flex-wrap gap-[10px] md:hidden md:gap-5 smOnly:mb-4">
                  {info.map((item, index) => {
                    return (
                      <li key={index} className={classPlate}>
                        <p>{item}</p>
                      </li>
                    );
                  })}
                </ul>
                <SiteLink
                  linkType="scroll"
                  href={data.url.form}
                  isAccent={true}
                  className="w-full rounded-[20px] md:w-[185px] xl:w-[289px]"
                >
                  {data.btnText}
                </SiteLink>
              </div>
            </div>
            <Image
              className="aspect-video h-[184px] w-full rounded-[20px] object-cover object-top md:h-[292px] md:w-[708px] xl:h-[502px] xl:w-[1219px] smOnly:mb-4"
              src={consultation.imgSrc}
              width={1219}
              height={502}
              priority
              alt={consultation.alt}
            />
          </div>
        )}
      </div>
    </section>
  );
};
