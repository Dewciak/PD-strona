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

const router = createBrowserRouter([
  {
    path: "/PD-strona",
    element: <Home />,
    errorElement: <div>404 coś poszło nie tak</div>,
  },
  {
    path: "/oferta-psy",
    element: <Dogs />,
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
