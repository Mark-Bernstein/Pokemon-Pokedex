import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";
import { PokemonProps } from "./types";
import StarSharpIcon from "@mui/icons-material/StarSharp";

const customShouldForwardProp = (prop: string) => !["isFavorited", "isClicked"].includes(prop);

const StyledStarIcon = styled(StarSharpIcon).withConfig({
  shouldForwardProp: customShouldForwardProp,
})<{ isFavorited?: boolean; isClicked: boolean }>`
  color: ${(props) => (props.isFavorited ? "blue !important" : "lightgrey !important")};
  box-shadow: 2px 2px 10px white !important;
  border: 3px solid ${(props) => (props.isFavorited ? "blue !important" : "lightgrey !important")};
  border-radius: 50% !important;
  background: white !important;
  height: 50px !important;
  width: 50px !important;
  margin-right: 10px !important;
  transition: color 1s ease, border-color 1s ease, transform 1s ease !important;
  transform: ${(props) => (props.isClicked ? "rotate(390deg) !important" : "rotate(360deg) !important")};

  &:hover {
    transform: ${(props) => (props.isClicked ? "rotate(390deg) !important" : "rotate(360deg) !important")};
  }
`;

export const Pokemon = (props: PokemonProps) => {
  const { pokemon, isFavorited, onFavoriteToggle } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClicked(true);
    onFavoriteToggle();
    setTimeout(() => setIsClicked(false), 1000);
  };

  const uppercase = (pokemonInfo: string) => {
    if (pokemon) {
      return pokemonInfo[0].toUpperCase() + pokemonInfo.slice(1);
    }
  };

  const getAllAbilities = () => {
    if (pokemon) {
      return pokemon.abilities.map((pokemonAbilities) => (
        <p className="pokemon-info-sub-title" key={pokemonAbilities.ability.url}>
          · {uppercase(pokemonAbilities.ability.name)}
        </p>
      ));
    }
  };

  const getAllTypes = () => {
    if (pokemon) {
      return pokemon.types.map((pokemonTypes) => (
        <p className="pokemon-info-sub-title" key={pokemonTypes.type.name}>
          · {uppercase(pokemonTypes.type.name)}
        </p>
      ));
    }
  };

  return (
    <div>
      {pokemon ? (
        <>
          <div className="favorite-wrapper">
            <StyledStarIcon isFavorited={isFavorited} isClicked={isClicked} onClick={handleClick} />
            <span className="favorite-text">
              {isFavorited ? "Press this star to UNSAVE as a favorite" : "Press this star to SAVE as a favorite"}
            </span>
          </div>
          <div className="pokemon-image-wrapper">
            <img className="pokemon-image" src={pokemon.sprites.front_default} alt="Image" />
          </div>
          <p className="pokemon-info-title">
            #{pokemon.order} - {uppercase(pokemon.name)}
          </p>
          <p className="pokemon-info-title">Species: {pokemon.species.name}</p>
          <p className="pokemon-info-title">Height: {pokemon.height} m</p>
          <p className="pokemon-info-title">Weight: {pokemon.weight} kg</p>
          <div className="pokemon-info-title">Abilities: {getAllAbilities()}</div>
          <div className="pokemon-info-title">Type(s): {getAllTypes()}</div>
        </>
      ) : (
        <span>Loading... please wait...</span>
      )}
    </div>
  );
};

export default Pokemon;
