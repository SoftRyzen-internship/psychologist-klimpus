import Image from 'next/image';

import { SectionTitle } from '@/components/common/SectionTitle';
import { SiteLink } from '@/components/ui/SiteLink';

import aboutData from '@/data/about.json';

export const AboutSection = () => {
  const {
    sectionTitle,
    paragraphs,
    preTitle,
    link: { text, href },
    image,
    alt,
  } = aboutData;

  return (
    <section className="section">
      <div className="container md:grid md:grid-cols-[162px_527px] md:gap-4 xl:grid-cols-[186px_1010px] xl:gap-[18px]">
        <p className="mb-3 py-2 font-roboto text-base font-normal leading-[1.35] text-miniTitles  md:mb-0 md:py-3 xl:text-lg xl:leading-[1.35]">
          {preTitle}
        </p>
        <div>
          <SectionTitle className="mb-6 md:mb-10 xl:mb-16">
            {sectionTitle}
          </SectionTitle>
          <div className="xl:flex xl:flex-row-reverse xl:justify-between">
            <div>
              <ul className="mb-8 flex flex-col gap-4 md:mb-[52px] xl:mb-16 xl:w-[598px]">
                {paragraphs.map(paragraph => (
                  <li key={paragraph.id}>
                    <p className="font-roboto text-[15px] font-normal leading-[1.5] md:text-[18px] xl:text-[20px]">
                      {paragraph.text}
                    </p>
                  </li>
                ))}
              </ul>
              <SiteLink
                href={href}
                linkType="link"
                isAccent={true}
                className="notXL:mb-7"
              >
                {text}
              </SiteLink>
            </div>
            <Image
              src={image}
              alt={alt}
              width={845}
              height={1274}
              className="aspect-video  h-[421px] w-full rounded-[20px] object-cover object-top md:h-[357px] md:w-[278px] xl:h-[436px] xl:w-[289px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
