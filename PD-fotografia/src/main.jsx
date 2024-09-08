import ReactDOM from "react-dom/client";
import React, {Suspense} from "react";
import "./index.css";
import {ThemeProvider} from "@material-tailwind/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Lazy-loaded components
const Home = React.lazy(() => import("./Home.jsx"));
const Dogs = React.lazy(() => import("./Dogs.jsx"));
const Horses = React.lazy(() => import("./Horses.jsx"));
const Events = React.lazy(() => import("./Events.jsx"));
const PageNotFound = React.lazy(() =>
  import("./assets/components/Utils/PageNotFound.jsx")
);
const PolicyPrivacy = React.lazy(() =>
  import("./assets/components/Utils/PolicyPrivacy.jsx")
);
const Credits = React.lazy(() =>
  import("./assets/components/Utils/Credits.jsx")
);
const Regulations = React.lazy(() =>
  import("./assets/components/Utils/Regulations.jsx")
);

// Router setup
const router = createBrowserRouter([
  {
    // path: "/PD-strona",
    path: "/",
    element: <Home />,
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/oferta-psy",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Dogs />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/oferta-konie",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Horses />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/oferta-wydarzenia",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
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
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Regulations />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/Źródła",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Credits />
      </Suspense>
    ),
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
