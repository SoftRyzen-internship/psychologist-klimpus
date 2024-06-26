import { SectionTitle } from '@/components/common/SectionTitle';
import { UniquenessCardProps } from '@/components/common/UniquenessCard/type';

import { performRequest } from '@/lib/datocms';
import { uniquenessQuery } from '@/lib/queries/uniquenessQuery';

import { mergeData } from '@/utils/mergeData';

import uniquenessData from '@/data/uniqueness.json';
import { UniquenessList } from '@/components/common/UniquenessList';

export const UniquenessSection = async () => {
  const { preTitle, sectionTitle, staticUniquenessess } = uniquenessData;
  const { data } = await performRequest({ query: uniquenessQuery });
  const uniquenessess: UniquenessCardProps[] = data?.uniqueness.cards;

  const dataToShow = uniquenessess
    ? mergeData(uniquenessess, staticUniquenessess)
    : staticUniquenessess;

  return (
    <section className="section">
      <div className="container gap-4 md:flex xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div className="md:w-[527px] xl:w-[1012px]">
          <SectionTitle className="mb-6 md:mb-10 xl:mb-16">
            {sectionTitle}
          </SectionTitle>
          <UniquenessList data={dataToShow} />
        </div>
      </div>
    </section>
  );
};
