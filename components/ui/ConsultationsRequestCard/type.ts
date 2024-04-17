export type ConsultationsRequestCardProps = {
  card: {
    id: number;
    images: {
      mobImage: string;
      tabdeskImage: string;
    };
    requestText: string;
  };
  className?: string;
};
