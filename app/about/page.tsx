import { EducationSection } from '@/sections/About/EducationSection';
import { CommunitySection } from '@/sections/About/CommunitySection/CommunitySection';
import { MyHistorySection } from '@/sections/About/MyHistorySection';

export default function Page() {
  return (
    <>
      <EducationSection />
      <MyHistorySection />
      <CommunitySection />
    </>
  );
}
