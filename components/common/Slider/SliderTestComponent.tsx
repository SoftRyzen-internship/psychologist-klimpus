import { FeedbackCard } from '../FeedbackCard';
import feedbackData from '@/data/feedback.json';
import { Slider } from './Slider';

export const SliderTestComponent = () => {
  const feedback = feedbackData.data;

  return (
    <>
      <div className="container outline-dotted md:max-w-[526px] md:px-0 xl:max-w-[969px]">
        <div>SliderTestComponent</div>
        <Slider component={FeedbackCard} section={'reviews'} data={feedback} />
        {/* <Slider component={FeedbackCard} section={'reviews'} data={feedback} /> */}
      </div>
    </>
  );
};
