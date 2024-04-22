import type { Metadata } from 'next';

import { performRequest } from '@/lib/datocms';
import { policyQuery } from '@/lib/queries/policyQuery';

import { PolicySection } from '@/sections/PolicySection';
import { TechnicalWorks } from '@/components/common/TechnicalWorks';

import { pageMetadata } from '@/utils/pageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('policy');
}

export default async function Page() {
  let policy = null;
  try {
    const { data } = await performRequest({ query: policyQuery });
    policy = data?.policy?.text?.value;
  } catch (error) {
    console.error('Помилка отримання даних з сервера:', error);
  }

  return <>{policy ? <PolicySection data={policy} /> : <TechnicalWorks />}</>;
}
