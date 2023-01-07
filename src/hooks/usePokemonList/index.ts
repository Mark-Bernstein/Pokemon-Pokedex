import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../../services/pokeApiService";
import { ListResponse, NamedApiResource } from "../../services/pokeApiService/types";

export const usePokemonList = () => {
  const [pokemon, setPokemon] = useState<NamedApiResource[] | AxiosResponse<ListResponse, undefined>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        await getAllPokemon().then((response) => {
          setPokemon(response);
          setIsLoading(false);
        });
      } catch (error) {
        console.log("ERROR IS: ", error);
        setError(true);
      }
    };

    getPokemon();
  }, []);

  return { pokemon, isLoading, error };
};
