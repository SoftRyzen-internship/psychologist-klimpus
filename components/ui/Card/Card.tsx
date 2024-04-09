import { ReactNode } from 'react';

import classNames from 'classnames';

type ISection = {
  children: ReactNode;
  className?: string;
  isFeatures?: boolean;
  isUniqueness?: boolean;
  isConsultations?: boolean;
  isReviews?: boolean;
  isCommunities?: boolean;
};

export const Card = ({
  children,
  className,
  isFeatures,
  isUniqueness,
  isConsultations,
  isReviews,
  isCommunities,
}: ISection) => {
  const classname = classNames(
    'rounded-[20px] bg-bgBeige w-full h-full',
    {
      'py-4 px-[31px] xl:px-6 md:w-[255px] xl:w-[238px]': isFeatures,
      'py-[11.5px] md:py-4 xl:py-6 px-8 md:px-[17.5px] xl:px-6 md:w-[165px] xl:w-[323px]':
        isUniqueness,
      'py-6 xl:py-12 px-4 md:px-[46px] xl:px-8 md:w-[527px] xl:w-[316px]':
        isConsultations,
      'py-6 px-4 md:px-[23px] xl:px-6 md:w-[255px] xl:w-[323px]': isReviews,
      'py-[13.5px] xl:py-3 px-[51px] md:w-[346px] xl:w-[289px]': isCommunities,
    },
    className,
  );

  return <div className={classname}>{children}</div>;
};
