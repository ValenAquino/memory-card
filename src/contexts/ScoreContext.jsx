import React, { useState, createContext } from "react";

const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const score = {
    actualScore,
    setActualScore,
    bestScore,
    setBestScore,
  };

  return (
    <ScoreContext.Provider value={score}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
