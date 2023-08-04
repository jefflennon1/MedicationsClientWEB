import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import ImportFilePage from '../components/pages/ImportFilePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/imports",
    element: <ImportFilePage />
  }
]);

