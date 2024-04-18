import { FormSection } from '@/sections/Main/FormSection';
import { ConsultationsHeroSections } from '@/sections/Consultations/ConsultationsHeroSection';
import consultationsData from '@/data/consultations.json';
import { FeedbacksSection } from '@/sections/FeedbacksSection';

interface Props {
  params: {
    slug: string;
  };
}

const SinglePage = ({ params }: Props) => {
  const consultation = consultationsData.consultationsList.find(
    item => item.name === params.slug,
  );

  console.log(consultation);

  return (
    <div className="container">
      <ConsultationsHeroSections consultation={consultation} />
      <FeedbacksSection page="consultancy" />
      <FormSection />
    </div>
  );
};

export default SinglePage;
