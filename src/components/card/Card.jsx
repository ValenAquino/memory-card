import React, { useContext, useEffect, useState } from "react";
// import ScoreContext from "../../contexts/ScoreContext";
import PokemonContext from "../../contexts/PokemonContext";

export const Card = ({ pok_id }) => {
  const loadingPokemon = {
    id: "",
    name: "Loading",
    img: "",
    clicked: "",
  };

  const getPokemon = async () => {
    let pok = await fetchPokemon(pok_id);
    setPokemon(pok);
    addPokemon(pok);
  };

  const { addPokemon, fetchPokemon } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState(loadingPokemon);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className={cardStyle}>
      <div className="card-shadow bg-white hover:scale-105 cursor-pointer h-44 sm:h-64">
        <div className="bg-red-900 p-6 h-36 sm:h-48 flex justify-items-center items-center">
          <img src={pokemon.img} alt={pokemon.name} className="h-max" />
        </div>
        <span className="pokemon-name">{pokemon.name}</span>
      </div>
    </div>
  );
};

const cardStyle =
  "card-shadow bg-white hover:scale-105 cursor-pointer h-44 sm:h-64";
