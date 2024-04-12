import { FeaturesList } from '@/components/ui/FeaturesList';

import features from '@/data/features.json';

export const FeaturesSection = () => {
  const { preTitle, sectionTitle } = features;
  return (
    <section className="section">
      <div className="container gap-4 md:flex xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div className="md:w-[527px] xl:w-[1012px]">
          <h2 className="sectionTitle mb-6 md:mb-10 xl:mb-16">
            {sectionTitle}
          </h2>
          <FeaturesList />
        </div>
      </div>
    </section>
  );
};
