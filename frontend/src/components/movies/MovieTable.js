import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./movietable.css";

const MovieTable = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const confirmDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const payload = {
          id: id.toString(),
        };
        axios.post(
          `http://localhost:4000/admin/movies/delete`,
          JSON.stringify(payload)
        );
        swal("Poof! Film has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The film is safe!");
      }
    });
    fetchMovies();
  };

  const fetchMovies = async () => {
    try {
      const result = await axios(`http://localhost:4000/movies`);
      if (result.data.movies !== null) {
        await setMovies(result.data.movies);
        setLoading(true);
      } else {
        setErrorMessage("Data not found");
      }
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  useEffect(() => {
    fetchMovies();
  });

  return (
    <>
      <div>
        <div>
          <Link to={`/admin/movies/create`} className="btn btn-primary">
            Add
          </Link>
        </div>
      </div>
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
          <table className="table">
            <thead>
              <tr>
                <td>No</td>
                <td>Title</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                  </td>
                  <td>
                    <div class="btn-group">
                      <button
                        class="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Action
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <span class="dropdown-item">
                            {" "}
                            <Link to={`/admin/movies/${movie.id}/edit`}>
                              Edit
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span
                            class="dropdown-item"
                            onClick={() => confirmDelete(movie.id)}
                          >
                            Delete
                          </span>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MovieTable;
