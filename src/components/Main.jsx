import React, { useContext } from "react";
import { Card } from "./card/Card";
import PokemonContext from "../contexts/PokemonContext";
import ScoreContext from "../contexts/ScoreContext";

export const Main = () => {
  const score = useContext(ScoreContext);
  const { pokemonIDs } = useContext(PokemonContext);

  const pokemones = pokemonIDs.map((id) => (
    <Card pok_id={id} key={"pokemon-" + id} />
  ));

  return <div className="main"> {pokemones} </div>;
};
