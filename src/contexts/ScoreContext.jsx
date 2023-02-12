import React, { useState, useEffect, createContext } from "react";
import { getBestScore, updateBestScore } from "../utils";

const ScoreContext = createContext();

export const ScoreContextProvider = ({ children }) => {
  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const resetScore = () => {
    setActualScore(0);
  }

  const sumScore = () => {
    let score = actualScore + 1;
    setActualScore(actualScore + 1);

    console.log(score, bestScore)

    if(score > bestScore) {
      setBestScore(score);
      updateBestScore(score);
    }
  }

  const score = {
    actualScore,
    sumScore,
    bestScore,
    resetScore,
  };

  useEffect(() => {
    let bestScoreSaved = getBestScore();

    if(bestScoreSaved !== "Error") {
      setBestScore(bestScoreSaved);
    }
  }, [])
  

  return (
    <ScoreContext.Provider value={score}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
