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
  const [displayedCourses, setDisplayedCourses] = useState(4);

  const checkedCourses = courses ? courses : education.staticCoursesData;

  const toggleOpen = () => {
    setIsFull(!isFull);
    setDisplayedCourses(isFull ? 4 : checkedCourses.length);
  };

  return (
    <div className={classNames('flex-col gap-2')}>
      <ul className="coursesList">
        {checkedCourses.map((item, index) => (
          <EducationCard
            key={item.id}
            id={item.id}
            year={item.year}
            name={parse(item.name)}
            className={`transition-all duration-500 ${
              index < displayedCourses
                ? 'mb-3 max-h-[1000px] opacity-100 ease-in md:mb-5'
                : 'mb-0 max-h-0 opacity-0 ease-out'
            } ${index === displayedCourses - 1 && 'lastShown'} overflow-hidden`}
          />
        ))}
      </ul>
      <Button
        className="w-[87px] py-[15px] md:leading-[1.35] xl:w-[94px] xl:text-lg"
        type="button"
        onClick={toggleOpen}
      >
        {isFull ? data.buttonsText.hide : data.buttonsText.more}
      </Button>
    </div>
  );
};
