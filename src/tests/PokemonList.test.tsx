import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Viewing a list of pokemon.", () => {
  it("displays bulbasaur!", () => {
    render(<App />);

    const bulbasaur = screen.getByText(/bulbasaur/i);
    expect(bulbasaur).toBeInTheDocument();
  });
  it("displays charmander!", () => {
    render(<App />);

    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();
  });
  it("displays charmeleon!", () => {
    render(<App />);

    const charmeleon = screen.getByText(/charmeleon/i);
    expect(charmeleon).toBeInTheDocument();
  });

  it("displays charizard!", () => {
    render(<App />);

    const charizard = screen.getByText(/charizard/i);
    expect(charizard).toBeInTheDocument();
  });

  it("displays squirtle!", () => {
    render(<App />);

    const squirtle = screen.getByText(/squirtle/i);
    expect(squirtle).toBeInTheDocument();
  });
});

describe("Filtering pokemon...", () => {
  it("filters words out that do not start with 'char'", () => {
    render(<App />);

    const input = screen.getByLabelText<HTMLInputElement>("Which Pokémon are you looking for?");
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "char" } });

    const squirtle = screen.queryByText(/squirtle/i);
    expect(squirtle).not.toBeInTheDocument();

    const chars = screen.getAllByText(/char/i);
    expect(chars.length).toBe(3);
  });
});
