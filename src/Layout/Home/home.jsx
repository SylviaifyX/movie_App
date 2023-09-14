// import Movie from "../Movie/movieList";
// import Navbar from "./Component/Navbar/nav";
import Footer from "../../Component/Footer/footer"
import Movie from "../Movie/movieList";
import Navbar from "../../Component/Navbar/nav"



function Home() {
  return (
    <>
      <Navbar />   
       <Movie/>
      <Footer/> 
    </>
  )
}
export default Home;