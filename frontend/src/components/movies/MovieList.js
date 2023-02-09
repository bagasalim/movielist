import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

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
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-subtitle">
                    Description: {movie.description}
                  </p>
                  <p className="card-text">Runtime: {movie.runtime}</p>
                  <Link to={`/movies/${movie.id}`} className="btn btn-primary">
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
