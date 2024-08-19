import { createAction } from "@reduxjs/toolkit";
import { Course } from "../../../@types/course";
import { Module } from "../../../@types/module";

// Course
export const readCourseRequest = createAction('course/read-course-request')
export const readCourseSuccess = createAction<Course[]>('course/read-course-success')

export const createCourse = createAction<Course>('course/create-new-course');
export const deleteCourse = createAction<string>('course/delete-course')
export const editCourse = createAction<any>("course/edit-course")

// Module
export const addNewModuleByCourseId = createAction<any>('course/add-new-module-by-course-id')
export const addModuleByCourse = createAction<Module>('course/add-module-by-course')
export const deleteModuleByCourse = createAction<any>('course/delete-module-by-course')
export const editModuleByCourse = createAction<any>('course/edit-module-by-course')

// Lesson
export const addLessonByModule = createAction<any>('course/add-lesson-by-module')
export const deleteLesson = createAction<any>("course/delete-lesson")
export const editLesson = createAction<any>("course/edit-lesson")

// Modal

export const changeVisibilityModalCreateCouse = createAction('course/change-visibility-modal-create-course')
export const changeVisibilityModalEditCourse = createAction<any>('course/change-visibility-modal-edit-course')

export const changeVisibilityModalCreateModule = createAction<any>('course/change-visibility-modal-create-module')
export const changeVisibilityModalEditModule = createAction<any>('course/change-visibility-modal-edit-module')

export const changeVisibilityModalCreateLesson = createAction<any>('course/change-visibility-modal-create-lesson')
export const changeVisibilityModalEditLesson = createAction<any>('course/change-visibility-modal-edit-lesson')