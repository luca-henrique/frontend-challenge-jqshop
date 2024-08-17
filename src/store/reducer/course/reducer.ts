import { createReducer } from '@reduxjs/toolkit';

import { initialState } from './initial-state';
import { addProduct } from './actions';

export const course = createReducer(initialState, (builder) => {
  builder.addCase(addProduct, (state, action) => {
    console.log("action.payload")
    state.courses = [...state.courses, action.payload]
  })
});