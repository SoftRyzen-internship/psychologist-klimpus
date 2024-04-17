'use client';

import { RequestsList } from '@/components/common/RequestsList';
// import { Slider } from '@/components/common/Slider';

import dataJson from '@/data/consultationsRequests.json';
import { useScreen } from '@/utils/useScreen';

export const RequestSection = () => {
  const { sectionText } = dataJson;
  const { isMobile } = useScreen();
  return (
    <section className="section">
      <div className="container ">
        <p className="subtitleConsultation mb-6 w-[328px] uppercase md:mb-10 md:w-[436px] md:leading-[1.5] xl:mb-12 xl:w-[598px]">
          {sectionText}
        </p>

        {/* {isMobile ? <RequestsList /> : <Slider />} */}
        {isMobile ? <RequestsList isFamily /> : <p>slider</p>}
        {isMobile ? <RequestsList isIndividual /> : <p>slider</p>}
        {isMobile ? <RequestsList isGroup /> : <p>slider</p>}
      </div>
    </section>
  );
};
