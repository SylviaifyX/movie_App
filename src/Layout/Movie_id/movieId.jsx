import image1 from "./../../assets/Menu.png"
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import QueuePlayNextOutlinedIcon from '@mui/icons-material/QueuePlayNextOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import LogoutIcon from '@mui/icons-material/Logout';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import image from "./../../assets/pic.png"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

function Movie_id() {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true);
    const [movieInfo, setmovieInfo] = useState()

    console.log(movieInfo);

    useEffect(() => {
        const fetchmovieData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=543affbe47ead4f79984688d45815285`
                );
                setmovieInfo(response.data);
            } catch (error) {

                console.error(error);
            } finally {
                setIsLoading(false)
            }

        };

        fetchmovieData();
    }, []);

    return (

        <>
            {!isLoading && (<div className=" h-screen flex flex-col  md:flex md:flex-row" >

            <div className="w-full  md:w-[20%] md:rounded-r-[50px] border-2 space-y-[30px]">
                <div className="flex flex-col ml-[30px] gap-[20px]">
                    <div className="flex items-center space-x-[10px] mt-[20px]">
                        <Link className="" to="/"><img className="w-[30px]" src={image1} alt="" /></Link>                       
                        <p  className="font-bold r">MovieBox</p>
                    </div>
                    <div className="flex items-center space-x-[10px] mt-[40px]">
                        <span className="text-gray-300"><CottageOutlinedIcon /> </span>
                        <p className="text-base cursor-pointer">Home</p>
                    </div>
                    <div className="flex items-center space-x-[10px]">
                        <span className="text-gray-300"><VideoCameraBackOutlinedIcon /> </span>
                        <p className="cursor-pointer">Movies</p>

                    </div>
                    <div className="flex items-center space-x-[10px]">
                        <span className="text-gray-300"><QueuePlayNextOutlinedIcon /></span>
                        <p className="cursor-pointer">Tv Series</p>

                    </div>
                    <div className="flex items-center space-x-[10px] cursor-pointe">
                        <span className="text-gray-300"><UpcomingIcon /> </span>
                        <p className="cursor-pointer">Movies</p>

                    </div>
                </div>
                <div className="mt-[20px] ml-[30px] border w-[70%] rounded-md p-[20px] pt-[20px] flex flex-col">
                    <p className="text-sm mb-[20px]">play movie quizes<br />and earn free<br />tickets</p>

                    <span className="text-sm mb-[20px]">50% people are playing<br /> now</span>
                    <button className="bg-red-500 text-white p-[5px] rounded-full">start playing</button>
                </div>
                <div className="flex ml-[30px] space-x-[10px]">
                    <span><LogoutIcon /></span>
                    <p>Log out</p>
                </div>
            </div>



            <div className="md:w-[80%] flex flex-col">
                <div className="bg-yellow-500 h-[300px] mx-[20px] mt-[20px]">
                    <img className="h-full w-full object-cover" src={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`} alt="" />
                </div>
                <div className=" flex flex-col mx-[20px]">
                    <div className="flex">
                        <div className="flex flex-col w-[70%]">
                            <div className="flex mt-[20px]">
                                <div className="space-x-[20px]">
                                    <span className="font-bold">{movieInfo.title} </span>
                                    <span className="font-bold">. 2022</span>
                                    <span className="font-bold">. PG-13</span>
                                    <span className="font-bold">{movieInfo.runtime}</span>
                                </div>

                                <div className="space-x-[20px] ml-[30px]">
                                    <span className="text-sm text-red-300 border rounded-full py-[3px] px-[10px]">Action</span>
                                    <span className="text-sm text-red-300 border rounded-full py-[3px] px-[10px]">Drama</span>
                                </div>
                            </div>
                            <div className="mt-[10px]">
                                <p className="text-sm">{movieInfo.overview}
                                </p>
                            </div>
                        </div>
                        <div className="w-[30%] flex flex-col">
                            <div className="mt-[20px] ml-[60px] space-x-[10px]">
                                <span className="text-yellow-500"><StarBorderIcon /></span>
                                <span className="text-gray-300">8.5</span>
                                <span className="font-bold">350k</span>
                            </div>
                            <div className="ml-[20px]">
                                <button className="bg-red-500 w-full p-[5px] text-white rounded-lg">see more</button>
                            </div>
                            <div className="ml-[20px] mt-[8px]">
                                <button className="bg-[#FEF2F2] w-full p-[5px] border border-[#F87171] rounded-lg">more watch options</button>
                            </div>


                        </div>
                    </div>
                    <div className=" flex  mt-[20px]">
                        <div className=" w-[70%] flex flex-col gap[9px]">
                            <p>Director: <span className="text-red-500">Joseph kosinski</span></p>
                            <p>Writer: <span className="text-red-500">Jim Cash, Jack Epps Jr, Peter Craig</span> </p>
                            <p>Stars: <span className="text-red-500">Tom Cruise, Jennifer Connelly, Miles Teller</span></p>

                            <div className="flex space-x-[20px] mt-[20px]">
                                <div className="bg-red-500 w-[30%] p-[5px]">
                                    <p className="text-center text-white text-sm">Top rated movie</p>
                                </div>
                                <div className="bg-[#FEF2F2] w-[30%] p-[5px] border border-[#F87171]">
                                    <p className="text-center text-sm">Award Nomination</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%] ">                        
                            <div className="w-[90%] ml-[30px]">
                                <img className="object-cover" src={image} alt=""></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>)}
        </>


    )
}
export default Movie_id;