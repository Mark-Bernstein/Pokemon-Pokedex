import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonListItemProps } from "./types";
import StarOutlineTwoToneIcon from "@mui/icons-material/StarOutlineTwoTone";

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
    <div key={url}>
      {/* <StarOutlineTwoToneIcon style={{ color: "black" }} onClick={()=> starPokemon()}/> */}
      <StarOutlineTwoToneIcon style={{ color: "black" }} />
      <button onClick={() => navigate(`/pokemon/${id}`)}>{capitalizedName}</button>
    </div>
  );
};

export default PokemonListItem;
