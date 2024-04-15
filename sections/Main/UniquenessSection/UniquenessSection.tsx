import { UniquenessCard } from '@/components/ui/UniquenessCard';
import uniquenessData from '@/data/uniqueness.json';
import { performRequest } from '@/lib/datocms';
import { uniquenessQuery } from '@/lib/queries/uniquenessQuery';
import { UniquenessCardProps } from '@/components/ui/UniquenessCard/type';
//import { StaticUniquenessData } from './types';

export const UniquenessSection = async () => {
  const { preTitle, sectionTitle, staticUniquenessess } = uniquenessData;
  const { data } = await performRequest({ query: uniquenessQuery });
  const uniquenessess: UniquenessCardProps[] = data.uniqueness.cards;

  console.log('dato: ', uniquenessess);

  const mergeData = (
    datoData: UniquenessCardProps[],
    staticData: UniquenessCardProps[],
  ) => {
    const result = staticData.map(y =>
      Object.assign(
        y,
        datoData.find(x => x.text === y.text),
      ),
    );
    return result;
  };
  mergeData(uniquenessess, staticUniquenessess);

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
          <ul className="flex flex-col gap-4 md:flex-row xl:gap-5">
            {uniquenessess.map(item => (
              <li key={item.id}>
                <UniquenessCard
                  id={item.id}
                  quantity={item.quantity}
                  text={item.text}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
