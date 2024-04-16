import { UniquenessCardProps } from '@/components/common/UniquenessCard/type';
import { Plate, StaticData } from '@/components/common/ConsultationsCard/type';

export const mergeData = (
  datoData: UniquenessCardProps[],
  staticData: UniquenessCardProps[],
) => {
  const result = staticData.map(staticItem =>
    Object.assign(
      staticItem,
      datoData.find(datoItem => datoItem.text === staticItem.text),
    ),
  );
  return result;
};

export const mergeConsultationsData = (
  datoData: Plate[],
  staticData: StaticData[],
) => {
  const result = staticData.map(staticItem =>
    Object.assign(
      staticItem,
      datoData.find(datoItem => datoItem.text === staticItem.title),
    ),
  );
  return result;
};
