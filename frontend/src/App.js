import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.js";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Genres from "./pages/Genres";
import Admin from "./pages/Admin";
import Show from "./pages/Movies/Show.js";

import "./App.css";

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
              <Route path="/admin" element={<Admin />}></Route>
            </Routes>
            <div></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
