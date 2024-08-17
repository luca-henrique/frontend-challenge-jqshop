import { all, call, put, takeLatest } from 'redux-saga/effects';


import {
  readCourseSuccess,
} from './actions';
import { courses } from '../../../mock/courses';

function* readCourses({ payload }: any): any {
  try {
    // const {data} = yield call(api.post, '/sign-in', payload);
    yield put(readCourseSuccess(courses));
  } catch (error: any) {
    console.log(error)
  }
}

function* coursesSagas() {
  yield all([
    takeLatest('course/read-course-request', readCourses),

  ]);
}

export default coursesSagas;
