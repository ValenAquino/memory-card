import React from "react";

export const Card = ({pokemon_id}) => {
  const fetchPokemon = () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url + pokemon_id)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };

  fetchPokemon();

  return (
    <div className="card-shadow bg-white hover:scale-105 cursor-pointer h-44 sm:h-64">
      <div className="bg-red-900 p-6 h-36 sm:h-48">
        <img src="" alt="" />
      </div>
      <span className="bg-white text-sm sm:text-lg sm:font-medium text-red-800 p-1 sm:p-6 block h-auto">
        Nombre del pk
      </span>
    </div>
  );
};
