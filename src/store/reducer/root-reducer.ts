import { combineReducers } from 'redux';
import { course } from "./course/reducer"

export const rootReducer = combineReducers({
  course,
});

export type RootState = ReturnType<typeof rootReducer>;
