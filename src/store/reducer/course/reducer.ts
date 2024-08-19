import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { createCourse, readCourseRequest, readCourseSuccess, deleteModuleByCourse, deleteLesson, addLessonByModule, addNewModuleByCourseId, deleteCourse, changeVisibilityModalCreateCouse,changeVisibilityModalEditCourse, editCourse, changeVisibilityModalCreateModule, changeVisibilityModalEditModule, editModuleByCourse, changeVisibilityModalCreateLesson, changeVisibilityModalEditLesson, editLesson } from './actions';
import { courses } from '../../../mock/courses';
import { Course } from '../../../@types/course';
import { uuidv4 } from '../../../pages/CreateCourse/CreateCourse';

export const course = createReducer(initialState, (builder) => {
  builder.addCase(createCourse, (state, action) => {
    state.courses = [...state.courses, action.payload]
  }).addCase(deleteCourse, (state, action) => {
    state.courses = state.courses.filter(course => course.title !== action.payload)
  }).addCase(readCourseRequest, (state, action) => {
    state.loading = true
  }).addCase(readCourseSuccess, (state, action) => {
    state.loading = false
    state.courses = courses
  }).addCase(deleteModuleByCourse, (state, action) => {
    const { courseTitle, moduleId } = action.payload
    const courses: Course[] = [...state.courses]
    state.courses = courses.map(course =>
      course.title === courseTitle
        //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
        ? { ...course, modules: course.modules.filter(module => module.id !== moduleId) }
        : course
    )
  }).addCase(deleteLesson, (state, action) => {
    const { courseTitle, moduleId, lessonId } = action.payload
    const courses: Course[] = [...state.courses]
    state.courses = courses.map(course =>
      course.title === courseTitle
        ? {
          ...course,
          //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
          modules: course.modules.map(module =>
            module.id === moduleId
              ? {
                ...module,
                //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
                lessons: module.lessons.filter(lesson => lesson.id !== lessonId)
              }
              : module
          )
        }
        : course
    )
  }).addCase(addLessonByModule, (state, action) => {
    const { courseTitle, moduleId, lesson } = action.payload
    
    console.log(courseTitle,moduleId, lesson)
    
    const courses: Course[] = [...state.courses]
    state.courses = courses.map(course =>
      course.title === courseTitle
        ? {
            ...course,
             //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
            modules: course.modules.map(module =>
              module.id === moduleId
                ? {
                    ...module,
                    lessons: [
                       //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
                      ...module.lessons,
                      {
                        ...lesson,
                        id: uuidv4()
                      }
                    ]
                  }
                : module
            )
          }
        : course
    )
  })
  .addCase(addNewModuleByCourseId, (state, action) => {
    const  {courseTitle, module} = action.payload
    const courses: Course[] = [...state.courses]
    state.courses = courses.map(course =>
      course.title === courseTitle
       //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
        ? { ...course, modules: [...course.modules, module] }
        : course
    )
  }).addCase(changeVisibilityModalCreateCouse, (state, action) => {
    state.openModalCreateCourse = !state.openModalCreateCourse
  }).addCase(changeVisibilityModalEditCourse, (state, action) => {
    state.courseTitle = action.payload
    const searchCourseByTitle = courses.filter((course) => course.title === action.payload)[0]
    state.selectedCourse = searchCourseByTitle
    state.openModalEditCourse = !state.openModalEditCourse
  }).addCase(editCourse, (state, action) => {
    const {titleCourse, updatedCourse} = action.payload
    const courses: Course[] = [...state.courses]
    state.courses =  courses.map(course =>
      course.title === titleCourse ? { ...course, ...updatedCourse } : course
    )
  }).addCase(changeVisibilityModalCreateModule, (state, action) => {
    state.courseTitle = state.openModalCreateModule ? '' : action.payload
    state.openModalCreateModule = !state.openModalCreateModule 
  }).addCase(changeVisibilityModalEditModule, (state, action) => {
    const {courseTitle, moduleId} = action.payload
    const course = courses.find(course => course.title === courseTitle);
    const module = course?.modules?.find(module => module.id === moduleId);
     //@ts-ignore : não sei porque mas está dando erro na tipagem do modules...
    state.selectedModule = module
    
    state.courseTitle = state.openModalEditModule ? '' : courseTitle
    state.openModalEditModule = !state.openModalEditModule 
  }).addCase(editModuleByCourse, (state, action) => {
    const  {courseTitle, moduleId,updatedModule} = action.payload
    const courses: Course[] = [...state.courses]
    state.courses = courses.map(course =>
      course.title === courseTitle
        ? {
            ...course,
            //@ts-ignore
            modules: course.modules.map(module =>
              module.id === moduleId ? { ...module, ...updatedModule } : module
            )
          }
        : course
    )
  }).addCase(changeVisibilityModalCreateLesson, (state, action) => {
    
    const {moduleId, courseTitle} = action.payload
    
    state.courseTitle = courseTitle
    state.moduleId = moduleId
   
    
    state.openModalCreateLesson = !state.openModalCreateLesson 
  })
  .addCase(changeVisibilityModalEditLesson, (state, action) => {
    
    const {moduleId, courseTitle, lessonId} = action.payload
    
    
    
    const course = courses.find(course => course.title === courseTitle);
    
    
    const module = course?.modules?.find(module => module.id === moduleId);
    const lesson = module?.lessons?.find(lesson => lesson.id === lessonId)
    
    
    
    state.openModalEditLesson = !state.openModalEditLesson
    
      //@ts-ignore
    state.selectedLesson = lesson
    state.courseTitle = !state.openModalEditLesson ? '' : courseTitle
    state.moduleId = moduleId
    state.lessonId = lessonId
  })
  .addCase(editLesson, (state, action) => {
    
    const {moduleId, courseTitle, lessonId,updatedModule} = action.payload
    
    const courses: Course[] = [...state.courses]
   
    
    state.courses =  courses.map(course =>
      course.title === courseTitle
        ? {
            ...course,
            modules: course?.modules?.map(module =>
              module.id === moduleId
                ? {
                    ...module,
                    lessons: module?.lessons?.map(lesson =>
                      lesson.id === lessonId ? { ...lesson, ...updatedModule } : lesson
                    )
                  }
                : module
            )
          }
        : course
    )
  })
});