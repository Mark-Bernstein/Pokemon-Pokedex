import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PokemonListPage from "./pages/PokemonListPage";
import PokemonPage from "./pages/PokemonPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon" element={<PokemonListPage />} />
        <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
        <Route path="/pokemon/:pokemonId/:pokemonName" element={<PokemonPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
