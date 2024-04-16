export type Plate = {
  id: string;
  format: string;
  frequency: string;
  duration: string;
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
  card: StaticData;
  className?: string;
  isConsultations?: boolean;
};
