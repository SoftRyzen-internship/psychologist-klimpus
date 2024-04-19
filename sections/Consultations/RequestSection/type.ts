export type Images = {
  mobImage: string;
  tabdeskImage: string;
};

export type ImageCard = {
  id: number;
  images: Images;
  requestText: string;
  alt: string;
};

type Consultation = {
  imageCards: ImageCard[];
};

export type RequestSectionProps = {
  consultation: Consultation | undefined;
};
