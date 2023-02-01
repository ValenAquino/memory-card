import React, { useEffect, useState } from "react";
import { Card } from "./card/Card";
import { levels, fetchPokemon } from "../utils";

export const Main = () => {
  const [pokemons_data, setPokemonData] = useState([]);
  const [pokemon_cards, setPokemonCards] = useState([]);

  const handleClick = (id) => {
    let pokemon = pokemons_data.find((pokemon) => pokemon.id === id);
    let clicked_pokemon = { ...pokemon, clicked: true };
    console.log(clicked_pokemon)
    setPokemonData([...pokemons_data, clicked_pokemon]);
  };

  const createPokemonCard = (pokemon) => {
    return (
      <Card
        key={"pokemon-" + pokemon.id}
        pokemon={pokemon}
        handleClick={handleClick}
      />
    );
  };

  useEffect(() => {
    const getPokemons = async () => {
      const temp_pokemons_data = [];
      const temp_pokemon_cards = [];

      for (const id of levels[0]) {
        const pokemon = await fetchPokemon(id);
        temp_pokemons_data.push(pokemon);
        temp_pokemon_cards.push(createPokemonCard(pokemon));
      }
      setPokemonData([...pokemons_data, temp_pokemons_data]);
      setPokemonCards([...pokemon_cards, temp_pokemon_cards]);
    };

    getPokemons();
  }, []);

  return <div className="main">{pokemon_cards}</div>;
};
