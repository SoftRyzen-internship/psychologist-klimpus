import { ReactNode } from 'react';

export type CardProps = {
  children: ReactNode;
  isSlider?: boolean;
  className?: string;
  isFeatures?: boolean;
  isUniqueness?: boolean;
  isConsultations?: boolean;
  isReviews?: boolean;
  isCommunities?: boolean;
};
