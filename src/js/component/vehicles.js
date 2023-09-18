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

                  <div>
                    <Link to="" className="btn btn-success">
                      More Info..
                    </Link>
                    <button className="btn btn-warning me-md-2">
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
