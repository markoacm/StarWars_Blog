import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const CharacterDetail = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacter(params.characterId);
  }, []);

  return (
    <div className="col-4 mx-auto">
      {store.character ? (
        <div className="card">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`}
            className="card-img-top"
            alt={store.character.name}
          />
          <div className="card-body">
            <h5 className="card-title">Name: {store.character.name}</h5>
            <ul>
              <li>Birth Year: {store.character.birth_year}</li>
              <li>Species: {store.character.species}</li>
              <li>Height: {store.character.height}</li>
              <li>Gender: {store.character.gender}</li>
              <li>Eye Color: {store.character.eye_color}</li>
            </ul>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
