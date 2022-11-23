import axios from "axios";

// import { ListResponse } from "./types";
/*

Import ListResponse from the types.d.ts file in the directory. 
The return type of your function should be Promise<AxiosResponse<ListResponse, undefined>>.

*/

export const getAllPokemon = async () => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offest=0`).then((res) => {
    const pokemonListData = res.data.results;

    return pokemonListData;
  });
};
