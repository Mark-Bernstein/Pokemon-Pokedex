import React from "react";
import { PokemonListProps } from "./types";

const PokemonList = (props: PokemonListProps) => {
  const { listOfPokemon, searchValue } = props;

  const filteredPokemonList = listOfPokemon.filter(
    (pokemon) => pokemon.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  );

  const Pokemon = filteredPokemonList.map((pokemon) => {
    return (
      <div key={pokemon.url}>
        <p>{pokemon.name}</p>
      </div>
    );
  });

  return <div>{Pokemon}</div>;
};

export default PokemonList;
