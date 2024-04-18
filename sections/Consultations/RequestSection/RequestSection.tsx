'use client';
import React from 'react';

import { RequestSectionProps } from './type';

import { ConsultationsRequestCard } from '@/components/ui/ConsultationsRequestCard';
import { Slider } from '@/components/common/Slider';

import consultations from '@/data/consultations.json';
import { useScreen } from '@/utils/useScreen';

export const RequestSection: React.FC<RequestSectionProps> = ({
  consultation,
}) => {
  const { consultationSectionText } = consultations;
  const { isMobile } = useScreen();

  return (
    <section className="section">
      <div className="container ">
        <p className="subtitleConsultation mb-6 w-[328px] uppercase md:mb-10 md:w-[436px] md:leading-[1.5] xl:mb-12 xl:w-[598px]">
          {consultationSectionText}
        </p>
        {consultation &&
          (isMobile ? (
            <ul className="flex flex-col gap-4">
              {consultation.imageCards.map(item => (
                <li key={item.id}>
                  <ConsultationsRequestCard data={item} />
                </li>
              ))}
            </ul>
          ) : (
            <Slider
              component={ConsultationsRequestCard}
              section={'requestsConsultancy'}
              data={consultation.imageCards}
            />
          ))}
      </div>
    </section>
  );
};
