export type ConsultationsRequestCardProps = {
  card: {
    id: number;
    images: {
      mobImage: string;
      mob480Image: string;
      tabImage: string;
      pcImage: string;
    };
    requestText: string;
  };

  className?: string;
};
