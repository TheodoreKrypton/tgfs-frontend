import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Tasks } from "./components/Tasks";
import { Welcome } from "./components/Welcome";
import { createTelegramTheme } from "./ThemeProvider";
import { inTelegram } from "./api/webapp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/tasks" element={<Tasks />} />
    </>
  ),
  {
    basename: "/tgfs-frontend",
  }
);

export const App = () => {
  console.log("inTelegram", inTelegram());

  if (!inTelegram()) {
    return <RouterProvider router={router} />;
  }
  const theme = createTelegramTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />;
    </ThemeProvider>
  );
};
