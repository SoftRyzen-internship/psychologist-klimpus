// import { SiteLink } from '@/components/ui/SiteLink';
import { SectionTitle } from '@/components/ui/SectionTitle';

import aboutData from '@/data/about.json';

export const AboutSection = () => {
  const { sectionTitle, paragraphs } = aboutData;

  return (
    <section className="section">
      <div className="container">
        <SectionTitle>{sectionTitle}</SectionTitle>
        <ul>
          {paragraphs.map(paragraph => (
            <li key={paragraph.id}>
              <p>{paragraph.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
