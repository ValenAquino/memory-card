import React from "react";
import { Card } from "./card/Card";

export const Main = () => {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const pokemones = array.map((el, i) => (
    <Card pokemon_id={el} key={"pokemon-" + i} />
  ));

  return <div className="main">{pokemones}</div>;
};
