import React from 'react';

export interface ButtonProps {
  children: React.ReactNode | string;
  type: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
}
