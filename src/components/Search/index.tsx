import React from "react";
import { SearchProps } from "../NavBar/types";
import "./index.css";

export const Search = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-wrapper">
      <label className="search-label" htmlFor="search">
        Which Pokémon are you looking for?{" "}
      </label>
      <input className="search-input" type="text" placeholder="Search..." value={searchValue} onChange={handleChange} />
    </div>
  );
};
