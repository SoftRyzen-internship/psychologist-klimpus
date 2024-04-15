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

import { FeaturesCard } from '@/components/ui/FeaturesCard';

import { BurgerMenu } from '@/components/common/BurgerMenu';
import { useState } from 'react';

export const TestComponent = () => {
  const { featuresList } = dataJson;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <div className="container bg-white pb-6 pt-6">
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
    </div>
  );
};
