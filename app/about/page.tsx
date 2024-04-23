import type { Metadata } from 'next';

import { EducationSection } from '@/sections/About/EducationSection';
import { CommunitySection } from '@/sections/About/CommunitySection/CommunitySection';
import { MyHistorySection } from '@/sections/About/MyHistorySection';
import { FormSection } from '@/sections/FormSection';

import { pageMetadata } from '@/utils/pageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('about');
}

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
