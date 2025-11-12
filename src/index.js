import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Layout from "./Layout.jsx";
import Contactme from "./pages/Contactme.jsx";
const router = createHashRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/projects", element: <Projects /> },
        { path: "/blog", element: <Blog /> },
        { path: "/contact-me", element: <Contactme /> },
      ],
    },
  ],
  {
    basename: "/misba-ai",
  }
);

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    {/* If this doesn't show up, the crash is in createRoot/Parcel. */}
    <h1>DEPLOYMENT SUCCESS!</h1>
  </React.StrictMode>
);
