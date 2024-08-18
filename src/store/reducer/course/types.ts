import { Course } from "../../../@types/course";

export interface ICoursesState {
  courses: Course[];
  loading: boolean;
  
  openModalCreateCourse:boolean;
  
  openModalEditCourse:boolean;
  courseTitle:string;
  selectedCourse: Course
  
  moduleId:string;
  lessonId:string
  
  
}


