// eslint-disable-file prettier/prettier
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import Project10 from "./Project10";
import SkiTourList from "./SkiTourList";
import Calendar from "./Calendar";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "project10",
      element: <Project10 />,
    },
    {
      path: "skitour-chechlist",
      element: <SkiTourList />,
    },
    {
      path: "calendar",
      element: <Calendar />,
    },
  ],
  { basename: "/" }
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
