import ReactDOM from "react-dom/client";

import Home from "./Home.jsx";
import "./index.css";
import {ThemeProvider} from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dogs from "./Dogs.jsx";
import Horses from "./Horses.jsx";
import Events from "./Events.jsx";
import PageNotFound from "./assets/components/Utils/PageNotFound.jsx";
import PolicyPrivacy from "./assets/components/Utils/PolicyPrivacy.jsx";
import Credits from "./assets/components/Utils/Credits.jsx";
import Regulations from "./assets/components/Utils/Regulations.jsx";
import React from "react";

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
  {
    path: "/oferta-konie",
    element: <Horses />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/oferta-wydarzenia",
    element: <Events />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/Polityka-Prywatności",
    element: <PolicyPrivacy />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/Regulamin-Sesji",
    element: <Regulations />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/Źródła",
    element: <Credits />,
    errorElement: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
