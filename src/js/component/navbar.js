import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
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

      <div className="dropdown">
        <a
          className="btn btn-warning dropdown-toggle mx-4"
          href="#"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
          <span className="badge text-dark"> {store.favorite.length}</span>
        </a>
        <ul className="dropdown-menu text-left m-2 bg-dark text-white">
          {store.favorite.length === 0 ? (
            <li className="dropdown-item m-2">No favorites</li>
          ) : (
            store.favorite.map((item, index) => {
              return (
                <li
                  className="dropdown-item me-3 bg-dark text-white"
                  key={index}
                >
                  {item}
                  <button
                    className="btn btn-outline-dark btn-sm me-2"
                    onClick={() => {
                      actions.removeFavorite(index);
                    }}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </nav>
  );
};
