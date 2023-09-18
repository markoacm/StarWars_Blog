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

                  <div>
                    <Link
                      to={`/character/${character.uid}`}
                      className="btn btn-success"
                    >
                      More Info..
                    </Link>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        actions.saveFavorite(character);
                      }}
                    >
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
