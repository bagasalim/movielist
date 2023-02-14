import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./movielist.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const result = await axios(`http://localhost:4000/movies`);
        await setMovies(result.data.movies);
        setLoading(true);
      } catch (error) {
        setErrorMessage(error.response.data);
      }
    };
    fetchMovies();
  }, []);

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
        <div className="row">
          {movies.map((movie, index) => (
            <div className="col-sm-4 mb-2  " key={index}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-3">{movie.title}</h5>
                  <p className="card-subtitle">{movie.description}</p>
                  <p className="card-text">Runtime: {movie.runtime}</p>
                  <Link
                    to={`/movies/${movie.id}`}
                    className="btn btn-primary mt-auto align-self-start"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
