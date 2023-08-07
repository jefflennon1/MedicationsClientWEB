import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home/Home";
import ImportFilePage from '../components/pages/Imports/ImportPage';
import App from "../App";
import { NotFoundPage } from '../components/pages/Error/Error';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/imports",
        element: <ImportFilePage />
      }
    ]
  },
]);

