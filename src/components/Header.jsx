import React, {useContext} from "react";
import pokemon_logo from "../assets/pokemon_logo.png";
import ScoreContext from "../contexts/ScoreContext";

export const Header = () => {
  const {actualScore, bestScore} = useContext(ScoreContext)

  return (
    <header className="header">
      <img
        className="h-20 brightness-105 mb-4 md:mb-0 md:place-self-start"
        src={pokemon_logo}
        alt="logo de pokemon"
      />
      <div className="grid grid-rows-2 gap-2 justify-center md:justify-end">
        <span className="text-xl">
          Puntaje Actual:
          <span className="text-white font-bold"> {actualScore}</span>
        </span>
        <span className="text-xl">
          Mejor Puntaje:
          <span className="text-white font-bold"> {bestScore}</span>
        </span>
      </div>
    </header>
  );
};
