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
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const { pokemonId } = useParams();
  const pokemonRef = useRef(pokemon);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        if (pokemonId !== undefined) {
          if (
            parseInt(pokemonId) % 1 === 0 &&
            parseInt(pokemonId) > 0 &&
            parseInt(pokemonId) < 906 &&
            pokemonId.match("^[0-9]+$")
          ) {
            const response = await getAPokemon(pokemonId);
            const {
              data: { genera },
            } = await getAPokemonSpecies(pokemonId);

            const asArray = Object.entries(genera);
            const filterSpecies = asArray.filter(([key, value]) => value.language.name === "en");
            const species = filterSpecies[0][1].genus;
            const url = filterSpecies[0][1].language.url;

            setPokemon({ ...response.data, species: { name: species, url: url } });
            pokemonRef.current = pokemon;

            // Check if the current Pokémon is favorited
            const favorites = JSON.parse(localStorage.getItem("favoritePokemons") || "[]");
            if (favorites.includes(pokemonId)) {
              setIsFavorited(true);
            }

            navigate(`/pokemon/${pokemonId}/${response.data.name}`, { replace: true });
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
  }, [pokemonId]);

  const toggleFavorite = () => {
    setIsFavorited((prev) => {
      const newState = !prev;
      const favorites = JSON.parse(localStorage.getItem("favoritePokemons") || "[]");
      if (newState) {
        favorites.push(pokemonId);
      } else {
        const index = favorites.indexOf(pokemonId);
        if (index > -1) {
          favorites.splice(index, 1);
        }
      }
      localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
      return newState;
    });
  };

  return (
    <div className="Pokemon-Page">
      <div className="home-button-wrapper">
        <button className="home-button" onClick={() => navigate(`/pokemon/`)}>
          <HomeTwoToneIcon style={{ fontSize: 40 }} />
        </button>
      </div>
      <p className="page-title">Welcome to the Pokemon Page</p>
      {pokemon && <Pokemon pokemon={pokemon} isFavorited={isFavorited} onFavoriteToggle={toggleFavorite} />}
    </div>
  );
};

export default PokemonPage;
