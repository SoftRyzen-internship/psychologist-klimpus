import React from 'react';
// //import Link from 'next/link';

import { UniquenessCardProps } from './type';

// import { Card } from '../Card';

// //import data from '@/data/common.json';
// export const UniquenessCard: React.FC<UniquenessCardProps> = ({
//   title,
//   text,
// }) => {
//   return (
//   //   <Card isUniqueness className={classNames('h-auto', className)}>
//   //     <h3 className="cardTitleLight mb-4 leading-[1.35] xl:leading-[1.35]">
//   //       {title}
//   //     </h3>
//   //     <p className="cardTextLg leading-[1.35] xl:leading-[1.35]">{text}</p>
//   //   </Card>
//   // );
// };

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

export const UniquenessCard: React.FC<UniquenessCardProps> = ({
  title,
  text,
}) => {
  return (
    <div>
      {title}
      {text}
    </div>
  );
};
