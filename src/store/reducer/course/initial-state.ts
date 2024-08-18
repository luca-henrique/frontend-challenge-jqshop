import { ICoursesState } from './types';

export const initialState: ICoursesState = {
  courses: [],
  loading: false,
  
  openModalCreateCourse:false,
  
  openModalEditCourse:false,
  selectedCourse:{
    title: '',
    description: '',
  },
  
  courseTitle:'',
  moduleId:'',
  lessonId:''
};
