import { ReactNode } from 'react';

import classNames from 'classnames';

type ISection = {
  children: ReactNode;
  className?: string;
  isFeatures?: boolean;
  isUniqueness?: boolean;
  isConsultations?: boolean;
  isReviews?: boolean;
};

export const Card = ({
  children,
  className,
  isFeatures,
  isUniqueness,
  isConsultations,
  isReviews,
}: ISection) => {
  const classname = classNames(
    'rounded-[20px] bg-red-100 w-full h-full',
    {
      'py-4 px-[31px] xl:px-6 md:w-[255px]': isFeatures,
      'py-[11.5px] md:py-4 xl:py-6 px-8 md:px-[17.5px] xl:px-6 md:w-[165px]':
        isUniqueness,
      'py-6 xl:py-12 px-4 md:px-[46px] xl:px-8': isConsultations,
      'py-6 px-4 md:px-[23px] xl:px-6 md:w-[255px]': isReviews,
    },
    className,
  );

  return <div className={classname}>{children}</div>;
};
