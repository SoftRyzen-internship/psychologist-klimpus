import type { Metadata } from 'next';

import { FormSection } from '@/sections/FormSection';
import { ConsultationsHeroSections } from '@/sections/Consultations/ConsultationsHeroSection';
import consultationsData from '@/data/consultations.json';
import { RequestSection } from '@/sections/Consultations/RequestSection';
import { FeedbacksSection } from '@/sections/FeedbacksSection';

import { pageMetadata } from '@/utils/pageMetadata';
interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = params.slug;
  return pageMetadata(page);
}

const SinglePage = ({ params }: Props) => {
  const consultation = consultationsData.consultationsList.find(
    item => item.name === params.slug,
  );

  //console.log(consultation);

  return (
    <>
      <ConsultationsHeroSections consultation={consultation} />
      <RequestSection consultation={consultation} />
      <FeedbacksSection page="consultancy" />
      <FormSection />
    </>
  );
};

export default SinglePage;
