import React from "react";
import styled from "styled-components";
import { PokemonProps } from "./types";
import StarSharpIcon from "@mui/icons-material/StarSharp";
import "./index.css";

const StyledStarIcon = styled(StarSharpIcon)`
  display: flex;
  box-shadow: 2px 2px 10px white;
  border: 3px solid #1900ff;
  border-radius: 100px;
  background: white;
`;

export const Pokemon = (props: PokemonProps) => {
  const uppercase = (pokemonInfo: string) => {
    if (props.pokemon != undefined) {
      return pokemonInfo[0].toUpperCase() + pokemonInfo.slice(1);
    }
  };

  const getAllAbilities = () => {
    if (props.pokemon != undefined) {
      const getAllAbilities = props.pokemon.abilities.map((pokemonAbilities) => {
        return (
          <p className="pokemon-info-sub-title" key={pokemonAbilities.ability.url}>
            · {uppercase(pokemonAbilities.ability.name)}
          </p>
        );
      });

      return getAllAbilities;
    }
  };

  const getAllTypes = () => {
    if (props.pokemon != undefined) {
      const getAllAbilities = props.pokemon.types.map((pokemonTypes) => {
        return (
          <p className="pokemon-info-sub-title" key={pokemonTypes.type.name}>
            · {uppercase(pokemonTypes.type.name)}
          </p>
        );
      });

      return getAllAbilities;
    }
  };

  return (
    <div>
      {props.pokemon != undefined ? (
        <div>
          {/* //TODO check if there should be a star here before rendering the star*/}
          <StyledStarIcon style={{ color: "blue" }} />
          <div className="pokemon-image-wrapper">
            <img className="pokemon-image" src={props.pokemon.sprites.front_default} alt="Image" />
          </div>
          <p className="pokemon-info-title">Name: {uppercase(props.pokemon.name)}</p>
          <p className="pokemon-info-title">Species: {props.pokemon.species.name}</p>
          <p className="pokemon-info-title">Height: {props.pokemon.height} m</p>
          <p className="pokemon-info-title">Weight: {props.pokemon.weight} kg</p>
          <div className="pokemon-info-title">Abilities: {getAllAbilities()}</div>
          <div className="pokemon-info-title">Type(s): {getAllTypes()}</div>
        </div>
      ) : (
        <div>Loading... please wait...</div>
      )}
    </div>
  );
};
