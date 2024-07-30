import React, { useState, useEffect } from "react";
import "./style.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PokemonListItemProps } from "./types";
import StarSharpIcon from "@mui/icons-material/StarSharp";

const StyledStarIcon = styled(StarSharpIcon)<{ isFavorited: boolean }>`
  color: ${(props) => (props.isFavorited ? "blue" : "transparent")};
  display: flex;
  box-shadow: ${(props) => (props.isFavorited ? "0px 0px 10px gold;" : "none")};
  border: 3px solid ${(props) => (props.isFavorited ? "blue" : "transparent")};
  border-radius: 50%;
  max-height: 50px;
  max-width: 50px;
  display: ${(props) => (props.isFavorited ? "" : "none")};
  background-color: ${(props) => (props.isFavorited ? "white;" : "none")};
`;

const PokemonListItem = (props: PokemonListItemProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const { name, url } = props;
  const navigate = useNavigate();

  const id = url.split("/").slice(-2)[0];

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoritePokemons") || "[]");
    setIsFavorited(favorites.includes(id));
  }, [id]);

  const capitalizeName = (pokemonName: string) => pokemonName[0].toUpperCase() + pokemonName.slice(1);
  const capitalizedName = capitalizeName(name);

  return (
    <button className="pokemon-wrapper" key={url} onClick={() => navigate(`/pokemon/${id}`)}>
      <StyledStarIcon isFavorited={isFavorited} />
      <span className="pokemon-name-span">{capitalizedName}</span>
    </button>
  );
};

export default PokemonListItem;
