import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import jsonFile from "./assets/json.js";
import Movielist from "./component/movielist/movielist";
import Filter from "./component/filter/filter.jsx";
import AddMovie from "./component/addMovie/AddMovie.jsx";
import MovieDetail from "./component/moviedetalis/moviedetails.jsx";

function App() {
  const [movies, setMovies] = useState(jsonFile);

  // callback function
  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]); // ✅ Correct way to update state
  };

  // callback function for filtering by title
  const handleMovieFilter = (title) => {
    const films = jsonFile.filter((movie) =>
      movie.title.toLowerCase().startsWith(title.toLowerCase())
    );
    setMovies(films);
  };

  // callback function for rating
  const handleRatingFilter = (rating) => {
    const films = jsonFile.filter((movie) => movie.rating >= rating);
    setMovies(films);
  };

  return (
    <Router>
      <div className="app">
        <AddMovie handleAddMovie={handleAddMovie} />
        <Filter
          handleMovieFilter={handleMovieFilter}
          handleRatingFilter={handleRatingFilter}
        />
        <Routes>
          <Route path="/" element={<Movielist movies={movies} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
