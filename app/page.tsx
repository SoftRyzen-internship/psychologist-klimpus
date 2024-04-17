import { TestComponent } from '@/components/common/TestComponent';
// import { CoursesList } from '@/components/common/CoursesList';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/Main/FormSection';
import { HeroSection } from '@/sections/Main/HeroSection/HeroSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

import { AboutSection } from '@/sections/Main/AboutSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UniquenessSection />
      <TestComponent>
        {/* <CoursesList className="ml-5 mt-5" /> */}
      </TestComponent>
      <FormSection />
    </>
  );
}
