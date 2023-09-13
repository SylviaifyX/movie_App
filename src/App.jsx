
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navbar from "./Component/Navbar/nav";
import Footer from "./Component/Footer/footer"
import Home from "./Layout/Home/home";



const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      // {
      //    path: "/movies/:id",
      //    element:<movieList/>
      //  }
    ]
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
