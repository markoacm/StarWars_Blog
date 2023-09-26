import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const CharactersHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row ms-3">
          {store.characters.map((character, index) => {
            return (
              <div className="card bg-dark col-12 col-md-2 p-3 m-3" key={index}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${
                    index + 1
                  }.jpg`}
                  className="card-img-top alt=..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white text-center">
                    {character.name}
                  </h5>
                </div>

                <div className="position-relative p-3">
                  <Link
                    to={`/character/${character.uid}`}
                    className="btn btn-success position-absolute bottom-0 start-0"
                  >
                    More Info..
                  </Link>
                  <button
                    className="btn btn-warning position-absolute bottom-0 end-0"
                    onClick={() => actions.saveFavorite(character.name)}
                    disabled={store.favorite.includes(character.name)}
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
