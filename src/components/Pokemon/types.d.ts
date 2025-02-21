import { GetPokemonResponse } from "../../services/pokeApiService/types";

export interface PokemonProps {
  pokemon: GetPokemonResponse | undefined;
  isFavorited?: boolean;
  onFavoriteToggle: VoidFunction;
}
