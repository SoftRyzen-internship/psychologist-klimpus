// import Image from 'next/image';
// import { ReactNode } from 'react';
// import { useState } from 'react';

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
'use client';
import { Contacts } from '@/components/ui/Contacts';
import { Icons } from '@/components/ui/Icons';

import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { RequestCard } from '@/components/ui/RequestsCard';

import data from '@/data/common.json';
import dataJson from '@/data/features.json';
// import consultations from '@/data/consultations.json';
import feedbackData from '@/data/feedback.json';
import requestData from '@/data/requests.json';

import { Socials } from '@/components/ui/Socials';
// import { ButtonTestComponent } from '@/components/ui/Button/ButtonTestComponent';
import { FeaturesCard } from '@/components/ui/FeaturesCard';
import { NavBar } from '../NavBar';
import { FeedbackCard } from '../FeedbackCard';

import { BurgerMenu } from '@/components/common/BurgerMenu';
import { useState } from 'react';

export const TestComponent = () => {
  const { logo } = data.header;
  const { featuresList } = dataJson;
  // const { consultationsList } = consultations;
  const firstFeedback = feedbackData.data[0];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <SectionTitle>{logo}</SectionTitle>
      <Icons />
      <div className="container bg-white pb-6 pt-6">
        <Card isFeatures className="mb-6">
          <h2>Features Card</h2>
        </Card>
        <ul className="flex flex-col flex-wrap gap-4 md:flex-row">
          {requestData.cards.map(item => (
            <li key={item.id}>
              <RequestCard
                images={item.images}
                requestSet={item.requestSet}
                alt={item.alt}
              />
            </li>
          ))}
        </ul>

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
      {/* <ButtonTestComponent /> */}
      {/* <ButtonTestComponent /> */}
      <div className="container bg-white">
        <FeedbackCard data={firstFeedback} />
      </div>
      <NavBar />
      {/* <FormSection /> */}

      <button type="button" onClick={() => setIsMenuOpen(true)}>
        Відкрити
      </button>
      <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};
