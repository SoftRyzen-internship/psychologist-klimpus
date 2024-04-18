export interface CoursesListProps {
  courses: CourseType[];
  className?: string;
}

export interface CourseType {
  id: string;
  name: string;
  position: number;
  year: number;
}
