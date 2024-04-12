import React from 'react';

export interface SiteLinkProps {
  linkType: 'scroll' | 'link';
  isAccent: boolean;
  href: string;
  children: React.ReactNode | string;
  className?: string;
}
