import React from "react";
import { SearchProps } from "../NavBar/types";

export const Search = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Which Pokémon are you looking for? </label>
      <input id="search" type="text" placeholder="Search..." value={searchValue} onChange={handleChange} />
    </div>
  );
};
