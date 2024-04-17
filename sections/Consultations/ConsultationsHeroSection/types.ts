interface Consultation {
  name: string;
  text: string;
}

export interface ConsultationProps {
  consultation: Consultation | undefined;
}
