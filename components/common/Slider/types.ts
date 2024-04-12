import { ReactNode } from "react";

export type Sections = 'mainRequests' | 'feedback' | 'communities' | 'consultRequests';

export interface SliderProps {
  section: Sections;
  slides: ReactNode[];
  };