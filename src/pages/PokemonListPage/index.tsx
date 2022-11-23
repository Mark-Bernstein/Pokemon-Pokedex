import React, { useState } from "react";
import PokemonList from "../../components/PokemonList";
import { NavBar } from "../../components/NavBar";

const PokemonListPage = () => {
  const [pokemonList] = useState<{ name: string; url: string }[]>([
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
    {
      name: "charmeleon",
      url: "https://pokeapi.co/api/v2/pokemon/5/",
    },
    {
      name: "charizard",
      url: "https://pokeapi.co/api/v2/pokemon/6/",
    },
    {
      name: "squirtle",
      url: "https://pokeapi.co/api/v2/pokemon/7/",
    },
  ]);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <PokemonList listOfPokemon={pokemonList} searchValue={searchValue} />
    </div>
  );
};

export default PokemonListPage;
