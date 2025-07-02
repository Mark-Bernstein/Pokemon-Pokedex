import React, { useState, useEffect } from "react";
import PokemonList from "../../components/PokemonList";
import FilterFavoriteButton from "../../components/Filter";
import { NavBar } from "../../components/NavBar";
import { usePokemonList } from "../../hooks/usePokemonList";
import { NamedApiResource } from "../../services/pokeApiService/types";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState<NamedApiResource[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const { pokemon, isLoading, error } = usePokemonList();

  useEffect(() => {
    if (Array.isArray(pokemon) && pokemon.length > 0) {
      setPokemonList(pokemon);
    }
  }, [pokemon]);

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      {Array.isArray(pokemon) && <FilterFavoriteButton allPokemon={pokemon} onFilterChange={setPokemonList} />}
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
