import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom";
import App from "./App";

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

it("says at least bulbasaur", async () => {
  render(
    <MemoryRouter initialEntries={["/pokemon"]}>
      <App />
    </MemoryRouter>
  );
  const linkElement = await screen.findByText(/bulbasaur/i);
  expect(linkElement).toBeInTheDocument();
});
