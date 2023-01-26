import React, { useState, useEffect } from "react";

export const Card = ({ pokemon_id }) => {
  const [pokemon, setPokemon] = useState(" ");

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url + pokemon_id)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          img: json["sprites"]["other"]["official-artwork"]["front_default"],
        };

        setPokemon(pokemon);
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card-shadow bg-white hover:scale-105 cursor-pointer h-44 sm:h-64">
      <div className="bg-red-900 p-6 h-36 sm:h-48 flex justify-items-center items-center">
        <img src={pokemon.img} alt={pokemon.name} className="h-max"/>
      </div>
      <span className="pokemon-name">
        {pokemon.name}
      </span>
    </div>
  );
};
