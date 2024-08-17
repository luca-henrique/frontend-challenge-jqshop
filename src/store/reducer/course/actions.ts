import { createAction } from "@reduxjs/toolkit";
import { Course } from "../../../@types/course";


export const readProductRequest = createAction('product/read-product-request');

export const addProduct = createAction<Course>('cart/add-product')