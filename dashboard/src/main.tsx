// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import About from "./Pages/About.tsx";
import Products from "./Pages/Products.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Eroooo..........</h1>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <h1>Eroooo..........</h1>,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <h1>Eroooo..........</h1>,
  },
]);
const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    {/* <App title={" Products"} /> */}
    <RouterProvider  router={router}/>
  </React.StrictMode>
);
