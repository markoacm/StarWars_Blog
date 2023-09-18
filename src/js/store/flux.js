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
      getCharacter: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data.result.properties);
            setStore({ character: data.result.properties });
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
