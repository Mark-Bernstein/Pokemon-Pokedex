import React from "react";
import { SearchProps } from "./types";
import { Search } from "../Search";

export const NavBar = (props: SearchProps) => {
  const { searchValue, setSearchValue } = props;

  console.log("searchValue is: ", searchValue);
  console.log("setSearchValue is: ", setSearchValue);

  return <Search searchValue={searchValue} setSearchValue={setSearchValue} />;
};
