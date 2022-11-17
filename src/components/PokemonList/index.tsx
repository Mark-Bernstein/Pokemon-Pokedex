import React from "react";
import { PokemonListProps } from "./types";

const PokemonList = (props: PokemonListProps) => {
  const { listOfPokemon } = props;
  console.log("LOOK: ", props);

  const Pokemon = listOfPokemon.map((pokemon) => {
    console.log("LOOK: ", pokemon);
    return (
      <div key={pokemon.url}>
        <p>{pokemon.name}</p>
      </div>
    );
  });

  return <div>{Pokemon}</div>;
};

export default PokemonList;
