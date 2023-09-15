import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Home from "./Layout/Home/home";
import Movie_id from "./Layout/Movie_id/movieId"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies/:id",
    element: <Movie_id />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
