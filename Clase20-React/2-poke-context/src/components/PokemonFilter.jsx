import React from "react";
import { TextField } from "@mui/material";
import pokemonContext from "../pokemonContext";
import { useContext } from "react";

const PokemonFilter = () => {
  const { setFilter } = useContext(pokemonContext);
  return (
    <TextField
      label="Find..."
      variant="filled"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
export default PokemonFilter;
