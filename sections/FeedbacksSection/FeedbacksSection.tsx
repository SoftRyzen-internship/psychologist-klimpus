import React from 'react';

import classNames from 'classnames';

import { SectionTitle } from '@/components/common/SectionTitle';
import { FeedbackCard } from '@/components/common/FeedbackCard';
import { Slider } from '@/components/common/Slider';

import { IFeedbacksSectionProps } from './type';

import feedbacksData from '@/data/feedback.json';

import styles from './FeedbackSection.module.css';

export const FeedbacksSection: React.FC<IFeedbacksSectionProps> = ({
  page,
}) => {
  const { preTitle, title, secondTitle, afterTitle, data } = feedbacksData;

  const containerStyles = classNames('container', {
    'md:grid md:grid-cols-[162px_527px] md:gap-4 xl:grid-cols-[186px_1010px] xl:gap-[18px]':
      page === 'main',
  });

  const titleStyles = classNames('mb-6 md:mb-[40px] xl:mb-16', {
    [styles.title]: page === 'consultancy',
  });

  return (
    <section className="section">
      <div className={containerStyles}>
        {page === 'main' && (
          <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles  md:mb-0 md:py-3 xl:text-lg xl:leading-[1.35]">
            {preTitle}
          </p>
        )}

        <div>
          <SectionTitle className={titleStyles}>
            {page === 'main' ? title : secondTitle}
          </SectionTitle>

          {page === 'main' && (
            <p className=" mb-5 font-roboto text-[16px] font-medium leading-[1.35] text-mainBlack  md:mb-[92px] md:text-[19px]  xl:mb-[120px] xl:w-[701px] xl:text-[20px]">
              {afterTitle}
            </p>
          )}

          <Slider
            section={page === 'main' ? 'reviews' : 'consultancyReviews'}
            component={FeedbackCard}
            data={data}
          />
        </div>
      </div>
    </section>
  );
};
