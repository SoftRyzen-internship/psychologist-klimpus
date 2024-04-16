export type ConsultationsRequestCardProps = {
  card: {
    id: number;
    image: string;
    images: {
      mobImage: string;
      tabdeskImage: string;
    };
    requestText: string;
  };
  className?: string;
};
