import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { Hero } from '@/sections/Hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
