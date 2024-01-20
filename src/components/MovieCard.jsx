function MovieCard(props) {

    // ESTA ES UNA OPCIÓN const movie = props.movie;
    const {movie} = props;

    return (
        <div className='movie-card'>
            <h2>{movie.title}</h2>
            <h3>{movie.director}</h3>
            <p>{movie.hasOscars ? "🏆" : "❌"}</p>
            <p>{movie.IMDBRating}</p>
            <button onClick={() => props.deleteMovie(movie._id)}>
                🗑️
            </button>
        </div>
    )
}

export default MovieCard