import { performRequest } from '@/lib/datocms';
import { consultancyPlatesQuery } from '@/lib/queries/consultancyPlatesQuery';

import { Plate, StaticData } from '@/components/common/ConsultationsCard/type';

import { ConsultationsCard } from '@/components/common/ConsultationsCard';

import consultations from '@/data/consultations.json';

export const ConsultationsList = async () => {
  const { consultationsList } = consultations;

  const { data } = await performRequest({ query: consultancyPlatesQuery });
  const plates = data?.consultancyPlate.plates;
  // console.log(plates);

  // const { id, title, textCard, linkText, href } = card;

  const mergeData = (datoData: Plate[], staticData: StaticData[]) => {
    const result = staticData.map(staticItem =>
      Object.assign(
        staticItem,
        datoData.find(datoItem => datoItem.text === staticItem.title),
      ),
    );
    // console.log(result);
    return result;
  };

  const dataToShow = plates
    ? mergeData(plates, consultationsList)
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
