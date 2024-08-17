import { configureStore, Store, Tuple } from '@reduxjs/toolkit'
import createSagaMiddleware, { Task } from '@redux-saga/core';

import logger from 'redux-logger';

import { rootSaga } from './reducer/root-sagas';
import { rootReducer } from './reducer/root-reducer';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: () => new Tuple(sagaMiddleware, logger),
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']