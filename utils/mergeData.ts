import { UniquenessCardProps } from '@/components/ui/UniquenessCard/type';

export const mergeData = (
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
