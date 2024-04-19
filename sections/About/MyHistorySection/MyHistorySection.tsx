import Image from 'next/image';

import { SectionTitle } from '@/components/common/SectionTitle';
import { SiteLink } from '@/components/ui/SiteLink';
import { ShowMore } from '@/components/ui/ShowMore';

import myHistoryData from '@/data/myHistory.json';
import data from '@/data/common.json';

import styles from './MyHistorySection.module.css';
import classNames from 'classnames';

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
    showMoreText,
    hideText,
  } = myHistoryData;

  const mobileButtonStyles = classNames([styles.button], 'md:hidden');

  return (
    <section className="section">
      <div className="container md:flex md:flex-col md:gap-12 xl:gap-20">
        <div className="md:flex xl:gap-[22px] mdOnly:items-center mdOnly:justify-between">
          <div className=" md:flex md:w-[346px] md:flex-col xl:w-[598px]">
            <SectionTitle className={`${styles.title} mb-6 md:mb-8 xl:mb-16`}>
              {title}
            </SectionTitle>
            <Image
              src={firstPhoto}
              alt={firstPhotoAlt}
              width={596}
              height={639}
              className="mb-4 md:hidden"
            />
            <p className=" mb-3 font-roboto text-[20px] font-semibold leading-[1.35] md:text-[22px] xl:mb-9 xl:w-[580px] xl:text-[24px]">
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
            className="mb-4 hidden aspect-video rounded-[20px] object-cover md:mb-0 md:block md:h-[477px] md:w-[306px] xl:h-[639px] xl:w-[596px]"
          />
        </div>

        <ShowMore showText={showMoreText} hideText={hideText} />

        <div className="hidden md:flex xl:gap-[123px] mdOnly:justify-between">
          <Image
            src={secondPhoto}
            alt={secondPhotoAlt}
            width={495}
            height={450}
            className="mb-4 aspect-video h-[390px] w-[328px] rounded-[20px] object-cover md:h-[390px] md:w-[306px] xl:h-[450px] xl:w-[495px]"
          />
          <div className="flex-col md:flex md:w-[343px] xl:w-[587px]">
            <p className=" mb-3 font-roboto text-[15px] font-normal leading-[1.5]  md:text-[18px] xl:mb-9 xl:w-[550px] xl:text-[20px] mdOnly:w-[334px]">
              {secondText}
            </p>
            <p className=" mb-3 font-roboto text-[15px] font-normal leading-[1.5] md:mb-8  md:text-[18px] xl:mb-9 xl:text-[20px]">
              {thirdText}
            </p>

            <SiteLink
              linkType="scroll"
              href={form}
              isAccent={true}
              className={styles.button}
            >
              {buttonText}
            </SiteLink>
          </div>
        </div>
        <SiteLink
          linkType="scroll"
          href={form}
          isAccent={true}
          className={mobileButtonStyles}
        >
          {buttonText}
        </SiteLink>
      </div>
    </section>
  );
};
