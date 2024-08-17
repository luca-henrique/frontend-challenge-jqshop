import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { Header } from "../components/molecules/Header/Header";
import { CreateCourse } from "../pages/CreateCourse/CreateCourse";

export const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<><Header /> <Outlet /></>}>
    <Route path="/" element={<Home />} />
    <Route path="create" element={<CreateCourse />} />
  </Route>
));