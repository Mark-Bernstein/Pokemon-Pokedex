import axios, { AxiosResponse } from "axios";
import { GetPokemonResponse } from "./types";
import { GetPokemonSpeciesResponse } from "./types";
// import { ListResponse } from "./types";

export const getAllPokemon = async () => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offest=0`).then((res) => {
    const pokemonListData = res.data.results;

    return pokemonListData;
  });
};

export const getAPokemon = (id: string): Promise<AxiosResponse<GetPokemonResponse, undefined>> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
    // const pokemonInfo = res.data;
    // console.log("pokemonInfo is: ", pokemonInfo);

    // return pokemonInfo;
    return res;
  });
};

export const getAPokemonSpecies = (id: string): Promise<AxiosResponse<GetPokemonSpeciesResponse, undefined>> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
    // console.log("res is: ", res);

    // const pokemonListData = res.data;

    // console.log("pokemonListData is: ", pokemonListData);

    // return pokemonListData;
    return res;
  });
};

// export const getAPokemon = async (id: string) => {
//   await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
//     const pokemonInfo = res.data;
//     console.log("pokemonInfo is: ", pokemonInfo);

//     return pokemonInfo;
//   });
// };

// export const getAPokemonSpecies = async (id: string) => {
//   await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => {
//     const pokemonListData = res.data;
//     console.log("pokemonListData is: ", pokemonListData);

//     return pokemonListData;
//   });
// };
