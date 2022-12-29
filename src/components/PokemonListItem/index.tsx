import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonListItemProps } from "./types";

const PokemonListItem = (props: PokemonListItemProps) => {
  const { name, url } = props;
  const navigate = useNavigate();

  const id = url.split("/").slice(-2)[0];

  const capitalizeName = (pokemonName: string) => {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  };

  const capitalizedName = capitalizeName(name);

  return (
    <div key={url}>
      <button onClick={() => navigate(`/pokemon/${id}`)}>{capitalizedName}</button>
    </div>
  );
};

export default PokemonListItem;
