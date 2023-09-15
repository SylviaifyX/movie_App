
import image from "./../../assets/tv.png"
import image1 from "./../../assets/Menu.png"
// import banner from "./../../assets/Poster.jpg"
import SearchIcon from '@mui/icons-material/Search';
import imbd from "./../../assets/IMDB.png"
import rotten from "./../../assets/Rotten.png"
import { useEffect, useState } from "react";
import icon from "./../../assets/Icon.png"
import axios from "axios"

// import { MovieSharp } from "@mui/icons-material";


function Navbar() {
    const [banner, setBanner] = useState([]);
    console.log(banner)
    useEffect(() => {
        const fetchmovieData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/240?api_key=543affbe47ead4f79984688d45815285`
                );
                setBanner(response.data);
            } catch (error) {

                console.error(error);
            }

        };

        fetchmovieData();
    }, []);

    return (

        <div className="bg-auto bg-center  h-[500px] w-full relative">
            <div className="mt-[200px] md:mt-[120px] md:w-[20%] md:mx-[100px] absolute p-[8px] md:p-0">
                <div>
                    <p className="text-white text-[25px] md:text-[35px] font-bold">{banner.title}</p>
                </div>
                <div className="flex space-x-[30px] mt-[10px]">
                    <img src={imbd} alt="" />
                    <img src={rotten} alt="" />
                </div>

                <div className="md:text-white text-white mt-[20px] font-bold text-sm  md:mt-[10px]">{banner.overview}</div>

                <div className="flex bg-red-500 gap-[10px] items-center p-[8px] rounded-lg mt-[10px]">
                    <div>
                        <img src={icon} alt="" />
                    </div>

                    <p className="text-white ">watch Trailer</p>
                </div>


            </div>
            <img className="h-[500px] md:w-full object-cover" src={`https://image.tmdb.org/t/p/original/${banner.backdrop_path}`} alt="banner"></img>

            <div className="flex   flex-col  max-w-[1200px] mx-auto md:flex-row text-center w-full  md:w-[80%] top-[20px] md:ml-[10%] justify-between px-[10px]  absolute">
                <div className="flex items-center gap-[8px] mt-[18px] md:mt-0">
                    <img src={image} alt="image" />
                    <p className="text-white text-[16px]">MovieBox</p>
                </div>
                <div className="border mt-[8px] md:mt-0 w-full md:w-[60%] flex items-center rounded-md">
                    <input className=" w-full px-4 py-2 outline-none placeholder:text-[#9CA3AF] bg-transparent md:w-[95%]" type="text" placeholder="search for your movie " />
                    <span className="text-white"> <SearchIcon /> </span>


                </div>
                <div className="flex items-center gap-[8px] order-first md:order-none" >
                    <img className="ml-[8px] md:ml-0" src={image1} alt="img" />
                    <span className="text-white text-[18px]">signIn</span>

                </div>
            </div>


        </div>
    )
}

export default Navbar;