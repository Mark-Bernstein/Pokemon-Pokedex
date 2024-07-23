import React, { useState } from "react";
import "./style.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PokemonListItemProps } from "./types";
import StarOutlineTwoToneIcon from "@mui/icons-material/StarOutlineTwoTone";

const StyledStarIcon = styled(StarOutlineTwoToneIcon)`
  color: black;
`;

const PokemonListItem = (props: PokemonListItemProps) => {
  // const [favoritePokemon, setFavoritePokemon] = useState([]);
  const { name, url } = props;
  const navigate = useNavigate();

  const id = url.split("/").slice(-2)[0];

  const capitalizeName = (pokemonName: string) => {
    return pokemonName[0].toUpperCase() + pokemonName.slice(1);
  };

  const capitalizedName = capitalizeName(name);

  // const starPokemon = () => {
  //   setFavoritePokemon({...favoritePokemon, })
  // };

  return (
    <div className="pokemon-wrapper" key={url}>
      <StyledStarIcon />
      <button className="pokemon-name-button" onClick={() => navigate(`/pokemon/${id}`)}>
        {capitalizedName}
      </button>
    </div>
  );
};

export default PokemonListItem;
