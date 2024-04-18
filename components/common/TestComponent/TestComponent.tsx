// import Image from 'next/image';

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
import { RequestCard } from '@/components/common/RequestsCard';

import dataJson from '@/data/features.json';
import requestData from '@/data/requests.json';
import communityData from '@/data/communities.json';

import { FeaturesCard } from '@/components/common/FeaturesCard';

import { BurgerMenu } from '@/components/common/BurgerMenu';
import { useState } from 'react';
import { SliderTestComponent } from '../Slider/SliderTestComponent';
import { CommunityCard } from '@/components/ui/CommunityCard';

export const TestComponent = () => {
  const { featuresList } = dataJson;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const requestDatas = requestData.cards[0];

  return (
    <div>
      <div className="container bg-white pb-6 pt-6">
        <RequestCard data={requestDatas} />
      </div>
      <ul className="container flex flex-wrap gap-4 bg-white pb-6 pt-6 xl:gap-5 smOnly:flex-col">
        {communityData.map(item => (
          <li key={item.text} className="">
            <CommunityCard data={item} />
          </li>
        ))}
      </ul>

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
    </div>
  );
};
