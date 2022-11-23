export interface PokemonListProps {
  listOfPokemon: { name: string; url: string }[];
  setListOfPokemon: Dispatch<SetStateAction<never[]>>;
  searchValue: string;
}
