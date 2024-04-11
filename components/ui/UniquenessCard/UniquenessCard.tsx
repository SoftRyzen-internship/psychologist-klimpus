import React from 'react';
//import Link from 'next/link';

import { UniquenessCardProps } from './type';

import { Card } from '../Card';

export const UniquenessCard: React.FC<UniquenessCardProps> = ({
  total,
  text,
}) => {
  return (
    <Card
      isUniqueness
      className="flex h-auto items-center justify-center gap-4 md:flex-col xl:gap-8"
    >
      <span className="font w-[124px] font-roboto text-[27px] font-medium leading-[1.5] text-accent md:w-[130px] md:text-[30px] xl:text-[36px]">
        {total}
      </span>
      <p className="cardTextLg w-[124px] leading-[1.35] md:w-[130px] xl:leading-[1.35]">
        {text}
      </p>
    </Card>
  );
};

// // export const FeaturesCard: React.FC<FeaturesCardProps> = ({
// //   className = '',
// //   card,
// // }) => {
// //   const { title, text } = card;
// //   return (
// // <Card isFeatures className={classNames('h-auto', className)}>
// //   <h3 className="cardTitleLight mb-4 leading-[1.35] xl:leading-[1.35]">
// //     {title}
// //   </h3>
// //   <p className="cardTextLg leading-[1.35] xl:leading-[1.35]">{text}</p>
// // </Card>
// //   );
// // };
