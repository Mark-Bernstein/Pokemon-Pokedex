export interface ListOptions {
  limit?: number;
  offset?: number;
}

interface NamedApiResource {
  name: string;
  url: string;
}

interface ListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: NamedApiResource[];
}

interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedApiResource;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedApiResource;
}

interface PokemonHeldItemVersion {
  version: NamedApiResource;
  rarity: number;
}

interface PokemonHeldItem {
  item: NamedApiResource;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonMoveVersion {
  move_learned_method: NamedApiResource;
  version_group: NamedApiResource;
  level_learned_at: number;
}

interface PokemonMove {
  move: NamedApiResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonType {
  slot: number;
  type: NamedApiResource;
}

interface PokemonTypePast {
  generation: NamedApiResource;
  types: PokemonType[];
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface PokemonStat {
  stat: NamedApiResource;
  effort: number;
  base_stat: number;
}

export interface GetPokemonResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weigth: number;
  abilities: PokemonAbility[];
  forms: NamedApiResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: NamedApiResource;
  stats: PokemonStat[];
  types: PokemonType[];
}
