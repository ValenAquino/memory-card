import React, { useEffect, useState } from "react";
import { Card } from "./card/Card";
import { fetchPokemons } from "../utils";

export const Main = () => {
  const [pokemonsData, setPokemonData] = useState([]);
  const [level, setLevel] = useState(0);

  const handleCardClick = (id) => {
    const updated_pokemons = pokemonsData.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, clicked: true };
      } else {
        return pokemon;
      }
    });
    
    setPokemonData(updated_pokemons);
  };

  useEffect(() => {
    const loadCards = async () => {
      setPokemonData(await fetchPokemons(level));
    };

    loadCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main">
      {pokemonsData.map((pokemon) => (
        <Card
          pokemon={pokemon}
          key={"pokemon-" + pokemon.id}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
};
