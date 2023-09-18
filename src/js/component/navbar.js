import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light bg-black">
      <Link to="/">
        <span className="navbar-brand mb-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
            className="img-fluid ms-3"
            style={{ width: 100, height: "auto" }}
          />
        </span>
      </Link>
      <div className="ml-auto me-3">
        <Link to="/demo">
          <button className="btn btn-warning text-black">Favorites</button>
        </Link>
      </div>
    </nav>
  );
};
