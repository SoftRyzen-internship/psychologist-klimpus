import React from 'react';

export interface RequestCardProps {
  images: {
    mobImage: string;
    tabImage: string;
    pcImage: string;
  };
  alt: string;
  requestSet: string[];
  className?: string | React.ReactNode;
}
