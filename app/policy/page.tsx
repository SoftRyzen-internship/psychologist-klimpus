import { performRequest } from '@/lib/datocms';
import { policyQuery } from '@/lib/queries/policyQuery';
// import { StructuredText } from "react-datocms";
import { PolicySection } from '@/sections/PolicySection';

export default async function Page() {
  const { data } = await performRequest({ query: policyQuery });
  const policy = data?.policy?.text?.value;
  console.log(policy);

  return (
    <div>
      <PolicySection data={policy} />
    </div>
  );
}
