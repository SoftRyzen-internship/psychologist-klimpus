export type Images = {
  mobImage: string;
  tabdeskImage: string;
};

export type ImageCard = {
  id: number;
  images: Images;
  requestText: string;
};

type Consultation = {
  //   id: number;
  //   textCard: string;
  //   linkText: string;
  //   href: string;
  //   format: string;
  //   frequency: string;
  //   duration: string;
  //   description: string;
  //   imgSrc: string;
  //   alt: string;
  name: string;
  text: string;
  //   imageCards: ImageCard[];
};

export type RequestSectionProps = {
  consultation: Consultation | undefined;
};
