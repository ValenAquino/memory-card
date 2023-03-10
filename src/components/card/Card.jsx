import React from "react";
// import ScoreContext from "../../contexts/ScoreContext";

export const Card = ({ pokemon, handleCardClick }) => {
  return (
    <div
      className={cardStyle}
      onClick={(e) => {
        e.target.classList.add("animate-ping");
        setTimeout(() => {
          e.target.classList.remove("animate-ping");
          handleCardClick(pokemon.id);
        }, 500);
      }}
    >
      <div className="card-shadow bg-white hover:scale-105 cursor-pointer h-44 sm:h-64">
        <div className="bg-red-900 p-6 h-36 sm:h-48 flex justify-items-center items-center text-white">
          <img src={pokemon.img} alt={pokemon.name} className="h-max" />
        </div>
        <span className="pokemon-name">{pokemon.name}</span>
      </div>
    </div>
  );
};

const cardStyle =
  "card-shadow bg-white hover:scale-105 cursor-pointer h-44 sm:h-64 duration-75	";
