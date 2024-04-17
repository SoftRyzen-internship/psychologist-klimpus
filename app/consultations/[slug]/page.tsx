// import React from 'react';
// import { useRouter } from 'next/navigation';
// import consultations from '@/data/consultation.json';
// // import { getConsultationByName } from '@/utils/getConsultationByName';

// const ConsultationPage = () => {
//   const router = useRouter();

//   const { consultationName } = router.query as { consultationName: string }; // Використано деструктуризацію та вказано тип

//   const consultation = consultations.find(
//     consultation => consultation.name === consultationName,
//   );

//   return (
//     <div>
//
//       {consultation && (
//         <>
//           <h1>Consultation: {consultation.name}</h1>
//           <p>Content: {consultation.text}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default ConsultationPage;

// import React from 'react';
// import ConsultationPage from '@/components/common/Consultation/Consultation';

// const Consultation = () => {
//   return (
//     <div>
//       <ConsultationPage />
//     </div>
//   );
// };

// export default Consultation;
// import consultations from '@/data/consultation.json';

// interface Consultation {
//   name: string;
//   text: string;
// }

// interface ConsultationPageProps {
//   consultation: Consultation;
// }

// export const ConsultationPage = ({ consultation }: ConsultationPageProps) => {
//   return <div>{consultation.text}</div>;
// };

// export default ConsultationPage;

// import { useRouter } from 'next/router';
// 'use client';

// import { useRouter } from 'next/navigation';

// export default function ConsultationInfo() {
//   const router = useRouter();
//   console.log(router, 'Consultation');
//   return <div>Info</div>;
// }
import consultations from '@/data/consultation.json';

interface Props {
  params: {
    slug: string;
  };
}

const SinglePage = ({ params }: Props) => {
  console.log(params.slug, 'Slug');

  return (
    <div>
      {consultations.map(consultation => (
        <div key={consultation.name}>
          <p>{consultation.name}</p>
          <p>{consultation.text}</p>
        </div>
      ))}
    </div>
  );
};

export default SinglePage;
