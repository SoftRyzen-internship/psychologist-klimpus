import { performRequest } from '@/lib/datocms';
import { consultancyPlatesQuery } from '@/lib/queries/consultancyPlatesQuery';

import { ConsultationsCard } from '@/components/common/ConsultationsCard';

import consultations from '@/data/consultations.json';
import { mergeConsultationsData } from '@/utils/mergeData';

export const ConsultationsList = async () => {
  const { consultationsList } = consultations;

  const { data } = await performRequest({ query: consultancyPlatesQuery });
  const plates = data?.consultancyPlate.plates;

  const dataToShow = plates
    ? mergeConsultationsData(plates, consultationsList)
    : consultationsList;

  return (
    <ul className="flex flex-col gap-4 xl:flex-row xl:gap-8">
      {dataToShow.map(item => {
        const { title, textCard, format, frequency, duration, linkText, href } =
          item;
        return (
          <li key={item.id}>
            <ConsultationsCard
              title={title}
              textCard={textCard}
              format={format}
              frequency={frequency}
              duration={duration}
              linkText={linkText}
              href={href}
            />
          </li>
        );
      })}
    </ul>
  );
};
