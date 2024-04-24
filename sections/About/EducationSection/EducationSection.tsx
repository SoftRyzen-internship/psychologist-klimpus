import React from 'react';
import parse from 'html-react-parser';

import { performRequest } from '@/lib/datocms';
import { coursesQuery } from '@/lib/queries/coursesQuery';

import { SectionTitle } from '@/components/common/SectionTitle';

import { CoursesList } from '@/components/common/CoursesList';
import { CourseType } from '@/components/common/CoursesList/types';

import education from '@/data/education.json';

import styles from './EducationSection.module.css';

export const EducationSection = async () => {
  const { data } = await performRequest({ query: coursesQuery });
  const courses: CourseType[] = data?.allCourses;

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionTitle className="mb-6 text-mainBlack md:mb-10 xl:mb-16">
          {education.title}
        </SectionTitle>
        <div className="flex flex-col gap-4 border-b border-disabled pb-6 md:flex-row md:justify-between md:pb-7 xl:pb-9">
          <p className="subtitleAbout text-darkBlue md:leading-[1.35]">
            {education.subtitleCollegeDegree}
          </p>
          <div className="mainText listItem xl:leading-[1.35]' flex gap-[31px] md:w-[403px] md:gap-5 md:leading-[1.5] xl:w-[598px] xl:pr-12">
            <p className="text-accent">{education.collegeDegree.year}</p>
            {parse(education.collegeDegree.name)}
          </div>
        </div>
        <div className="justify-between pt-6 md:flex md:pt-7 xl:pt-9">
          <div className="md:w-[232px] xl:w-[495px]">
            <p className="subtitleAbout mb-3 text-darkBlue md:mb-6 md:leading-[1.35]">
              {education.subtitleCourses}
            </p>
            <p className="cardTextLg mb-4 text-clickBlack md:mb-0 xl:leading-[1.35]">
              {education.coursesDescription}
            </p>
          </div>
          <CoursesList courses={courses} />
        </div>
      </div>
    </section>
  );
};
