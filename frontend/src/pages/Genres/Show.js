import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShowMoviesByGenre = () => {
  let { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await axios(`http://localhost:4000/genres/${id}/movies`);
        await setMovies(result.data.movies);
        setLoading(true);
      } catch (error) {
        setErrorMessage(error.response.data);
      }
    };
    fetchMovie();
  }, [id]);
  return (
    <>
      {!loading ? (
        (() => {
          if (errorMessage) {
            return (
              <div className="row">
                <p>Ooops... {errorMessage}</p>
              </div>
            );
          } else {
            return (
              <div className="row">
                <p>Loading...</p>
              </div>
            );
          }
        })()
      ) : (
        <ul>
          {Array.isArray(movies) ? (
            movies.map((movie, index) => (
              <li key={index}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      )}
    </>
  );
};

export default ShowMoviesByGenre;
