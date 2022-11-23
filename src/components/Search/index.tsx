import React from "react";
import { SearchProps } from "../NavBar/types";

export const Search = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return <input type="text" placeholder="Search..." value={searchValue} onChange={handleChange} />;
};
