export type Plate = {
  id: string;
  format: string;
  frequency: string;
  duration: string;
  text: string;
};

export type ConsultationsCardProps = {
  textCard: string;
  linkText: string;
  href: string;
  format: string;
  frequency: string;
  duration: string;
  text: string;
  id?: string;
  className?: string;
  isConsultations?: boolean;
};
