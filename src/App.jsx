
import {
  BrowserRouter,
  Route,
  Routes,
  // Outlet,
} from "react-router-dom";
import Home from "./Layout/Home/home";
import Movie_id from "./Layout/Movie_id/movieId"


// const Layout = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )

// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element:<Home/>
//       },
//       {
//          path: "/movies/:id",
//          element:<Movie_id />

//        }
//     ]
//   },
// ])

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path ="/" element ={<Home/>}/>
            <Route path ="movies/:id"element ={<Movie_id/>}/>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
