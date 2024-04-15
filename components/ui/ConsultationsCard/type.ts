export type Plate = {
  id: string;
  format: string;
  frequency: string;
  duration: string;
};

export type ConsultationsCardProps = {
  card: {
    id: number;
    title: string;
    text: string;
    linkText: string;
    href: string;
  };
  className?: string;
  isConsultations?: boolean;
};
