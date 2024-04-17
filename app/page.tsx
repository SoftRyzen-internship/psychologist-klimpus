// import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/Main/FormSection';
import { HeroSection } from '@/sections/Main/HeroSection/HeroSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

import { AboutSection } from '@/sections/Main/AboutSection';
import { ConsultationsSection } from '@/sections/Main/ConsultationsSection';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UniquenessSection />
      <ConsultationsSection />
      {/* <TestComponent /> */}
      <FormSection />
    </>
  );
}
