import React from 'react';

type SliderData = Record<string, any>;

export type SliderProps = {
  data: SliderData[];
  component: React.FC<any>;
  section: 'community' | 'requestsMain' | 'requestsConsultancy' | 'reviews';
  className?: string;
};
