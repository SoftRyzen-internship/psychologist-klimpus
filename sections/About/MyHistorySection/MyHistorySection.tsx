import Image from 'next/image';

import { SectionTitle } from '@/components/common/SectionTitle';
import { SiteLink } from '@/components/ui/SiteLink';

import myHistoryData from '@/data/myHistory.json';
import data from '@/data/common.json';

import styles from './MyHistorySection.module.css';

export const MyHistorySection = () => {
  const {
    url: { form },
  } = data;

  const {
    title,
    afterTitle,
    text,
    secondText,
    thirdText,
    buttonText,
    firstPhoto,
    secondPhoto,
    firstPhotoAlt,
    secondPhotoAlt,
  } = myHistoryData;

  return (
    <section className="section">
      <div className="container md:flex md:flex-col md:gap-12 xl:gap-20">
        <div className="md:flex xl:gap-[22px] mdOnly:justify-between">
          <div className="md:flex md:w-[346px] md:flex-col xl:w-[598px]">
            <SectionTitle className={`${styles.title} mb-6 md:mb-8 xl:mb-16`}>
              {title}
            </SectionTitle>
            <Image
              src={firstPhoto}
              alt={firstPhotoAlt}
              width={596}
              height={639}
              className="mb-4  md:hidden"
            />
            <p className="xl:text mb-3 font-roboto text-[20px] font-semibold leading-[1.35] md:text-[22px] xl:text-[24px]">
              {afterTitle}
            </p>
            <p className=" mb-4 font-roboto text-[15px] font-normal leading-[1.5] md:text-[18px] xl:w-[562px] xl:text-[20px]">
              {text}
            </p>
          </div>
          <Image
            src={firstPhoto}
            alt={firstPhotoAlt}
            width={596}
            height={639}
            className="mb-4 hidden md:mb-0 md:block mdOnly:h-[477px] mdOnly:w-[306px] mdOnly:pt-8"
          />
        </div>

        <div className="md:flex xl:gap-[123px] mdOnly:justify-between">
          <Image
            src={secondPhoto}
            alt={secondPhotoAlt}
            width={495}
            height={450}
            className="mb-4 mdOnly:h-[390px] mdOnly:w-[306px]"
          />
          <div className="flex-col md:flex md:w-[346px] xl:w-[587px]">
            <p className=" mb-3 font-roboto text-[15px] font-normal leading-[1.5]  md:text-[18px] xl:mb-9 xl:text-[20px]">
              {secondText}
            </p>
            <p className=" mb-3 font-roboto text-[15px] font-normal leading-[1.5] md:mb-8  md:text-[18px] xl:mb-9 xl:text-[20px]">
              {thirdText}
            </p>

            <SiteLink
              linkType="scroll"
              href={form}
              isAccent={true}
              className="h-[62px] w-full rounded-[20px]"
            >
              {buttonText}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
};
