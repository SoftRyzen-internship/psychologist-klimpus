import { TestComponent } from '@/components/common/TestComponent';
import { ConsultationsSection } from '@/sections/Main/ConsultationsSection';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <FeaturesSection />
      <ConsultationsSection />
      <UniquenessSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
