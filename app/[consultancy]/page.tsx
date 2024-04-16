import { NavBar } from '@/components/common/NavBar';
import { FeedbacksSection } from '@/sections/Main/FeedbacksSection/FeedbacksSection';

export default function Page() {
  return (
    <>
      <div>Consultancy page</div>
      <FeedbacksSection page="consultancy" />
      <NavBar />
    </>
  );
}
