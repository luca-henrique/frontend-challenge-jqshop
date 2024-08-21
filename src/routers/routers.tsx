import {
  createBrowserRouter,
} from "react-router-dom";

import { Home } from "../pages/Home/Home";

import { DetailCourse } from "../pages/DetailCourse/DetailCourse";

export const router = createBrowserRouter([
  {
    // it renders this element
    element: <Home />,

    // when the URL matches this segment
    path: "/",

    // with this data loaded before rendering
    loader: async ({ request, params }) => {
      return fetch(
        `/fake/api/teams/${params.teamId}.json`,
        { signal: request.signal }
      );
    },

    // performing this mutation when data is submitted to it
    action: async ({ request }) => {
      return console.log(await request.formData());
    },

    // and renders this element in case something went wrong
    errorElement: <></>,
  },
  {
    // it renders this element
    element: <DetailCourse />,

    // when the URL matches this segment
    path: "/course/:courseId",

    // with this data loaded before rendering
    loader: async ({ request, params }) => {
      return fetch(
        `/fake/api/teams/${params.teamId}.json`,
        { signal: request.signal }
      );
    },

    // performing this mutation when data is submitted to it
    action: async ({ request }) => {
      return console.log(await request.formData());
    },

    // and renders this element in case something went wrong
    errorElement: <></>,
  },
]);