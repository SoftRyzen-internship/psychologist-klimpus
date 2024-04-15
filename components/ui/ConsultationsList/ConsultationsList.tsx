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
  );
};
