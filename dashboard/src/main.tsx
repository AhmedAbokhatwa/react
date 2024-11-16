// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.tsx";
import Products from "./Pages/Products.tsx";
import store from './redux/store.tsx'; // Assuming Redux is in use
import { Provider } from 'react-redux';

const ErrorBoundary = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-red-600 text-xl font-bold">Something went wrong!</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />, // Custom error handling
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  
);
