import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { HeroSection } from '@/sections/Main/HeroSection/HeroSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';
import { RequestsSection } from '@/sections/Main/RequestsSection';
import { AboutSection } from '@/sections/Main/AboutSection';
import { FeedbacksSection } from '@/sections/Main/FeedbacksSection/FeedbacksSection';
import { ConsultationsSection } from '@/sections/Main/ConsultationsSection';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <RequestsSection />
      <UniquenessSection />
      <ConsultationsSection />
      <FeedbacksSection page="main" />
      <TestComponent />
      <FormSection />
    </>
  );
}
