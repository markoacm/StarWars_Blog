import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const PlanetDetail = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPlanet(params.planetId);
  }, []);

  return (
    <div className="bg-black">
      {store.planet ? (
        <div className="text-center ">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`}
            alt={store.planet.name}
          />
          <div className="col-10 p-2 mx-auto">
            <div className="row d-flex justify-content-center text-light bg-dark">
              <h5 className="  m-3 text-warning">Name: {store.planet.name}</h5>

              <div class="hstack gap-3 pb-3">
                <div class="p-2">Diameter: {store.planet.diameter}</div>
                <div class="p-2">Climate: {store.planet.climate}</div>
                <div class="p-2">Terrain: {store.planet.terrain}</div>
                <div class="p-2">Gravity: {store.planet.gravity}</div>
                <div class="p-2">
                  Rotation Period: {store.planet.rotation_period}
                </div>
                <div class="p-2">
                  Orbital Period: {store.planet.orbital_period}
                </div>
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
