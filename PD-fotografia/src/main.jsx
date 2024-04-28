import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import Dogs from "./Dogs.jsx";
import PageNotFound from "./assets/components/PageNotFound.jsx";

const router = createBrowserRouter([
  {
    // path: "/PD-strona",
    path: "/",

    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/oferta-psy",
    element: <Dogs />,
    errorElement: <PageNotFound />,
  },
]);

// W korzeniu aplikacji, renderujemy ScrollToTop w RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>{/* Reszta aplikacji */}</RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
