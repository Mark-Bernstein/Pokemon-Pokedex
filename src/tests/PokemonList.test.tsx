import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "../pages/PokemonListPage";

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: {
        count: 1154,
        next: "https://pokeapi.co/api/v2/pokemon/?offset=9&limit=9",
        previous: null,
        results: [
          {
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/",
          },
          {
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/",
          },
          {
            name: "venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/",
          },
          {
            name: "charmander",
            url: "https://pokeapi.co/api/v2/pokemon/4/",
          },
          {
            name: "charmeleon",
            url: "https://pokeapi.co/api/v2/pokemon/5/",
          },
          {
            name: "charizard",
            url: "https://pokeapi.co/api/v2/pokemon/6/",
          },
          {
            name: "squirtle",
            url: "https://pokeapi.co/api/v2/pokemon/7/",
          },
          {
            name: "wartortle",
            url: "https://pokeapi.co/api/v2/pokemon/8/",
          },
          {
            name: "blastoise",
            url: "https://pokeapi.co/api/v2/pokemon/9/",
          },
        ],
      },
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    }),
}));

describe("Viewing a list of pokemon", () => {
  it("displays a list of pokemon!", async () => {
    render(
      <MemoryRouter initialEntries={["/pokemon"]}>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
        </Routes>
      </MemoryRouter>
    );

    const charizard = await screen.findByText(/charizard/i);
    expect(charizard).toBeInTheDocument();

    const bulbasaur = await screen.findByText(/bulbasaur/i);
    expect(bulbasaur).toBeInTheDocument();

    const charmander = await screen.findByText(/charmander/i);
    expect(charmander).toBeInTheDocument();

    const charmeleon = await screen.findByText(/charmeleon/i);
    expect(charmeleon).toBeInTheDocument();

    const squirtle = await screen.findByText(/squirtle/i);
    expect(squirtle).toBeInTheDocument();
  });
});

describe("Filtering pokemon...", () => {
  it("filters words out that do not start with 'char'", async () => {
    render(
      <MemoryRouter initialEntries={["/pokemon"]}>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
        </Routes>
      </MemoryRouter>
    );

    const input = screen.getByLabelText<HTMLInputElement>("Which Pokémon are you looking for?");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "char" } });

    const squirtle = await screen.queryByText(/squirtle/i);
    expect(squirtle).not.toBeInTheDocument();

    const chars = await screen.findAllByText(/char/i);
    expect(chars.length).toBe(3);
  });
});
