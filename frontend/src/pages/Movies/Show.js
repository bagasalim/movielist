import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MovieDetail from "../../components/movies/MovieDetail";

const Show = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await axios(`http://localhost:4000/movies/${id}`);
        await setMovie(result.data.movie);
        console.log(result.data.movie);
        console.log(result.data.movie.mpaa_rating);
        setLoading(true);
      } catch (error) {
        setErrorMessage(error.response.data);
      }
    };
    fetchMovie();
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
        <MovieDetail movie={movie} />
      )}
    </>
  );
};

export default Show;
