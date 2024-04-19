import React from 'react';

export interface EducationCardProps {
  id?: string;
  year: number;
  name: React.ReactNode | string;
  className?: string;
}
