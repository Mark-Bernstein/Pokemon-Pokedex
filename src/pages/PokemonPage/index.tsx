import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPokemon, getAPokemonSpecies } from "../../services/pokeApiService";
import { GetPokemonResponse } from "../../services/pokeApiService/types";
import { Pokemon } from "../../components/Pokemon";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import "./index.css";

const PokemonPage = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<GetPokemonResponse>();
  const { pokemonId } = useParams();
  const pokemonRef = useRef(pokemon);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        if (pokemonId !== undefined) {
          if (
            parseInt(pokemonId) % 1 == 0 &&
            parseInt(pokemonId) > 0 &&
            parseInt(pokemonId) < 906 &&
            pokemonId.match("^[0-9]+$")
          ) {
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

  return (
    <div className="Pokemon-Page">
      <button onClick={() => navigate(`/pokemon/`)}>
        <HomeTwoToneIcon style={{ color: "blue" }} />
      </button>
      <p>Welcome to the Pokemon Page</p>
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default PokemonPage;
