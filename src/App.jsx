import React from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="app-light">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
