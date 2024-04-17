import consultations from '@/data/consultation.json';

interface Props {
  params: {
    slug: string;
  };
}

const SinglePage = ({ params }: Props) => {
  const consultation = consultations.find(
    consultation => consultation.name === params.slug,
  );

  console.log(consultation);

  return (
    <div className="container">
      <div>
        <p>{consultation?.name}</p>
        <p>{consultation?.title}</p>
      </div>
    </div>
  );
};

export default SinglePage;
