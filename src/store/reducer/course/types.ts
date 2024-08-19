import { Course } from "../../../@types/course";
import { Lesson } from "../../../@types/lesson";
import { Module } from "../../../@types/module";

export interface ICoursesState {
  courses: Course[];
  loading: boolean;
  
  openModalCreateCourse:boolean;
  openModalEditCourse:boolean;
  courseTitle:string;
  selectedCourse: Course
  
  
  openModalCreateModule:boolean;
  openModalEditModule:boolean;
  selectedModule: Module
  
  openModalCreateLesson:boolean;
  openModalEditLesson:boolean;
  selectedLesson: Lesson
  
  moduleId:string;
  lessonId:string
  
  
}


