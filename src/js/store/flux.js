const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      favorite: [],
      character: [],
      planet: [],
      vehicle: [],
    },
    actions: {
      loadCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ characters: data.results });
          });
      },

      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planets: data.results });
          });
      },

      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicles: data.results });
          });
      },
      getCharacter: (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
          .then((res) => res.json())
          .then((data) => {
            setStore({ character: data.result.properties });
          });
      },

      getPlanet: (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
          .then((res) => res.json())
          .then((data) => {
            setStore({ planet: data.result.properties });
          });
      },

      getVehicle: (uid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicle: data.result.properties });
          });
      },

      saveFavorite: (character) => {
        console.log({ favorite: character });
        setStore({ favorite: character });
      },
    },
  };
};

export default getState;
