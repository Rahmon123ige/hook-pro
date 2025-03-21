// import { Link } from "react-router-dom";

// function Movielist({ movies }) {
//   return (
//     <div className="list">
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h3>{movie.title}</h3>
//           <h3>{movie.rating}</h3>
//                   <Link to={`/movie/${movie.id}`}>View Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Movielist;
import React from "react";
import MovieCard from "../moviecard/moviecard.jsx";
import "./moviecard.css"; // Make sure your styles are linked

function Movielist({ movies }) {
  return (
    <div className="list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            rating={movie.rating}
            trailer={movie.trailer}
          />
        ))
      ) : (
        <p>No movies available.</p>
      )}
    </div>
  );
}

export default Movielist;
