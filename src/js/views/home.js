import React from "react";

import "../../styles/home.css";

import { CharactersHome } from "../component/characters";
import { PlanetsHome } from "../component/planets";
import { VehiclesHome } from "../component/vehicles";

export const Home = () => {
  return (
    <div className="bg-black">
      <h1 className="text-light text-center ">Characters</h1>

      <CharactersHome />

      <h1 className="text-light text-center m-3">Planets</h1>
      <PlanetsHome />

      <h1 className="text-light text-center m-3">Vehicles</h1>
      <VehiclesHome />
    </div>
  );
};
