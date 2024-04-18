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
        <div className="">
          <SectionTitle className="mb-6 md:mb-8 xl:mb-16">{title}</SectionTitle>
          <Image
            src={firstPhoto}
            alt={firstPhotoAlt}
            width={596}
            height={639}
            className="mb-4 md:mb-0"
          />
          <p className="xl:text mb-3 font-roboto text-[20px] font-semibold leading-[1.35] md:text-[22px] xl:text-[24px]">
            {afterTitle}
          </p>
          <p className="lg:text-[20px] mb-4 font-roboto text-[15px] font-normal leading-[1.5] md:text-[18px]">
            {text}
          </p>
        </div>

        <ShowMoreButton showText={showMoreText} hideText={hideText}>
          <>
            <Image
              src={secondPhoto}
              alt={secondPhotoAlt}
              width={495}
              height={450}
              className="mb-4 md:mb-0 "
            />
            <p className="lg:text-[20px] mb-3 font-roboto text-[15px] font-normal leading-[1.5] md:mb-0 md:text-[18px]">
              {secondText}
            </p>
            <p className="lg:text-[20px] mb-4 font-roboto text-[15px] font-normal leading-[1.5] md:mb-0 md:text-[18px]">
              {thirdText}
            </p>
          </>
        </ShowMoreButton>

        <div className="hidden md:block">
          <Image
            src={secondPhoto}
            alt={secondPhotoAlt}
            width={495}
            height={450}
            className=""
          />

          <p className="lg:text-[20px] mb-3 font-roboto text-[15px] font-normal leading-[1.5] md:mb-0 md:text-[18px]">
            {secondText}
          </p>
          <p className="lg:text-[20px] mb-3 font-roboto text-[15px] font-normal leading-[1.5] md:mb-0 md:text-[18px]">
            {thirdText}
          </p>
        </div>
        <Button type="submit">{buttonText}</Button>
      </div>
    </section>
  );
};
