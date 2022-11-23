import React, { useState } from "react";
import PokemonList from "../../components/PokemonList";
import { NavBar } from "../../components/NavBar";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <PokemonList listOfPokemon={pokemonList} setListOfPokemon={setPokemonList} searchValue={searchValue} />
    </div>
  );
};

export default PokemonListPage;
