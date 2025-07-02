import React, { useEffect } from "react";
import { PokemonListProps } from "./types";
import PokemonListItem from "../PokemonListItem";
import { getAllPokemon } from "../../services/pokeApiService";
import "./style.css";

const PokemonList = ({ listOfPokemon, setListOfPokemon, searchValue }: PokemonListProps) => {
  useEffect(() => {
    getAllPokemon().then((response) => {
      setListOfPokemon(response);
    });
  }, []);

  // Load favorites from localStorage once
  const favoriteIds: string[] = JSON.parse(localStorage.getItem("favoritePokemons") || "[]").map(String);

  const filteredPokemonList = listOfPokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const pokemonElements = filteredPokemonList.map((pokemon) => {
    const idFromUrl = pokemon.url.split("/").slice(-2)[0];
    const isFavorited = favoriteIds.includes(idFromUrl);

    return <PokemonListItem key={pokemon.url} name={pokemon.name} url={pokemon.url} isFavorited={isFavorited} />;
  });

  return <div className="pokemon-list-container">{pokemonElements}</div>;
};

export default PokemonList;
