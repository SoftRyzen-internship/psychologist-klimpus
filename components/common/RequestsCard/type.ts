import React from 'react';

export interface RequestCardProps {
  data: {
    image: string;
    alt: string;
    requestSet: string[];
  };

  className?: string | React.ReactNode;
}
