import React from "react";
import { createBrowserRouter } from "react-router-dom";
import PageShell from "./PageShell";
import Home from "../pages/Home";
import NewsArchive from "../pages/NewsArchive";
import NewsPost from "../pages/NewsPost";
import People from "../pages/People";
import Person from "../pages/Person";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PageShell />,
    children: [
      { index: true, element: <Home /> },
      { path: "news", element: <NewsArchive /> },
      { path: "news/:slug", element: <NewsPost /> },
      { path: "people", element: <People /> },
      { path: "people/:slug", element: <Person /> }
    ]
  }
], { basename: "/" });
