import { performRequest } from '@/lib/datocms';
import { policyQuery } from '@/lib/queries/policyQuery';
import { PolicySection } from '@/sections/PolicySection';

export default async function Page() {
  const { data } = await performRequest({ query: policyQuery });
  const policy = data?.policy?.text?.value;

  return (
    <div>
      <PolicySection data={policy} />
    </div>
  );
}
