import React from 'react';

import parse from 'html-react-parser';

import { performRequest } from '@/lib/datocms';

import { coursesQuery } from '@/lib/queries/coursesQuery';

import classNames from 'classnames';

import staticCoursesData from '@/data/courses.json';

import { CourseType, CoursesListProps } from './types';

import './CoursesList.modules.css';

export const CoursesList: React.FC<CoursesListProps> = async ({
  className,
}) => {
  const { data } = await performRequest({ query: coursesQuery });
  const courses: CourseType[] = data?.allCourses;

  const datatoShow = courses ? courses : staticCoursesData;

  const styles = classNames(
    'coursesList flex flex-col gap-3 md:gap-5',
    className,
  );

  return (
    <ul className={styles}>
      {datatoShow
        .sort(
          (firstCourse, secondCourse) =>
            firstCourse.position - secondCourse.position,
        )
        .map(item => (
          <li
            key={item.id}
            className="mainText listItem flex gap-[31px] md:gap-5"
          >
            <p className="text-accent">{item.year}</p>
            {parse(item.name)}
          </li>
        ))}
    </ul>
  );
};
