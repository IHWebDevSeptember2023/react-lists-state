import './App.css'
import MoviesList from './components/MoviesList'
import { useState } from 'react';

function App() {
  const [showMovies, setShowMovies] = useState(false)

  const displayMovies = () => {
    console.log("Display movies");
    showMovies ? setShowMovies(false) : setShowMovies(true);
  }

  return (
    <>
      <button onClick={() => displayMovies()}>{showMovies ? "Hide movies" : "Show movies"} </button>
      {
        showMovies && <MoviesList />
      }
    </>
  )
}

export default App
