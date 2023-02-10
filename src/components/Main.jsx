import React, { useEffect, useState } from "react";
import { Card } from "./card/Card";
import { fetchPokemons, shuffleArray } from "../utils";

export const Main = () => {
  const [pokemonsData, setPokemonData] = useState([]);
  const [level, setLevel] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const resetGame = async () => {
    setPokemonData(await fetchPokemons(0));
  };

  const wasClicked = (id) => {
    return pokemonsData.find((pok) => pok.id === id).clicked;
  };

  const loadNextLevel = () => {
    if (level === 2) {
      setGameWon(true);
      alert("You won");
    } else {
      setLevel(level + 1);
    }
  };

  const levelCompleted = (pokemons) => {
    let clicked_pokemons = pokemons.filter((pokemon) => pokemon.clicked).length;

    if (clicked_pokemons === pokemonsData.length) {
      loadNextLevel();
      return true;
    }
    return false;
  };

  const setClickedTrue = (id) => {
    const updated_pokemons = pokemonsData.map((pokemon) => {
      if (pokemon.id === id) {
        return { ...pokemon, clicked: true };
      } else {
        return pokemon;
      }
    });

    if (!levelCompleted(updated_pokemons)) {
      setPokemonData(shuffleArray(updated_pokemons));
    }
  };

  const handleCardClick = (id) => {
    if (wasClicked(id)) {
      resetGame();
    } else {
      setClickedTrue(id);
    }
  };

  useEffect(() => {
    const loadCards = async () => {
      setPokemonData(await fetchPokemons(level));
    };

    loadCards();
  }, [level]);

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
