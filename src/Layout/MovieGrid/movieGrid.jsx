import {Link} from "react-router-dom"

function MovieGrid({ movie, movieid }) {

    return (
        <div className="" data-testid="movie-card">
            <div className=" m-auto mb-[10px]">
                <Link to={`/movies/${movieid}`}><img className="m-auto md:m-auto"  data-testid=" movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" /></Link>              
                <div className="ml-[15px] mt-[8px]">
                    <h1 className="" data-testid="movie-title">{movie.title}</h1>
                    <span className="" data-testid="movie-release-date">{movie.release_date}</span>
                </div>
            </div>

        </div>
    )

}
export default MovieGrid;