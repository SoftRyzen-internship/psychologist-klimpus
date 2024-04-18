import { performRequest } from '@/lib/datocms';
import { consultancyPlatesQuery } from '@/lib/queries/consultancyPlatesQuery';

import { Item } from '@/components/common/ConsultationsCard/type';

import { ConsultationsCard } from '@/components/common/ConsultationsCard';

import consultations from '@/data/consultations.json';
import { mergeData } from '@/utils/mergeData';

export const ConsultationsList = async () => {
  const { consultationsList } = consultations;

  const { data } = await performRequest({ query: consultancyPlatesQuery });
  const plates = data?.consultancyPlate.plates;

  const dataToShow = plates
    ? mergeData(plates, consultationsList)
    : consultationsList;

  return (
    <ul className="flex flex-col gap-4 xl:flex-row xl:gap-8">
      {dataToShow.map((item: Item) => {
        return (
          <li key={item.id}>
            <ConsultationsCard item={item} />
          </li>
        );
      })}
    </ul>
  );
};
