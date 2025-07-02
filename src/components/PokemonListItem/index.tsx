import React from "react";
import "./style.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PokemonListItemProps } from "./types";
import StarSharpIcon from "@mui/icons-material/StarSharp";

const customShouldForwardProp = (prop: string) => !["isFavorited"].includes(prop);

const StyledStarIcon = styled(StarSharpIcon).withConfig({
  shouldForwardProp: customShouldForwardProp,
})<{ isFavorited: boolean }>`
  color: ${(props) => (props.isFavorited ? "blue" : "transparent")};
  box-shadow: ${(props) => (props.isFavorited ? "0px 0px 10px gold" : "none")};
  border: 3px solid ${(props) => (props.isFavorited ? "blue" : "transparent")};
  display: ${(props) => (props.isFavorited ? "flex" : "none")};
  background-color: ${(props) => (props.isFavorited ? "white" : "transparent")};
  border-radius: 50%;
  max-height: 50px;
  max-width: 50px;
`;

const PokemonListItem = ({ name, url, isFavorited }: PokemonListItemProps) => {
  const navigate = useNavigate();
  const id = url.split("/").slice(-2)[0];

  const capitalizedName = name[0].toUpperCase() + name.slice(1);

  return (
    <button className="pokemon-wrapper" onClick={() => navigate(`/pokemon/${id}`)}>
      {isFavorited && <StyledStarIcon isFavorited={isFavorited} />}
      <span className="pokemon-name-span">{capitalizedName}</span>
    </button>
  );
};

export default PokemonListItem;
