import { FeaturesList } from '@/components/common/FeaturesList';

import dataJson from '@/data/consultationsRequests.json';

export const RequestSection = () => {
  const { sectionText } = dataJson;
  return (
    <section className="section">
      <div className="container ">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {sectionText}
        </p>

        <FeaturesList />
      </div>
    </section>
  );
};
