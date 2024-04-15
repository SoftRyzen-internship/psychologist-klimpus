import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { Hero } from '@/sections/Hero/Hero';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <UniquenessSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
