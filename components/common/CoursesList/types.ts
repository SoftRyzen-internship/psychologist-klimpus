export interface CoursesListProps {
  courses: CourseType[];
}

export interface CourseType {
  id: string;
  name: string;
  position: number;
  year: number;
}
