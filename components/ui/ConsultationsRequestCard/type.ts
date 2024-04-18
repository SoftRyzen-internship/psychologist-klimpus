export type Images = {
  mobImage: string;
  tabdeskImage: string;
};

export type ImageCard = {
  id: number;
  images: Images;
  requestText: string;
};

export type ConsultationsRequestCardProps = {
  data: ImageCard;
  className?: string;
};
