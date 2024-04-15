import { SliderTestComponent } from '@/components/common/Slider/SliderTestComponent';
import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';

export default function Home() {
  return (
    <>
      <p>Homepage</p>
      <FeaturesSection />
      <TestComponent />
      <FormSection />
      <SliderTestComponent />
    </>
  );
}
