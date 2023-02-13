import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.js";
import Admin from "./pages/Admin";
import Genres from "./pages/Genres";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Show from "./pages/Movies/Show.js";

import "./App.css";
import MovieForm from "./components/movies/MovieForm.js";
import ShowMoviesByGenre from "./pages/Genres/Show.js";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Netflix Kiribati</h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-sm-2 mb-3">
            <Menu />
          </div>
          <div className="col-sm-10 mb-3">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/movies" element={<Movies />}></Route>
              <Route exact path="/movies/:id" element={<Show />}></Route>
              <Route path="/genres" element={<Genres />}></Route>
              <Route
                exact
                path="/genres/:id/movies/"
                element={<ShowMoviesByGenre />}
              ></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route
                exact
                path="/admin/movies/create"
                element={<MovieForm />}
              ></Route>
              <Route
                exact
                path="/admin/movies/:id/edit"
                element={<MovieForm />}
              ></Route>
            </Routes>
            <div></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
