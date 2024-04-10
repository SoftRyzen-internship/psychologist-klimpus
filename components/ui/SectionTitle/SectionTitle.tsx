import React, { ReactNode } from 'react';

export const SectionTitle = ({ children }: { children: ReactNode }) => {
  return <h2 className="sectionTitle">{children}</h2>;
};
