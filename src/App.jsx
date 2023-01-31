import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { ScoreContextProvider } from "./contexts/ScoreContext";
import { PokemonContextProvider } from "./contexts/PokemonContext";

export function App() {
  return (
    <div className="app-light">
      <ScoreContextProvider>
        <PokemonContextProvider>
          <Header />
          <Main />
        </PokemonContextProvider>
      </ScoreContextProvider>
      <Footer />
    </div>
  );
}
