import { RequestSection } from '@/sections/Consultancy/RequestSection';
import { FeedbacksSection } from '@/sections/Main/FeedbacksSection/FeedbacksSection';

export default function Page() {
  return (
    <>
      <div>Consultancy page</div>
      <RequestSection />
      <FeedbacksSection page="consultancy" />
    </>
  );
}
