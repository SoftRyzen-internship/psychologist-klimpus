import { TestComponent } from '@/components/common/TestComponent';
import { FeaturesSection } from '@/sections/Main/FeaturesSection';
import { FormSection } from '@/sections/FormSection';
import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { UniquenessSection } from '@/sections/Main/UniquenessSection';

import { getAllСonsultations } from './(server)/api';

import { AboutSection } from '@/sections/Main/AboutSection';
import Link from 'next/link';
import { ROUTING } from '@/utils/routing';

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams['page'] ?? 1);
  const allСonsultations = await getAllСonsultations();

  return (
    <>
      <h1>Drag13 blog, page {page}</h1>
      <ul>
        {allСonsultations.map(consultation => (
          <li key={consultation.name}>
            <Link href={ROUTING.consultantion(consultation.name)}>
              {consultation.name}
            </Link>
          </li>
        ))}
      </ul>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <UniquenessSection />
      <TestComponent />
      <FormSection />
    </>
  );
}
