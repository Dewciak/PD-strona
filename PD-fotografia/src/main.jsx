import ReactDOM from "react-dom/client";
import React, {Suspense} from "react";
import "./index.css";
import {ThemeProvider} from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dogs from "./Dogs.jsx";
import Horses from "./Horses.jsx";
import Events from "./Events.jsx";
import Home from "./Home.jsx";

const PageNotFound = React.lazy(() =>
  import("./assets/components/Utils/PageNotFound.jsx")
);
const PolicyPrivacy = React.lazy(() =>
  import("./assets/components/Utils/PolicyPrivacy.jsx")
);
const Regulations = React.lazy(() =>
  import("./assets/components/Utils/Regulations.jsx")
);

// Router setup
const router = createBrowserRouter([
  {
    path: "/PD-strona",
    // path: "/",
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
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PolicyPrivacy />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/Regulamin-Sesji",
    element: <Regulations />,
    errorElement: <PageNotFound />,
  },
  {
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
