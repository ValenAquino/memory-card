import React from "react";
import pokemon_logo from "../assets/pokemon_logo.png";

export const Header = () => {
  return (
    <header className="header">
      <img className="h-20 brightness-105 mb-4 md:mb-0 md:place-self-start" src={pokemon_logo} alt="logo de pokemon" />
      <div className="grid grid-rows-2 gap-2 justify-center md:justify-end">
        <span className="text-xl">
          Puntaje Actual:
          <span className="text-white font-bold"> 1234</span>
        </span>
        <span className="text-xl">
          Mejor Puntaje:
          <span className="text-white font-bold"> 44444</span>
        </span>
      </div>
    </header>
  );
};
