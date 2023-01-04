import { PokemonProps } from "./types";
import React from "react";

// export const Pokemon = ({ pokemon }: PokemonProps) => {
//   console.log("pokemon issssssss:::: ", pokemon);
//   return <div> idk </div>;
// };

export const Pokemon = (props: PokemonProps) => {
  console.log("PROPS ARE: ", props);
  return (
    <div>
      {props.pokemon != undefined && (
        <div>
          <img src={props.pokemon.sprites.front_default} alt="Image" />
          <p>{props.pokemon.name}</p>
          {/* TODO - get the genus instead */}
          <p>{props.pokemon.species.name}</p>
        </div>
      )}
      {/* {props.pokemon != undefined && <p>{props.pokemon.name}</p>} */}
      {/* <p>{props.pokemon != undefined ? props.pokemon.name : "LOLWUT"}</p> */}

      {/* TODO make the types dynamic */}
      {/* <p>{props.pokemon.types[0].type.name}</p>
      <p>{props.pokemon.types[1].type.name}</p> */}
    </div>
  );
};
