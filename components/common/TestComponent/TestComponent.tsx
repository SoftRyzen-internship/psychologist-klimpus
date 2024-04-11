// import Image from 'next/image';
// import { ReactNode } from 'react';
// import { useState, useEffect } from 'react';

// import classNames from 'classnames';
// import { useMediaQuery } from 'react-responsive';

// import { Container } from '@/components/Container';
// import { NavBar } from '@/components/NavBar';

// import CloseIcon from '@/public/icons/close.svg';

// import { useCustomHook } from '@/hooks/useCustomHook';

// import data from '@/data/common.json';

// import { Type } from './types';

// import css from './TestComponent.module.css';

// interface ITestComponent = {
//   children: ReactNode;
//   className?: string;
// };

// export const TestComponent = ({ children, className = '' }: ITestComponent) => {
//   return <div className={classNames('container', className)}>{children}</div>;
// };
import { Contacts } from '@/components/ui/Contacts';
import { Icons } from '@/components/ui/Icons';

import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';

import data from '@/data/common.json';
import dataJson from '@/data/features.json';
import feedbackData from '@/data/feedback.json';

import { Socials } from '@/components/ui/Socials';
import { ButtonTestComponent } from '@/components/ui/Button/ButtonTestComponent';
import { FeaturesCard } from '@/components/ui/FeaturesCard';

import React from 'react';
import { NavBar } from '../NavBar';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FeedbackCard } from '../FeedbackCard';

export const TestComponent = () => {
  const { logo } = data.header;
  const { featuresList } = dataJson;
  const firstFeedback = feedbackData.data[0];

  return (
    <div>
      <SectionTitle>{logo}</SectionTitle>
      <Icons />
      <div className="container bg-white pb-6 pt-6">
        <Card isFeatures className="mb-6">
          <h2>Features Card</h2>
        </Card>

        <Card isUniqueness className="mb-6">
          <h2>Uniqueness Card</h2>
        </Card>
        <Card isConsultations className="mb-6">
          <h2>Consultations Card</h2>
        </Card>
        <Card isReviews className="mb-6">
          <h2>Reviews Card</h2>
        </Card>
        <Card isCommunities>
          <h2>Communities Card</h2>
        </Card>
      </div>
      <Socials />
      <Contacts />
      <div className="bg-black">
        <Contacts isFooter />
      </div>
      <div className="container gap-5 bg-white pb-6 pt-6 xl:flex">
        {featuresList.map(item => {
          return (
            <FeaturesCard key={item.id} card={item} className="featuresCard" />
          );
        })}
      </div>
      <NavBar />
      <FeaturesSection />
      <ButtonTestComponent />
      <div className="container bg-white">
        <FeedbackCard data={firstFeedback} />
      </div>
      <NavBar />
    </div>
  );
};
