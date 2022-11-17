import React from "react";
import { render, screen } from "@testing-library/react";
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
