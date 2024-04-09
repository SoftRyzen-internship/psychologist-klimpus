import React from 'react';

export interface ButtonProps {
  isLink: boolean;
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
}
