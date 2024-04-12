import React from 'react';

import { Slider } from '@/components/common/Slider';
import { SliderButtons } from '@/components/ui/SliderButtons';

import { FeedbackCard } from '@/components/common/FeedbackCard';

import feedback from '@/data/feedback.json';

export const ReviewsSection: React.FC = async () => {
  const { preTitle, sectionTitle, sectionText } = feedback;

  return (
    <section className="section">
      <div className="container gap-4 md:flex xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div className="md:w-[527px] xl:w-[701px]">
          <h2 className="sectionTitle mb-6 md:mb-10 xl:mb-16">
            {sectionTitle}
          </h2>
          <p className="textBold mb-5 md:mb-10 xl:mb-16">{sectionText}</p>
          <SliderButtons
            section={'feedback'}
            className="md:ml-auto smOnly:hidden"
          />
          <Slider section={'mainRequests'} slides={[]} />
          <SliderButtons className="flex md:hidden" section={'feedback'} />

          <FeedbackCard
            data={{
              text: '',
              owner: '',
            }}
          />
        </div>
      </div>
    </section>
  );
};
