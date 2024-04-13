import React from 'react';

export interface RequestCardProps {
  image: {
    mob: string;
    tab: string;
    pc: string;
  };
  alt: string;
  requestSet: string[];
  className?: string | React.ReactNode;
}
