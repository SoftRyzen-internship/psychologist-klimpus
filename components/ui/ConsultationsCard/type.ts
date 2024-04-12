type InfoItem = {
  id: number;
  infoText: string;
};

export type ConsultationsCardProps = {
  card: {
    id: number;
    title: string;
    text: string;
    linkText: string;
    href: string;
    info: InfoItem[];
  };
  className?: string;
  isConsultations?: boolean;
};
