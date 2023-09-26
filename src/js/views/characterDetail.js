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
    <div className="bg-black">
      {store.character ? (
        <div className="text-center ">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`}
            alt={store.character.name}
          />

          <div className="col-10 p-2 mx-auto">
            <div className="row d-flex justify-content-center text-light bg-dark">
              <h5 className="m-3 text-warning">Name: {store.character.name}</h5>

              <div class="hstack col-md-8 gap-8 pb-3">
                <div class="p-2">Birth Year: {store.character.birth_year}</div>
                <div class="p-2">Weight: {store.character.mass}</div>
                <div class="p-2">Height: {store.character.height}</div>
                <div class="p-2">Gender: {store.character.gender}</div>
                <div class="p-2">Eye Color: {store.character.eye_color}</div>
                <div class="p-2">Hair Color: {store.character.hair_color}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};
