import React from 'react';

import { RequestSectionProps } from './type';

import { ConsultationsRequestCard } from '@/components/common/ConsultationsRequestCard';
import { Slider } from '@/components/common/Slider';

import consultations from '@/data/consultations.json';

export const RequestSection: React.FC<RequestSectionProps> = ({
  consultation,
}) => {
  const { consultationSectionText } = consultations;

  return (
    <section className="section">
      <div className="container ">
        <p className="subtitleConsultation mb-6 w-[328px] uppercase md:mb-10 md:w-[436px] md:leading-[1.5] xl:mb-12 xl:w-[598px]">
          {consultationSectionText}
        </p>
        {consultation && (
          <ul className="flex flex-col gap-4 md:hidden">
            {consultation.imageCards.map(item => (
              <li key={item.id}>
                <ConsultationsRequestCard data={item} />
              </li>
            ))}
          </ul>
        )}
        {consultation && (
          <div className="hidden md:block">
            <Slider
              component={ConsultationsRequestCard}
              section={'requestsConsultancy'}
              data={consultation.imageCards}
            />
          </div>
        )}
      </div>
    </section>
  );
};
