import { courses } from '../../../mock/courses';
import { ICoursesState } from './types';

export const initialState: ICoursesState = {
  courses: courses,
  loading: false,
  
  courseId:"",
  
  openModalCreateCourse:false,
  
  openModalEditCourse:false,
  selectedCourse:{
    id:'',
    title: '',
    description: '',
  },
  
  openModalCreateModule:false,
  openModalEditModule:false,
  selectedModule:{ id:"",title:"",description:"" },
  
  openModalCreateLesson:false,
  openModalEditLesson:false,
  selectedLesson: {
    id: '',
    title: '',
    description: '',
    content: ''
  },
  
  courseTitle:'',
  moduleId:'',
  lessonId:''
};
