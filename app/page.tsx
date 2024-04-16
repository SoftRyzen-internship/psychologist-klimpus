import { TestComponent } from '@/components/common/TestComponent';
import { ConsultationsSection } from '@/sections/Main/ConsultationsSection';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

import { AboutSection } from '@/sections/Main/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ConsultationsSection />
      <UniquenessSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
