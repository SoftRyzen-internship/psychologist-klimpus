// import { useRouter } from 'next/router';
// import consultations from '@/data/consultation.json';

// export const getConsultationByName = () => {
//   const router = useRouter();
//   const { consultationName } = router.query as { consultationName: string };

//   return consultations.find(
//     consultation => consultation.name === consultationName,
//   );
// };

// export async function getStaticProps({ params }) {
//   const post = await getPostData(params.consultations);

//   return {
//     props: {
//       post,
//     },
//   };
// }

// const consultationsData = [
//   {
//     id: '1',
//     name: 'Consultation 1',
//     text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     id: '2',
//     name: 'Consultation 2',
//     text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//   },
//   {
//     id: '3',
//     name: 'Consultation 3',
//     text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//   },
// ];

// // Функція для отримання всіх консультацій
// export const getAllConsultations = async () => {
//   return consultationsData;
// };

// // Функція для отримання консультації за ідентифікатором
// export const getConsultationById = async (id: string) => {
//   const consultation = consultationsData.find(item => item.id === id);
//   if (!consultation) throw new Error('Consultation not found.');
//   return consultation;
// };

// // Функція для пошуку консультацій за текстом
// export const getConsultationsBySearch = async (search: string) => {
//   const filteredConsultations = consultationsData.filter(item =>
//     item.text.includes(search),
//   );
//   return filteredConsultations;
// };
// import consultations from '@/data/consultation.json';

// async function getConsultationData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Помилка отримання даних:');
//     return null;
//   }
// }

// // Приклад використання функції
// const consultationURL = consultations;
// getConsultationData(consultationURL)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Помилка:', error.message);
//   });
