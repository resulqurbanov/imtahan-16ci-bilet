import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import About from "./pages/about";
import Add from "./pages/Add";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Home from "./pages/Home";
import Pages from "./pages/pages";
import Services from "./pages/services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
    {
    path: "/Add",
    element: <Add/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/pages",
    element: <Pages/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
