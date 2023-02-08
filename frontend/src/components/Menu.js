import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li class="list-group-item">
          <Link to="/movies">Movies</Link>
        </li>
        <li class="list-group-item">
          <Link to="/genres">Genres</Link>
        </li>
        <li class="list-group-item">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
