import React from 'react';
import Link from 'next/link';
import consultations from '@/data/consultation.json';

export default function ConsultationList() {
  return (
    <div>
      <h1>ConsultationList</h1>
      {consultations.map(consultation => (
        <p key={consultation.name}>
          <Link href={`/consultations/${consultation.name}`}>
            {consultation.text}
          </Link>
        </p>
      ))}
    </div>
  );
}
