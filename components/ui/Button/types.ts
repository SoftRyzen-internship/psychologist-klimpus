import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  type: 'submit' | 'button';
  onClick?: () => void;
  className?: string;
}
