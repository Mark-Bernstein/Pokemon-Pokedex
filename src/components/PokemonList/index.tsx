import React, { useEffect } from "react";
import { PokemonListProps } from "./types";
import PokemonListItem from "../PokemonListItem";
import { getAllPokemon } from "../../services/pokeApiService";

const PokemonList = (props: PokemonListProps) => {
  const { listOfPokemon, setListOfPokemon, searchValue } = props;

  useEffect(() => {
    getAllPokemon().then((response) => {
      setListOfPokemon(response);
    });
  }, []);

  const filteredPokemonList = listOfPokemon.filter(
    (pokemon) => pokemon.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  );

  const Pokemon = filteredPokemonList.map((pokemon) => {
    return <PokemonListItem key={pokemon.url} name={pokemon.name} url={pokemon.url} />;
  });

  return <div>{Pokemon}</div>;
};

export default PokemonList;
