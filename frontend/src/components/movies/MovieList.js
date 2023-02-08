import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: "Shawsank Redemption", runtime: 112 },
      { id: 2, title: "La Casa De Papel", runtime: 112 },
      { id: 3, title: "Bohemian Rhapsody", runtime: 112 },
    ]);
  }, []);

  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div className="col-sm-4 mb-2 " key={movie.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">Runtime: {movie.runtime}</p>
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
