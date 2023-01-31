import React, { useState, createContext, useEffect } from "react";
import { getRandomArray } from "../utils";

const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const fetchPokemon = async (pokemon_id) => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const res = await fetch(url + pokemon_id);
    const json = await res.json();

    return {
      id: json.id,  
      name: json.name,
      img: json["sprites"]["other"]["official-artwork"]["front_default"],
      clicked: false,
    };
  };

  const addPokemon = (pokemon) => {
    setPokemons([...pokemons, pokemon]);
    console.log(pokemons);
    console.log(pokemon);
  };

  const [pokemonIDs, setPokemonIDs] = useState([1, 2, 3]);
  const [pokemons, setPokemons] = useState([]);

  return (
    <PokemonContext.Provider value={{ addPokemon, fetchPokemon, pokemonIDs }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;

/* 
//   const setNewLevel = (numberOfPokemons) => {
  //     setPokemonIDs(getRandomArray(numberOfPokemons));
  //   };

  //   const handleWonGame = () => {
  //     alert("You win");
  //   };

  //   const handleWon = (level) => {
  //     switch (level) {
  //       case 2:
  //         setNewLevel(6);
  //         break;
  //       case 3:
  //         setNewLevel(12);
  //         break;
  //       default:
  //         handleWonGame();
  //     }
  //   };
*/
