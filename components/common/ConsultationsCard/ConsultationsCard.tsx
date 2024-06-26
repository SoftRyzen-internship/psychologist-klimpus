import React from 'react';

import classNames from 'classnames';

import { ConsultationsCardProps } from './type';

import { Card } from '@/components/ui/Card';
import { SiteLink } from '@/components/ui/SiteLink';

import './ConsultationsCard.modules.css';

export const ConsultationsCard: React.FC<ConsultationsCardProps> = ({
  className = '',
  item,
}) => {
  const { text, textCard, format, frequency, duration, linkText, href } = item;

  const info = [format, frequency, duration];

  const classPlate = classNames(
    className,
    ' inline-block rounded-[20px] bg-plashka px-4 py-[6px] font-roboto text-xs font-medium leading-[1.35] text-mainBlack md:text-sm md:leading-[1.35]',
  );

  return (
    <Card
      isConsultations
      className={classNames('consultationsCard xl:h-[430px]', className)}
    >
      <h3 className="mb-4 font-roboto text-xl font-semibold leading-[1.35] text-accent md:text-[22px] xl:w-[215px] xl:text-2xl xl:leading-[1.35]">
        {text}
      </h3>
      <p className="mb-6 font-roboto text-base font-normal leading-[1.35] text-gray md:text-sm md:leading-[1.5] xl:text-base">
        {textCard}
      </p>

      <ul className="inline-flex flex-wrap gap-2">
        {info.map((item, index) => {
          return (
            <li key={index} className={classPlate}>
              <p>{item}</p>
            </li>
          );
        })}
      </ul>
      <SiteLink
        href={href}
        linkType="link"
        isAccent
        className="mb-4 mt-6 inline-flex w-auto text-base font-normal leading-[1.35] transition xl:opacity-0"
      >
        {linkText}
      </SiteLink>
    </Card>
  );
};
