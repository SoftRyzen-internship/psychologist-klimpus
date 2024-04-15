import { FeedbackCard } from '../FeedbackCard';
import feedbackData from '@/data/feedback.json';
import { Slider } from './Slider';
import { RequestCard } from '@/components/ui/RequestsCard';
import requestData from '@/data/requests.json';

export const SliderTestComponent = () => {
  const feedback = feedbackData.data;
  const request = requestData.cards;

  return (
    <div className="container flex flex-col gap-[80px] outline-dotted md:max-w-[526px] md:px-0 xl:max-w-[969px]">
      <div>SliderTestComponent</div>
      <Slider component={FeedbackCard} section={'reviews'} data={feedback} />
      <div className="md:hidden">
        <Slider
          component={RequestCard}
          section={'requestsMain'}
          data={request}
        />
      </div>
    </div>
  );
};
