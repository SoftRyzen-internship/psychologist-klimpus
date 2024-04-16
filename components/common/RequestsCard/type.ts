import React from 'react';

export interface RequestCardProps {
  data: {
    images: {
      mobImage: string;
      tabImage: string;
      pcImage: string;
    };
    alt: string;
    requestSet: string[];
  };

  className?: string | React.ReactNode;
}
