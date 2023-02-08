import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const GenreList = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres([
      { id: 1, genreName: "Action" },
      { id: 2, genreName: "Sci-Fi" },
      { id: 3, genreName: "Crime" },
      { id: 4, genreName: "Drama" },
    ]);
  }, []);

  return (
    <>
      <div className="row">
        {genres.map((genre, index) => (
          <div className="col-sm-2 mx-2 card" key={genre.id}>
            <div className="card-body text-center">
              <Link to={`/genres/${genre.id}`}>{genre.genreName}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenreList;
