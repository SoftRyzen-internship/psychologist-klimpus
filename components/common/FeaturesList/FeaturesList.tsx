'use client';
import { motion } from 'framer-motion';
import { FeaturesCard } from '@/components/common/FeaturesCard';

import features from '@/data/features.json';

export const FeaturesList = () => {
  const { featuresList } = features;

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
      {featuresList.map((item, idx) => {
        return (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.6 }}
            viewport={{ once: true }}
            key={item.id}
            className="featuresCard h-auto"
          >
            <FeaturesCard card={item} />
          </motion.li>
        );
      })}
    </ul>
  );
};
