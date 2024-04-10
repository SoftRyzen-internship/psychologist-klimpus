import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import { DropdownListProps } from './type';

import jsonData from '@/data/common.json';

export const NavBarDropdownList: React.FC<DropdownListProps> = ({
  isOpen,
  pathname,
}) => {
  const data = jsonData.DropdownList;

  const className = classNames(
    'bg-plashka w-[289px] rounded-b-[20px] mt-[20px] py-[16px] transition pointer-events-none opacity-0',
    {
      'pointer-events-auto opacity-100': isOpen,
    },
  );

  return (
    <div className={className}>
      <ul className="flex flex-col gap-[10px]">
        {data.map((item, index) => (
          <li
            key={index}
            className={`rounded-[20px] px-[20px] py-[10px] transition hover:bg-bgBeige focus:bg-bgBeige active:bg-clickAccent active:text-white ${
              pathname === `${item.moveTo}` ? 'bg-clickAccent text-white' : ''
            }`}
          >
            <Link
              href={`${item.moveTo}`}
              className="font-roboto text-[18px] font-normal leading-[1.35]"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
