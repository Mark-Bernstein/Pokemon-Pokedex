import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("says hello world", () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/i);
  expect(linkElement).toBeInTheDocument();
});
