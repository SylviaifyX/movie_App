import { useEffect, useState } from "react";
import MovieGrid from "../MovieGrid/movieGrid";
import axios from "axios"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


// const data = [
// testing with dummy data//
//     {
//         id:1,
//         Title:'Barbie',
//         movieDate:'Jul 19, 2023',
//         img:'https://www.themoviedb.org/t/p/w220_and_h330_face/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'

//     },

// ]


function Movie() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/top_rated?api_key=543affbe47ead4f79984688d45815285'
                );
                setMovie(response.data.results.slice(0, 10));
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-evenly">
                <div className="mt-[30px]">
                    <h1 className="font-bold text-xl">Featured Movies</h1>

                </div>
                <div className="mt-[30px]">
                    <span className="text-red-500 font-bold">see more</span><span className='text-red-500'><ChevronRightIcon /></span>
                </div>
            </div>

            <div className="grid grid-cols-1 p-[20px] xs:grid-cols-2 xs:gap-[8px] xs:p-[20px] sm:grid-cols-3 sm:gap-[8px] md:grid-cols-3 lg:grid-cols-4
                items-center justify-center mt-[30px] md:p-3.5 sm:p-[20px]">
                    
                {movie.map((movie) => {
                    return <MovieGrid movie={movie} key={movie.id} movieid={movie.id} />
                })}
            </div>

        </div>
    )
}

export default Movie;