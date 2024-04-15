import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { AboutSection } from '@/sections/Main/AboutSection';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <AboutSection />
      <FeaturesSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
