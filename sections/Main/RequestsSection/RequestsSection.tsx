import React from 'react';

import text from '@/data/requestsSection.json';

import requests from '@/data/requests.json';

import { SectionTitle } from '@/components/common/SectionTitle';

import { Slider } from '@/components/common/Slider';

import { RequestCard } from '@/components/common/RequestsCard';

export const RequestsSection: React.FC = () => {
  const { preTitle, sectionTitle, sectionText } = text;

  const request = requests.cards;

  return (
    <section className="section">
      <div className="container gap-4 md:flex xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div className="md:w-[527px] xl:w-[1010px]">
          <SectionTitle className="mb-6 md:mb-10 xl:mb-16">
            {sectionTitle}
          </SectionTitle>
          <p className="textBold mb-5 md:mb-9 xl:mb-10">{sectionText}</p>
          <div className="md:hidden">
            <Slider
              component={RequestCard}
              section={'requestsMain'}
              data={request}
            />
          </div>
          <div className="hidden flex-wrap gap-4 md:flex">
            {request.map(card => (
              <div key={card.id}>
                <RequestCard data={card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
