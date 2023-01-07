import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../../services/pokeApiService";
import { NamedApiResource } from "../../services/pokeApiService/types";

const usePokemonList = () => {
  const [pokemonState, setPokemonState] = useState<NamedApiResource[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        await getAllPokemon().then((response) => {
          console.log("look:", response);
          //   setPokemonState(response);
          // TODO - fix the above line
          setIsLoading(false);
        });
      } catch (error) {
        setError(true);
      }
    };

    getPokemon();
  }, []);

  return { pokemonState, isLoading, error };
};
