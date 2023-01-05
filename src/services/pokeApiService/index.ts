import axios, { AxiosResponse } from "axios";
import { GetPokemonResponse } from "./types";
import { GetPokemonSpeciesResponse } from "./types";
import { ListResponse } from "./types";

// export const getAllPokemon = async () => {
//   await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offest=0`).then((res) => res.data.results);
// };

export const getAllPokemon = async (): Promise<AxiosResponse<ListResponse, undefined>> => {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151&offest=0`).then((res) => res.data.results);
};

export const getAPokemon = (id: string): Promise<AxiosResponse<GetPokemonResponse, undefined>> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res);
};

export const getAPokemonSpecies = (id: string): Promise<AxiosResponse<GetPokemonSpeciesResponse, undefined>> => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res);
};
