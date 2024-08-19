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
