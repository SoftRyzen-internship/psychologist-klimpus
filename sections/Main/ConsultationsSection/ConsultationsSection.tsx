import { performRequest } from '@/lib/datocms';
import { consultancyPlatesQuery } from '@/lib/queries/consultancyPlatesQuery';
import { ConsultationsList } from '@/components/common/ConsultationsList';
import { SectionTitle } from '@/components/common/SectionTitle';

import consultations from '@/data/consultations.json';
import { mergeData } from '@/utils/mergeData';

export const ConsultationsSection = async () => {
  const { preTitle, sectionTitle, sectionText, consultationsList } =
    consultations;

  const { data } = await performRequest({ query: consultancyPlatesQuery });
  const plates = data?.consultancyPlate.plates;

  const dataToShow = plates
    ? mergeData(plates, consultationsList)
    : consultationsList;

  return (
    <section className="section">
      <div className="container gap-4 md:flex xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles md:w-[165px] md:py-3 xl:w-[186px] xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div className="md:w-[527px] xl:w-[1012px]">
          <SectionTitle className="mb-6 w-[300px] md:mb-10 md:w-full xl:mb-16">
            {sectionTitle}
          </SectionTitle>
          <p className="mb-5 font-roboto text-base font-medium leading-[1.35] md:mb-9 md:text-lg md:leading-[1.35] xl:mb-10 xl:w-[796px] xl:text-xl xl:leading-[1.35]">
            {sectionText}
          </p>
          <ConsultationsList dataToShow={dataToShow} />
        </div>
      </div>
    </section>
  );
};
