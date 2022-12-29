import React, { useEffect } from "react";
import { PokemonListProps } from "./types";
import { getAllPokemon } from "../../services/pokeApiService";
import axios from "axios";

const PokemonList = (props: PokemonListProps) => {
  const { listOfPokemon, setListOfPokemon, searchValue } = props;

  const getAllPokemon = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offest=0`).then((response) => {
      const pokemonListData = response.data.results;
      setListOfPokemon(pokemonListData);
    });
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

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
