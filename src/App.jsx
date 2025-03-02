import { useState } from 'react'
import './App.css'
import jsonFile from './assets/json.js'
import Movielist from './component/movielist/movielist'
import Filter from './component/filter/filter.jsx'
import AddMovie from './component/addMovie/AddMovie.jsx'
function App() {
  const [movies, setMovies] = useState(jsonFile)

  // callback function
  const handleAddMovie = (newMovie) => {
    jsonFile.push(newMovie)
    console.log(newMovie)
    let films = jsonFile
    // console.log(jsonFile)
    setMovies([...films])
  } 

  // callback function 
  const handleMovieFilter = (title) => {
    let films = jsonFile.filter((movie) => movie.title.toLowerCase().startsWith(title))
    setMovies(films)
  }

  // callback function for rating
  const handleRatingFilter = (rating) => {
    let films = jsonFile.filter((movie)=> movie.rating >= rating)
    setMovies(films)
  }

  return (
    <>
      <AddMovie handleAddMovie={handleAddMovie}/>
      <Filter handleMovieFilter={handleMovieFilter} handleRatingFilter={handleRatingFilter}/>
      <Movielist movies={movies}/>
    </>
  )
}

export default App
