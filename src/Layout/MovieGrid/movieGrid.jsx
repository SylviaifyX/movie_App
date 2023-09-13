
function MovieGrid({ movie }) {

    return (
        <div className="" data-testid="movie-card">
            <div className="md:w-[200px]  m-auto mb-[10px]">
                <img className="m-auto md:m-auto"  data-testid=" movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                <div className="ml-[15px] mt-[8px]">
                    <h1 className="" data-testid="movie-title">{movie.title}</h1>
                    <span className="" data-testid="movie-release-date">{movie.release_date}</span>
                </div>
            </div>

        </div>
    )

}
export default MovieGrid;