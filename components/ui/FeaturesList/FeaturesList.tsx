import { FeaturesCard } from '@/components/ui/FeaturesCard';

import features from '@/data/features.json';

export const FeaturesList = () => {
  const { featuresList } = features;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
      {featuresList.map(item => {
        return (
          <FeaturesCard key={item.id} card={item} className="featuresCard" />
        );
      })}
    </div>
  );
};
