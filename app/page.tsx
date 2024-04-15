import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <FeaturesSection />
      <UniquenessSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
