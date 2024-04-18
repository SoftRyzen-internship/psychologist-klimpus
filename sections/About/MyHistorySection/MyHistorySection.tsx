import Image from 'next/image';

import { SectionTitle } from '@/components/common/SectionTitle';

import myHistoryData from '@/data/myHistory.json';
import { Button } from '@/components/ui/Button';
import { ShowMoreButton } from '@/components/ui/ShowMoreButton';

export const MyHistorySection = () => {
  const {
    title,
    afterTitle,
    text,
    secondText,
    thirdText,
    showMoreText,
    hideText,
    buttonText,
    firstPhoto,
    secondPhoto,
    firstPhotoAlt,
    secondPhotoAlt,
  } = myHistoryData;

  return (
    <section className="section">
      <div className="container">
        <SectionTitle>{title}</SectionTitle>
        <Image
          src={firstPhoto}
          alt={firstPhotoAlt}
          width={596}
          height={639}
          className="md:h-[477px] md:w-[306px]"
        />
        <p>{afterTitle}</p>
        <p>{text}</p>
        <ShowMoreButton showText={showMoreText} hideText={hideText}>
          <>
            <Image
              src={secondPhoto}
              alt={secondPhotoAlt}
              width={495}
              height={450}
              className="md:h-[390px] md:w-[306px]"
            />
            <p>{secondText}</p>
            <p>{thirdText}</p>
          </>
        </ShowMoreButton>
        <Button type="submit">{buttonText}</Button>
      </div>
    </section>
  );
};
