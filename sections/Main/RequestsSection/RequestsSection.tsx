import React from 'react';

import data from '@/data/requestsSection.json';

import requests from '@/data/requests.json';

export const RequestsSection: React.FC = () => {
  const { preTitle, sectionTitle, sectionText } = data;

  return (
    <section className="section">
      <div className="container gap-4 md:flex xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div className="md:w-[527px] xl:w-[1010px]">
          <h2 className="sectionTitle mb-6 md:mb-10 xl:mb-16">
            {sectionTitle}
          </h2>
          <p className="textBold mb-5 md:mb-10 xl:mb-16">{sectionText}</p>
          <ul className="flex flex-col flex-wrap gap-4 md:flex-row">
            {requests.cards.map(item => (
              <li key={item.id}></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
