import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import SkiTourList from "./SkiTourList";
import Calendar from "./Calendar";
import About from "./About";
import AchievementsSection from "./AchievementsSection";
import Contact from "./Contact";
import Privacy from "./Privacy";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "formats",
      element: <App />,
    },
    {
      path: "races",
      element: <App />,
    },
    {
      path: "prices",
      element: <App />,
    },
    {
      path: "additional-services",
      element: <App />,
    },
    {
      path: "skitour-chechlist",
      element: <SkiTourList />,
    },
    {
      path: "calendar",
      element: <Calendar />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "achievements",
      element: (
        <AchievementsSection onBack={() => window.location.assign("/")} />
      ),
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "privacy",
      element: <Privacy />,
    },
  ],
  { basename: "/" },
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
