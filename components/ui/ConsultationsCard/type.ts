export type Plate = {
  id: string;
  format: string;
  frequency: string;
  duration: string;
  text: string;
};
export type StaticData = {
  id: number;
  title: string;
  textCard: string;
  linkText: string;
  href: string;
  format: string;
  frequency: string;
  duration: string;
  text: string;
};

export type ConsultationsCardProps = {
  // card: StaticData;
  title: string;
  textCard: string;
  linkText: string;
  href: string;
  format: string;
  frequency: string;
  duration: string;
  className?: string;
  isConsultations?: boolean;
};
