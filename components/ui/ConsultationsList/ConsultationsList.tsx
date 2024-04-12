import { ConsultationsCard } from '../ConsultationsCard';

import consultations from '@/data/consultations.json';

export const ConsultationsList = () => {
  const { consultationsList } = consultations;

  return (
    <ul className="flex flex-col gap-4 xl:flex-row xl:gap-8">
      {consultationsList.map(item => {
        return (
          <li key={item.id}>
            <ConsultationsCard card={item} />
          </li>
        );
      })}
    </ul>
    // <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
    //   {featuresList.map(item => {
    //     return (
    //       <li key={item.id} className="featuresCard h-auto">
    //         <FeaturesCard card={item} />
    //       </li>
    //     );
    //   })}
    // </ul>
  );
};
