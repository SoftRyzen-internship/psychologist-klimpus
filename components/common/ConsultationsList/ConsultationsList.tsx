'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Item } from '@/components/common/ConsultationsCard/type';

import { ConsultationsCard } from '@/components/common/ConsultationsCard';
import { ConsultationsListProps } from './type';

export const ConsultationsList: FC<ConsultationsListProps> = ({
  dataToShow,
}) => {
  return (
    <ul className="flex flex-col gap-4 xl:flex-row xl:gap-8">
      {dataToShow.map((item: Item, idx) => {
        return (
          <motion.li
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.6 }}
            viewport={{ once: true }}
            key={item.id}
          >
            <ConsultationsCard item={item} />
          </motion.li>
        );
      })}
    </ul>
  );
};
