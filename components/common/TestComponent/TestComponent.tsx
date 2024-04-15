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

'use client';

import { RequestCard } from '@/components/ui/RequestsCard';

import dataJson from '@/data/features.json';
import requestData from '@/data/requests.json';
import consultationsRequests from '@/data/consultationsRequests.json';

import { FeaturesCard } from '@/components/ui/FeaturesCard';

import { BurgerMenu } from '@/components/common/BurgerMenu';
import { useState } from 'react';
import { SliderTestComponent } from '../Slider/SliderTestComponent';
import { ConsultationsRequestCard } from '@/components/ui/ConsultationsRequestCard';

export const TestComponent = () => {
  const { featuresList } = dataJson;
  const { cards } = consultationsRequests;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const requestDatas = requestData.cards[0];

  return (
    <div>
      <div className="container bg-white pb-6 pt-6">
        <RequestCard data={requestDatas} />
      </div>

      <div className="container gap-5 bg-white pb-6 pt-6 xl:flex">
        {featuresList.map(item => {
          return (
            <FeaturesCard key={item.id} card={item} className="featuresCard" />
          );
        })}
      </div>

      <button type="button" onClick={() => setIsMenuOpen(true)}>
        Відкрити
      </button>
      <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
      <SliderTestComponent />
      <div className="container gap-5  pb-6 pt-6 xl:flex">
        {cards.map(item => {
          return <ConsultationsRequestCard key={item.id} card={item} />;
        })}
      </div>
    </div>
  );
};
