import React from 'react';

import { performRequest } from '@/lib/datocms';

import { coursesQuery } from '@/lib/queries/coursesQuery';

import parse from 'html-react-parser';

import { SectionTitle } from '@/components/common/SectionTitle';

import { EducationCard } from '@/components/ui/EducationCard';

import { EducationProps } from './types';

import education from '@/data/education.json';

import { CourseType } from '@/components/common/CoursesList/types';

import { CoursesList } from '@/components/common/CoursesList';

export const Education: React.FC<EducationProps> = async () => {
  const { data } = await performRequest({ query: coursesQuery });
  const courses: CourseType[] = data?.allCourses;

  return (
    <section className="section">
      <div className="container">
        <SectionTitle className="mb-6 text-mainBlack md:mb-10">
          {education.title}
        </SectionTitle>
        <div className="flex flex-col gap-4 border-b border-disabled pb-6 md:flex-row md:justify-between md:pb-7">
          <p className="subtitleAbout text-darkBlue md:leading-[1.35]">
            {education.subtitleCollegeDegree}
          </p>
          <EducationCard
            name={parse(education.collegeDegree.name)}
            year={education.collegeDegree.year}
          />
        </div>
        <div className="justify-between pt-6 md:flex md:pt-7">
          <div className="md:w-[232px]">
            <p className="subtitleAbout mb-3 text-darkBlue md:mb-6 md:leading-[1.35]">
              {education.subtitleCourses}
            </p>
            <p className="cardTextLg mb-4 text-clickBlack">
              {education.coursesDescription}
            </p>
          </div>
          <CoursesList courses={courses} className="" />
        </div>
      </div>
    </section>
  );
};
