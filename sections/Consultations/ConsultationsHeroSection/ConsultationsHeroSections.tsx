import React from 'react';
import { ConsultationProps } from './types';

export const ConsultationsHeroSections = ({
  consultation,
}: ConsultationProps) => {
  return (
    <div>
      <p>{consultation?.name}</p>
      <p>{consultation?.text}</p>
    </div>
  );
};
