import React from 'react';

export interface CommunityCardProps {
  data: {
    logo: string;
    initWord: string;
    text: string;
  };
  className?: string | React.ReactNode;
}
