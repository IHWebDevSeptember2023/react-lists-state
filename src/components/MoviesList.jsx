import moviesData from '../movies-data.json';
import './MoviesList.css'
import MovieCard from './MovieCard';
import { useState } from 'react';

function MoviesList() {

    const [movies, setMovies] = useState(moviesData);

    const userIsLoggedIn = true;

    const deleteMovie = (movieID) => {
        console.log(movieID);

        const newMoviesArray = movies.filter((movie) => {
            return movieID !== movie._id
        })

        setMovies(newMoviesArray);
        // OJITO porque esto no lo borrará de la base de datos
    }

    // Podemos añadir estilos así o en el css separado
    // entonces tenemos que añadir el "style: {cardStyles}" dentro del tag
    /*     const cardStyles = {
            backgroundColor: "aliceblue",
            color: "black",
            borderRadius: "15px",
            padding: "15px"
        } */

    return (
    <>
        {
            userIsLoggedIn ? <>
                {
                    movies.map((movie) => {
                        return (
                            <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
                        )
                    })
                }

            </>

                : <h1>You have to login to see the movies</h1>
        }
    </>

    )

}

/* const MoviesList = ()=>{

} */


export default MoviesList;