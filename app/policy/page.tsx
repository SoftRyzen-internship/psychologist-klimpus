import type { Metadata } from 'next';

import { performRequest } from '@/lib/datocms';
import { policyQuery } from '@/lib/queries/policyQuery';

import { PolicySection } from '@/sections/PolicySection';

import { pageMetadata } from '@/utils/pageMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata('policy');
}

export default async function Page() {
  const { data } = await performRequest({ query: policyQuery });
  const policy = data?.policy?.text?.value;

  return (
    <div>
      <PolicySection data={policy} />
    </div>
  );
}
