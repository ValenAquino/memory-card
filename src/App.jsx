import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { ScoreContextProvider } from "./contexts/ScoreContext";

export function App() {
  return (
    <div className="app-light">
      <ScoreContextProvider>
          <Header />
          <Main />
      </ScoreContextProvider>
      <Footer />
    </div>
  );
}
