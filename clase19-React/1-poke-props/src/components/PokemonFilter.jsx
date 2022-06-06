import React from "react";
import { TextField } from "@mui/material";

const PokemonFilter = ({ setFilter }) => {
  return (
    <TextField
      label="Find..."
      variant="filled"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
export default PokemonFilter;
