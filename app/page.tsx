import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <FeaturesSection />
      <UniquenessSection />
      <TestComponent />
    </>
  );
}
