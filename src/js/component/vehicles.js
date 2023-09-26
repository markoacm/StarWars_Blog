import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const VehiclesHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row ms-3">
          {store.vehicles.map((vehicle, index) => {
            return (
              <div className="card bg-dark col-12 col-md-2 p-3 m-3" key={index}>
                <img
                  src="https://pm1.aminoapps.com/6122/ef5e7c2f0d4657ffe696c08fd8a160d6688c08cd_00.jpg"
                  className="card-img-top alt=..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white text-center">
                    {vehicle.name}
                  </h5>
                </div>

                <div className="position-relative p-3">
                  <Link
                    to={`/vehicle/${vehicle.uid}`}
                    className="btn btn-success position-absolute bottom-0 start-0"
                  >
                    More Info..
                  </Link>
                  <button
                    className="btn btn-warning position-absolute bottom-0 end-0"
                    onClick={() => actions.saveFavorite(vehicle.name)}
                    disabled={store.favorite.includes(vehicle.name)}
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
