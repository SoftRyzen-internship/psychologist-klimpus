import { UniquenessCardProps } from '@/components/common/UniquenessCard/type';

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
