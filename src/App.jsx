import Home from "./Layout/Home/home";
import Movie_id from "./Layout/Movie_id/movieId"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "movies/:id",
    element: :<Movie_id />,
  },
]);

function App() {
  return  <RouterProvider router={router} /> 
}

export default App
