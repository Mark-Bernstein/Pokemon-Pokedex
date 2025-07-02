import React, { useState, useEffect } from "react";
import "./style.css";

type Pokemon = {
  name: string;
  url: string;
};

type FavoriteFilterButtonProps = {
  allPokemon: Pokemon[];
  onFilterChange: (filtered: Pokemon[]) => void;
};

const FavoriteFilterButton: React.FC<FavoriteFilterButtonProps> = ({ allPokemon, onFilterChange }) => {
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]); // <-- now number[]

  useEffect(() => {
    const stored = localStorage.getItem("favoritePokemons");
    const parsed = stored ? JSON.parse(stored).map(Number) : [];
    setFavoriteIds(parsed);
  }, []);

  const handleClick = () => {
    const toggleState = !showOnlyFavorites;
    setShowOnlyFavorites(toggleState);

    if (toggleState) {
      const filtered = allPokemon.filter((p) => {
        const idFromUrl = parseInt(p.url.split("/").filter(Boolean).pop() || "0");
        const isFav = favoriteIds.includes(idFromUrl);
        return isFav;
      });

      onFilterChange(filtered);
    } else {
      onFilterChange(allPokemon);
    }
  };

  return (
    <div className="filter-wrapper">
      <button className="pokemon-filter-button" onClick={handleClick}>
        {showOnlyFavorites ? "Show All Pokémon" : "Show Favorite Pokémon only"}
      </button>
    </div>
  );
};

export default FavoriteFilterButton;
