import { PokemonProps } from "./types";
import React from "react";

export const Pokemon = (props: PokemonProps) => {
  console.log("PROPS ARE: ", props);

  const uppercase = (pokemonInfo: string) => {
    if (props.pokemon != undefined) {
      return pokemonInfo[0].toUpperCase() + pokemonInfo.slice(1);
    }
  };

  const getAllAbilities = () => {
    if (props.pokemon != undefined) {
      const getAllAbilities = props.pokemon.abilities.map((pokemonAbilities) => {
        return <p key={pokemonAbilities.ability.url}>{uppercase(pokemonAbilities.ability.name)}</p>;
      });

      return getAllAbilities;
    }
  };

  const getAllTypes = () => {
    if (props.pokemon != undefined) {
      const getAllAbilities = props.pokemon.types.map((pokemonTypes) => {
        return <p key={pokemonTypes.type.name}>{uppercase(pokemonTypes.type.name)}</p>;
      });

      return getAllAbilities;
    }
  };

  return (
    <div>
      {props.pokemon != undefined && (
        <div>
          <img src={props.pokemon.sprites.front_default} alt="Image" />
          <p>Name: {uppercase(props.pokemon.name)}</p>
          <p>Species: {props.pokemon.species.name}</p>
          <p>Height: {props.pokemon.height} m</p>
          <p>Weight: {props.pokemon.weight} kg</p>
          <div>Abilities: {getAllAbilities()}</div>
          <div>Type(s): {getAllTypes()}</div>
        </div>
      )}
    </div>
  );
};
