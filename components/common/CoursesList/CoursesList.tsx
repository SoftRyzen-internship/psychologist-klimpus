'use client';
import React, { useState } from 'react';
import parse from 'html-react-parser';
import classNames from 'classnames';

import { EducationCard } from '@/components/ui/EducationCard';
import { Button } from '@/components/ui/Button';

import education from '@/data/education.json';
import data from '@/data/common.json';

import { CoursesListProps } from './types';

import './CoursesList.modules.css';

export const CoursesList: React.FC<CoursesListProps> = ({ courses }) => {
  const [isFull, setIsFull] = useState(false);
  const checkedCourses = courses ? courses : education.staticCoursesData;
  const dataToShow = isFull ? checkedCourses : checkedCourses.slice(0, 4);

  const styles = classNames('coursesList flex flex-col gap-3 md:gap-5');

  return (
    <div className="flex-col gap-2">
      <ul className={styles}>
        {dataToShow.map(item => (
          <EducationCard
            key={item.id}
            id={item.id}
            year={item.year}
            name={parse(item.name)}
          />
        ))}
      </ul>
      <Button
        className="w-[87px] py-[15px] md:leading-[1.35] xl:w-[94px] xl:text-lg"
        type="button"
        onClick={() => {
          setIsFull(!isFull);
        }}
      >
        {isFull ? data.buttonsText.hide : data.buttonsText.more}
      </Button>
    </div>
  );
};
