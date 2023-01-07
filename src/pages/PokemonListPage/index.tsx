import React, { useState } from "react";
import PokemonList from "../../components/PokemonList";
import { NavBar } from "../../components/NavBar";
import { usePokemonList } from "../../hooks/usePokemonList";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const { pokemon, isLoading, error } = usePokemonList();

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {error && <div>Error retrieving data.</div>}
      {isLoading ? (
        <div>Loading... please wait...</div>
      ) : (
        <PokemonList listOfPokemon={pokemonList} setListOfPokemon={setPokemonList} searchValue={searchValue} />
      )}
    </div>
  );
};

export default PokemonListPage;
