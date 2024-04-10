// import { ReactNode } from 'react';

export type FeaturesCardProps = {
  // children: ReactNode;
  card: {
    id: number;
    title: string;
    text: string;
  };
  className?: string;
  isFeatures?: boolean;
};
