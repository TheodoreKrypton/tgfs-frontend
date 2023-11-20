import { Tasks } from "src/components/Tasks";
import { Welcome } from "src/components/Welcome";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/tasks" element={<Tasks />} />
    </>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
