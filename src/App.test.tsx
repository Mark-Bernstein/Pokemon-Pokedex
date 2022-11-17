import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("says at least bulbasaur", () => {
  render(<App />);
  const linkElement = screen.getByText(/bulbasaur/i);
  expect(linkElement).toBeInTheDocument();
});
