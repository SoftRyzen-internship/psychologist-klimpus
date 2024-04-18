'use client';

import React, { useState } from 'react';

import { Button } from '@/components/ui/Button';

import { IShowMoreButtonProps } from './types';

export const ShowMoreButton: React.FC<IShowMoreButtonProps> = ({
  showText,
  hideText,
  children,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      {showMore && children}
      <Button
        type="button"
        onClick={toggleShowMore}
        className="mb-2 py-4 pr-[58px] md:hidden"
      >
        {showMore ? hideText : showText}
      </Button>
    </>
  );
};
