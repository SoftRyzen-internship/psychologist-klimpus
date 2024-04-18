export type ConsultationsRequestCardProps = {
  data: {
    id: number;
    images: {
      mobImage: string;
      tabdeskImage: string;
    };
    requestText: string;
  };
  className?: string;
};
