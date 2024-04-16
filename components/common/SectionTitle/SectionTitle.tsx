import React from 'react';
import classNames from 'classnames';
import { SectionTitleProps } from './types';

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  const titleStyles = classNames('sectionTitle', className);
  return <h2 className={titleStyles}>{children}</h2>;
};
