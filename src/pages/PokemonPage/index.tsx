import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPokemon, getAPokemonSpecies } from "../../services/pokeApiService";
import { GetPokemonResponse } from "../../services/pokeApiService/types";
import { Pokemon } from "../../components/Pokemon";

const PokemonPage = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<GetPokemonResponse>();
  const { pokemonId } = useParams();
  const pokemonRef = useRef(pokemon);

  useEffect(() => {
    try {
      if (pokemonId !== undefined) {
        getAPokemon(pokemonId).then(async (response) => {
          const pokemonData = response.data;

          const {
            data: { genera },
          } = await getAPokemonSpecies(pokemonId);
          console.log("pokemonSpecies DATA is: ", genera);

          // const species = genera.map((genus) => {
          //   console.log("GENUS is: ", genus)
          // })

          const asArray = Object.entries(genera);

          const filterSpecies = asArray.filter(([key, value]) => {
            if (value.language.name === "en") {
              return value.genus;
              // console.log("value is: ", value.genus);
            }
            // value.language.name === "en";
          });

          const species = Object.fromEntries(filterSpecies);

          console.log("Filtered is: ", species);
          const updatedSpeciesName = species.genus;

          setPokemon({ ...response.data, species: { ...genera, name: updatedSpeciesName } });
          // setPokemon({ ...response.data, species: { ...genera, name: response.data.name } });
          // setPokemon({ ...response.data, species: species });

          // setPokemon(pokemonData);

          pokemonRef.current = pokemonData;

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
      <Pokemon pokemon={pokemonRef.current} />
    </div>
  );
};

export default PokemonPage;
