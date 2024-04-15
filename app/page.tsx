import { TestComponent } from '@/components/common/TestComponent';
import { ConsultationsSection } from '@/sections/Main/ConsultationsSection';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <FeaturesSection />
      <ConsultationsSection />
      <TestComponent />
    </>
  );
}
