import React from 'react';

import classNames from 'classnames';
import { performRequest } from '@/lib/datocms';
import { consultancyPlatesQuery } from '@/lib/queries/consultancyPlatesQuery';

import { ConsultationsCardProps, Plate } from './type';

import { Card } from '@/components/ui/Card';
import { SiteLink } from '@/components/ui/SiteLink';

export const ConsultationsCard: React.FC<ConsultationsCardProps> = async ({
  className = '',
  card,
}) => {
  const { data } = await performRequest({ query: consultancyPlatesQuery });
  const plates = data.consultancyPlate.plates;

  const { id, title, text, linkText, href } = card;

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
        {title}
      </h3>
      <p className="mb-6 font-roboto text-base font-normal leading-[1.35] text-gray md:text-sm md:leading-[1.5] xl:text-base">
        {text}
      </p>
      {id === 1 && (
        <ul>
          {plates.map((plate: Plate, index: number) => {
            const { id, format, frequency, duration } = plate;
            if (index === 0) {
              return (
                <li key={id} className="inline-flex flex-wrap gap-2">
                  <p className={classPlate}>{format}</p>
                  <p className={classPlate}>{frequency}</p>
                  <p className={classPlate}>{duration}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
      {id === 2 && (
        <ul>
          {plates.map((plate: Plate, index: number) => {
            const { id, format, frequency, duration } = plate;
            if (index === 1) {
              return (
                <li key={id} className="inline-flex flex-wrap gap-2">
                  <p className={classPlate}>{format}</p>
                  <p className={classPlate}>{frequency}</p>
                  <p className={classPlate}>{duration}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
      {id === 3 && (
        <ul>
          {plates.map((plate: Plate, index: number) => {
            const { id, format, frequency, duration } = plate;
            if (index === 2) {
              return (
                <li key={id} className="inline-flex flex-wrap gap-2">
                  <p className={classPlate}>{format}</p>
                  <p className={classPlate}>{frequency}</p>
                  <p className={classPlate}>{duration}</p>
                </li>
              );
            }
            return null;
          })}
        </ul>
      )}
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
