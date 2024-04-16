'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import classNames from 'classnames';

import { NavBarDropdownList } from '@/components/ui/NavBarDropdownList';

import ArrowDown from '@/public/icons/arrowDown.svg';
import ArrowUp from '@/public/icons/arrowUp.svg';

import jsonData from '@/data/common.json';

import css from './NavBar.module.css';

export const NavBar = () => {
  const linkData = jsonData.NavBar.link;
  const btnData = jsonData.NavBar.btn;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const pathname = usePathname();

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const buttonClassName = classNames(
    css['navbar-btn'],
    'flex items-center gap-[12px] font-roboto text-[18px] font-normal leading-[1.35] transition-[color] duration-300 ease-out hover:text-hoverAccent focus:text-hoverAccent active:text-clickAccent',
    {
      'text-hoverAccent':
        pathname === '/family-consultation' ||
        pathname === '/group-consultation' ||
        pathname === '/individual-consultation',
    },
  );

  return (
    <nav className="w-full bg-white">
      <ul className="flex flex-col gap-[27px] text-mainBlack xl:flex-row xl:gap-[48px]">
        {linkData.map((item, index) => (
          <li key={index}>
            <Link
              href={`${item.moveTo}`}
              className={`font-roboto text-[18px] font-normal leading-[1.35] transition-[color]
                  duration-300 ease-out hover:text-hoverAccent focus:text-hoverAccent active:text-clickAccent ${
                    pathname === `${item.moveTo}` ? 'text-hoverAccent' : ''
                  }`}
            >
              {item.text}
            </Link>
          </li>
        ))}
        <li className="relative">
          <button
            type="button"
            onClick={toggleModal}
            className={buttonClassName}
          >
            {btnData}
            {!isModalVisible ? (
              <ArrowDown
                className={`${css['navbar-icon']} h-[15px] w-[15px]`}
              />
            ) : (
              <ArrowUp className={`${css['navbar-icon']} h-[15px] w-[15px]`} />
            )}
          </button>
          <NavBarDropdownList isOpen={isModalVisible} pathname={pathname} />
        </li>
      </ul>
    </nav>
  );
};
