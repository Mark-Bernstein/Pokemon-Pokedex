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

interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: NamedApiResource;
}

interface EvolutionDetail {
  item: NamedApiResource;
  trigger: NamedApiResource;
  gender: number;
  held_item: NamedApiResource;
  known_move: NamedApiResource;
  known_move_type: NamedApiResource;
  location: NamedApiResource;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: NamedApiResource;
  party_type: NamedApiResource;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: NamedApiResource;
  turn_upside_down: boolean;
}

interface ChainLink {
  is_baby: boolean;
  species: NamedApiResource;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
}

interface EvolutionChain {
  id: number;
  baby_trigger_item: NamedApiResource;
  chain: Chain;
}

interface Name {
  name: string;
  language: NamedApiResource;
}

interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: NamedApiResource;
}

interface FlavorText {
  flavor_text: string;
  language: NamedApiResource;
  version: NamedApiResource;
}

interface Description {
  description: string;
  language: NamedApiResource;
}

interface Genus {
  genus: string;
  language: NamedApiResource;
}

interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: NamedApiResource;
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

export interface GetPokemonSpeciesResponse {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: NamedApiResource;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: NamedApiResource[];
  color: NamedApiResource;
  shape: NamedApiResource;
  evolves_from_species: NamedApiResource;
  evolution_chain: EvolutionChain;
  habitat: NamedApiResource;
  generation: NamedApiResource;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}
