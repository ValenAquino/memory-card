import React from "react";
import { Card } from "./card/Card";

export const Main = () => {
    let array = [1,2,3,4];
    const pokemones = array.map((el) => <Card pokemon_id={el} />);
  
    return (
    <div className="main">
      {pokemones}
    </div>
  );
};
