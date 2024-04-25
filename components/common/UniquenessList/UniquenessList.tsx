'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';

import { UniquenessCard } from '@/components/common/UniquenessCard';
import { UniquenessCardProps } from '@/components/common/UniquenessCard/type';
import { UniquenessListProps } from './type';

export const UniquenessList: FC<UniquenessListProps> = ({ data }) => {
  return (
    <ul className="flex flex-col gap-4 md:flex-row xl:gap-5">
      {data?.map((item: UniquenessCardProps, idx) => (
        <motion.li
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.6 }}
          viewport={{ once: true }}
          key={item.id}
        >
          <UniquenessCard
            id={item.id}
            quantity={item.quantity}
            text={item.staticText!}
          />
        </motion.li>
      ))}
    </ul>
  );
};
