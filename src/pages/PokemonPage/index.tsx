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
    const getPokemon = async () => {
      try {
        if (pokemonId !== undefined) {
          if (parseInt(pokemonId) % 1 == 0 && parseInt(pokemonId) < 1 && parseInt(pokemonId) < 905) {
            getAPokemon(pokemonId).then(async (response) => {
              const {
                data: { genera },
              } = await getAPokemonSpecies(pokemonId);

              const asArray = Object.entries(genera);

              const filterSpecies = asArray.filter(([key, value]) => {
                if (value.language.name === "en") {
                  const { genus } = value;
                  return genus;
                }
              });

              const species = filterSpecies[0][1].genus;
              const url = filterSpecies[0][1].language.url;

              // const species2 = Object.fromEntries(filterSpecies);
              // console.log("species 2 is: ", species2);

              setPokemon({ ...response.data, species: { name: species, url: url } });

              pokemonRef.current = pokemon;

              navigate(`/pokemon/${pokemonId}/${response.data.name}`, { replace: true });
            });
          } else {
            navigate("/not-found", { replace: true });
          }
        }
      } catch (error) {
        console.log("ERROR IS: ", error);
        navigate("/not-found", { replace: true });
      }
    };
    getPokemon();
  }, []);

  // const nextPokemon = () => {
  //   if (pokemonId !== undefined) {
  //     try {
  //       const nextPokemonID = parseInt(pokemonId) + 1;
  //       console.log("00000 :", nextPokemonID);
  //       navigate(`/pokemon/${nextPokemonID}`);
  //     } catch (error) {
  //       console.log("ERROR is: ", error);
  //     }
  //   }
  // };

  return (
    <div className="PokemonPage">
      <button onClick={() => navigate(`/pokemon/`)}> Go back to Home page</button>
      <p>Welcome to the Pokemon Page</p>
      <Pokemon pokemon={pokemon} />
      {/* <button onClick={() => nextPokemon()}> Next Pokemon</button> */}
    </div>
  );
};

export default PokemonPage;
