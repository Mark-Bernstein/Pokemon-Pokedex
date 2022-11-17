import React, { useState } from "react";
import PokemonList from "../../components/PokemonList";

const PokemonListPage = () => {
  const [pokemon] = useState<{ name: string; url: string }[]>([
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

  return <PokemonList listOfPokemon={pokemon} />;
};

export default PokemonListPage;
