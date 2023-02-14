import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MovieForm from "./components/movies/MovieForm.js";
import Navigation from "./components/navigation/";
import Admin from "./pages/Admin";
import Genres from "./pages/Genres";
import ShowMoviesByGenre from "./pages/Genres/Show.js";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Show from "./pages/Movies/Show.js";

function App() {
  return (
    <Router>
      <div className="row mb-3">
        <Navigation />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-3">
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
