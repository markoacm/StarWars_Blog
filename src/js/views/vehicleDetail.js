import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const VehicleDetail = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getVehicle(params.vehicleId);
  }, []);

  return (
    <div className="bg-black">
      {store.vehicle ? (
        <div className="text-center ">
          <img
            src="https://pm1.aminoapps.com/6122/ef5e7c2f0d4657ffe696c08fd8a160d6688c08cd_00.jpg"
            alt={store.vehicle.name}
          />
          <div className="col-10 p-2 mx-auto">
            <div className="row d-flex justify-content-center text-light bg-dark">
              <h5 className="  m-3">Name: {store.vehicle.name}</h5>

              <div class="hstack gap-3 pb-3">
                <div class="p-2">Model: {store.vehicle.model}</div>
                <div class="p-2">Total Crew: {store.vehicle.crew}</div>
                <div class="p-2">
                  Number of Passangers: {store.vehicle.passengers}
                </div>
                <div class="p-2">
                  Cargo Capacity: {store.vehicle.cargo_capacity}
                </div>
                <div class="p-2">
                  Vehicle Class: {store.vehicle.vehicle_class}
                </div>
                <div class="p-2">
                  Price in credits: {store.vehicle.cost_in_credits}
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
