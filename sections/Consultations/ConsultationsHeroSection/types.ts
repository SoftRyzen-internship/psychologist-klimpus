interface Consultation {
  name: string;
  text: string;
  format: string;
  frequency: string;
  duration: string;
  description: string;
  imgSrc: string;
  alt: string;
}

export interface ConsultationProps {
  consultation: Consultation | undefined;
  className?: string;
  info?: string[];
}
