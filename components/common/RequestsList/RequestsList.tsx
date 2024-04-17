import React from 'react';

import { RequestsListProps } from './type';

// import { ConsultationsRequestCardProps } from '@/components/ui/ConsultationsRequestCard/type';

import { ConsultationsRequestCard } from '@/components/ui/ConsultationsRequestCard';

import consultationsRequests from '@/data/consultationsRequests.json';

export const RequestsList: React.FC<RequestsListProps> = () =>
  // {
  // isFamily,
  // isGroup,
  // isIndividual,
  // }
  {
    // const { familyCards, individualCards, groupCards } = consultationsRequests;
    const { familyCards } = consultationsRequests;

    // let dataToShow: ConsultationsRequestCardProps[];

    // if (isFamily) {
    //   dataToShow = familyCards;
    // } else if (isIndividual) {
    //   dataToShow = individualCards;
    // } else if (isGroup) {
    //   dataToShow = groupCards;
    // } else {
    //   dataToShow = [];
    // }

    return (
      <ul className="flex flex-col gap-4">
        {familyCards.map(item => {
          return (
            <li key={item.id}>
              <ConsultationsRequestCard card={item} />
            </li>
          );
        })}
      </ul>
    );
  };
