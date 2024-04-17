'use client';

import React from 'react';
import { useRouter } from 'next/router';
import consultations from '@/data/consultation.json';

export const getConsultationByName = (consultationName: string) => {
  return consultations.find(
    consultation => consultation.name === consultationName,
  );
};

const ConsultationPage = () => {
  const router = useRouter();
  const { consultationName } = router.query as { consultationName: string };

  const consultation = getConsultationByName(consultationName);

  return (
    <div>
      {consultation && (
        <>
          <h1>Consultation: {consultation.name}</h1>
          <p>Content: {consultation.text}</p>
        </>
      )}
    </div>
  );
};

export default ConsultationPage;
