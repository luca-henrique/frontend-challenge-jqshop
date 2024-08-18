import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initial-state';
import { createCourse, readCourseRequest, readCourseSuccess, deleteModuleByCourse, deleteLesson, addLessonByModule, addNewModuleByCourseId, deleteCourse, changeVisibilityModalCreateCouse,changeVisibilityModalEditCourse } from './actions';
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
    const { title, moduleId, lessonId } = action.payload
    const courses: Course[] = [...state.courses]
    state.courses = courses.map(course =>
      course.title === title
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
  })
});