import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const PlanetsHome = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="container-fluid">
        <div className="row ms-3">
          {store.planets.map((planet, index) => {
            return (
              <div className="card bg-dark col-12 col-md-2 p-3 m-3" key={index}>
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${
                    index + 1
                  }.jpg`}
                  className="card-img-top alt=..."
                />
                <div className="card-body">
                  <h5 className="card-title text-white text-center">
                    {planet.name}
                  </h5>
                  <div>
                    <Link to="" className="btn btn-success">
                      More Info..
                    </Link>
                    <button className="btn btn-warning me-md-2">
                      <i class="fas fa-heart"></i>
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
