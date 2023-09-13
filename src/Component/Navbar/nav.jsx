
import image from "./../../assets/tv.png"
import image1 from "./../../assets/Menu.png"
import banner from "./../../assets/Poster.jpg"
import SearchIcon from '@mui/icons-material/Search';


function Navbar() {
    return (
        <div className="bg-auto bg-center  h-[500px] w-full relative bg-red-500">
            <img className="h-[500px] md:w-full object-cover" src={banner} alt="banner"></img>
            <div className="flex  flex-col  md:flex-row text-center w-full  md:w-[80%] top-[20px] md:ml-[10%] justify-between px-[10px]  absolute">
                <div className="flex items-center gap-[8px] mt-[18px] md:mt-0">
                    <img src={image} alt="image" />
                    <p className="text-white text-[16px]">MovieBox</p>
                </div>
                <div className="border mt-[8px] md:mt-0 w-full md:w-[60%] flex items-center rounded-md">
                    <input className=" w-full px-4 py-2 outline-none placeholder:text-[#9CA3AF] bg-transparent md:w-[95%]"type="text" placeholder="search for your movie "  />
                    <span className="text-white"> <SearchIcon/> </span>


                </div>
                <div className="flex items-center gap-[8px] order-first md:order-none" >
                    <img className="ml-[8px] md:ml-0"src={image1} alt="img" />
                    <span className="text-white text-[18px]">signIn</span>

                </div>
            </div>


        </div>
    )
}

export default Navbar;