import { performRequest } from '@/lib/datocms';
import { policyQuery } from '@/lib/queries/policyQuery';
import { PolicySection } from '@/sections/PolicySection';
import { TechnicalWorks } from '@/components/common/TechnicalWorks';

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
