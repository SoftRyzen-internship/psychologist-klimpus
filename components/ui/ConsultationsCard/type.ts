type DescriptionItem = {
  id: number;
  descrText: string;
};

export type ConsultationsCardProps = {
  card: {
    id: number;
    title: string;
    text: string;
    description: DescriptionItem[];
  };
  className?: string;
  isConsultations?: boolean;
};
