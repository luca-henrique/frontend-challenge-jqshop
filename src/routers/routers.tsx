import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Header } from "../components/molecules/Header/Header";
import { CreateCourse } from "../pages/CreateCourse/CreateCourse";
import { useAppDispatch } from "../hook/useStore";
import { readCourseRequest } from "../store/reducer/course/actions";
import { useEffect } from "react";

const Layout = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(readCourseRequest())
  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="create" element={<CreateCourse />} />
  </Route>
));