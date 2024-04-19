import { EducationSection } from '@/sections/About/EducationSection';
import { CommunitySection } from '@/sections/About/CommunitySection/CommunitySection';
import { MyHistorySection } from '@/sections/About/MyHistorySection';
import { FormSection } from '@/sections/FormSection';

export default function Page() {
  return (
    <>
      <MyHistorySection />
      <EducationSection />
      <CommunitySection />
      <FormSection />
    </>
  );
}
