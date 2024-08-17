import { all, fork } from 'redux-saga/effects';

import coursesSagas from './course/sagas';

export function* rootSaga() {
  yield all([fork(coursesSagas)]);
}
