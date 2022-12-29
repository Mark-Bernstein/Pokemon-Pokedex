import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import PokemonPage from "../pages/PokemonPage";

jest.mock("axios", () => ({
  create: () => ({
    get: (url: string) => {
      let response;
      if (url === "pokemon/1") {
        response = {
          data: {
            abilities: [
              {
                ability: {
                  name: "overgrow",
                  url: "https://pokeapi.co/api/v2/ability/65/",
                },
                is_hidden: false,
                slot: 1,
              },
            ],
            base_experience: 64,
            forms: [
              {
                name: "bulbasaur",
                url: "https://pokeapi.co/api/v2/pokemon-form/1/",
              },
            ],
            game_indices: [
              {
                game_index: 153,
                version: {
                  name: "red",
                  url: "https://pokeapi.co/api/v2/version/1/",
                },
              },
            ],
            height: 7,
            held_items: [],
            id: 1,
            is_default: true,
            location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
            moves: [
              {
                move: {
                  name: "razor-wind",
                  url: "https://pokeapi.co/api/v2/move/13/",
                },
                version_group_details: [
                  {
                    level_learned_at: 0,
                    move_learn_method: {
                      name: "egg",
                      url: "https://pokeapi.co/api/v2/move-learn-method/2/",
                    },
                    version_group: {
                      name: "gold-silver",
                      url: "https://pokeapi.co/api/v2/version-group/3/",
                    },
                  },
                ],
              },
            ],
            name: "bulbasaur",
            order: 1,
            past_types: [],
            species: {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon-species/1/",
            },
            sprites: {
              back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
              back_female: null,
              back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
              back_shiny_female: null,
              front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              front_female: null,
              front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
              front_shiny_female: null,
            },
            stats: [
              {
                base_stat: 45,
                effort: 0,
                stat: {
                  name: "hp",
                  url: "https://pokeapi.co/api/v2/stat/1/",
                },
              },
              {
                base_stat: 49,
                effort: 0,
                stat: {
                  name: "attack",
                  url: "https://pokeapi.co/api/v2/stat/2/",
                },
              },
              {
                base_stat: 49,
                effort: 0,
                stat: {
                  name: "defense",
                  url: "https://pokeapi.co/api/v2/stat/3/",
                },
              },
              {
                base_stat: 65,
                effort: 1,
                stat: {
                  name: "special-attack",
                  url: "https://pokeapi.co/api/v2/stat/4/",
                },
              },
              {
                base_stat: 65,
                effort: 0,
                stat: {
                  name: "special-defense",
                  url: "https://pokeapi.co/api/v2/stat/5/",
                },
              },
              {
                base_stat: 45,
                effort: 0,
                stat: {
                  name: "speed",
                  url: "https://pokeapi.co/api/v2/stat/6/",
                },
              },
            ],
            types: [
              {
                slot: 1,
                type: {
                  name: "grass",
                  url: "https://pokeapi.co/api/v2/type/12/",
                },
              },
              {
                slot: 2,
                type: {
                  name: "poison",
                  url: "https://pokeapi.co/api/v2/type/4/",
                },
              },
            ],
            weight: 69,
          },
          status: 200,
          statusText: "OK",
          headers: {},
          config: {},
        };
      } else if (url === "pokemon-species/1/") {
        response = {
          data: {
            base_happiness: 50,
            capture_rate: 45,
            color: {
              name: "green",
              url: "https://pokeapi.co/api/v2/pokemon-color/5/",
            },
            egg_groups: [
              {
                name: "monster",
                url: "https://pokeapi.co/api/v2/egg-group/1/",
              },
              {
                name: "plant",
                url: "https://pokeapi.co/api/v2/egg-group/7/",
              },
            ],
            evolution_chain: {
              url: "https://pokeapi.co/api/v2/evolution-chain/1/",
            },
            evolves_from_species: null,
            flavor_text_entries: [],
            form_descriptions: [],
            forms_switchable: false,
            gender_rate: 1,
            genera: [
              {
                genus: "Seed Pokémon",
                language: {
                  name: "en",
                  url: "https://pokeapi.co/api/v2/language/9/",
                },
              },
            ],
          },
          status: 200,
          statusText: "OK",
          headers: {},
          config: {},
        };
      }

      const myMock = jest.fn();

      myMock.mockReturnValueOnce(Promise.resolve(response));
      return myMock();
    },
  }),
}));

describe("Viewing a pokemon.", () => {
  test("it displays a pokemon", async () => {
    // TODO: Fill this in
  });
});

/*
You can render the PokemonPage like this in the test.


render(
      <MemoryRouter initialEntries={["/pokemon/1"]}>
        <Routes>
          <Route path="/pokemon/:pokemonId" element={<PokemonPage />} />
          <Route path="/pokemon/:pokemonId/:pokemonName" element={<PokemonPage />} />
        </Routes>
      </MemoryRouter>
    );
*/
