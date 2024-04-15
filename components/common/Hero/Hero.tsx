import React from 'react';
import Image from 'next/image';
import data from '@/data/common.json';

export const Hero = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div>
          <Image
            className="mb-6 mt-[78px] aspect-video w-full object-cover object-top md:mb-10 md:mt-[122px] md:h-[480px]"
            src=""
            width={768}
            height={480}
            priority
            alt={data.hero.alt}
          />
        </div>
      </div>
    </section>
  );
};
