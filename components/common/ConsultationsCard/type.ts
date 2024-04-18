export type Plate = {
  id: string;
  format: string;
  frequency: string;
  duration: string;
  text: string;
};
export type Item = {
  textCard: string;
  linkText: string;
  href: string;
  format: string;
  frequency: string;
  duration: string;
  text: string;
  id: string;
};

export type ConsultationsCardProps = {
  item: Item;
  id?: string;
  className?: string;
  isConsultations?: boolean;
};
