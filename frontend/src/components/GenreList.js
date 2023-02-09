import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const GenreList = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchGenres = async () => {
    try {
      const result = await axios(`http://localhost:4000/genres`);
      await setGenres(result.data.genres);
      console.log(result.data.genres);

      setLoading(true);
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };
  useEffect(() => {
    fetchGenres();
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
          {genres.map((genre, index) => (
            <div className="col-sm-2 m-2 card" key={index}>
              <div className="card">
                <div className="card-body text-center">
                  <Link to={`/genres/${genre.id}/movies`}>
                    {genre.genre_name}
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

export default GenreList;
