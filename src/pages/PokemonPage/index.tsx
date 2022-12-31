import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPokemon, getAPokemonSpecies } from "../../services/pokeApiService";
import { GetPokemonResponse } from "../../services/pokeApiService/types";
import { Pokemon } from "../../components/Pokemon";

const PokemonPage = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<GetPokemonResponse>();
  // const [pokemon, setPokemon] = useState({});

  const { pokemonId } = useParams();
  const currentState = useRef();

  if (pokemon !== undefined) {
    currentState.current = pokemon;
  }

  useEffect(() => {
    try {
      if (pokemonId !== undefined) {
        getAPokemon(pokemonId).then(async (response) => {
          const pokemonData = response.data;
          console.log("getAPokemon response.data is: ", pokemonData);

          // const pokemonSpecies = await getAPokemonSpecies(pokemonId);
          // console.log("pokemonSpecies DATA is: ", pokemonSpecies);

          // console.log("RESPONSE.DATA is: ", response.data);

          // setPokemon({ ...response.data, species: { ...response.data.species, name: response.data.name } });
          // setPokemon({ ...response.data });
          setPokemon(pokemonData);
          console.log("pokemon is: ", pokemon);

          navigate(`/pokemon/${pokemonId}/${pokemonData.name}`, { replace: true });
        });
      }
    } catch (error) {
      console.log("ERROR IS: ", error);
      navigate("/not-found", { replace: true });
    }
  }, []);

  return (
    <div className="PokemonPage">
      <p>Pokemon Page. Current pokemonId is {pokemonId}</p>
      <Pokemon pokemon={currentState.current} />
    </div>
  );
};

export default PokemonPage;
