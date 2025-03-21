import { useParams } from "react-router-dom";
import jsonFile from "../../assets/json";

function MovieDetail() {
  const { id } = useParams();
  const movie = jsonFile.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found.</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <a href={movie.trailer} target="_blank">Watch Trailer</a>
    </div>
  );
}

export default MovieDetail;
