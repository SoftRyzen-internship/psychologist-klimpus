'use client';

import React from 'react';

import classNames from 'classnames';

import { ConsultationsCardProps } from './type';

import { Card } from '../Card';
import { SiteLink } from '../SiteLink';

export const ConsultationsCard: React.FC<ConsultationsCardProps> = ({
  className = '',
  card,
}) => {
  const { title, text, info, linkText, href } = card;
  return (
    <Card
      isConsultations
      className={classNames('consultationsCard xl:h-[430px]', className)}
    >
      <h3 className="mb-4 font-roboto text-xl font-semibold leading-[1.35] text-accent md:text-[22px] xl:w-[215px] xl:text-2xl xl:leading-[1.35]">
        {title}
      </h3>
      <p className="mb-6 font-roboto text-base font-normal leading-[1.35] text-gray md:text-sm md:leading-[1.5] xl:text-base">
        {text}
      </p>
      <ul className="mb-2 inline-flex flex-wrap gap-2">
        {info.map(item => {
          const { id, infoText } = item;
          return (
            <li
              key={id}
              className=" inline-block rounded-[20px] bg-plashka px-4 py-[6px] font-roboto text-xs font-medium leading-[1.35] text-mainBlack md:text-sm md:leading-[1.35]"
            >
              {infoText}
            </li>
          );
        })}
      </ul>
      <SiteLink
        href={href}
        linkType="link"
        isAccent
        className="inline-flex w-auto py-4 pr-[22px] text-base font-normal leading-[1.35] xl:hidden"
      >
        {linkText}
      </SiteLink>
    </Card>
  );
};
