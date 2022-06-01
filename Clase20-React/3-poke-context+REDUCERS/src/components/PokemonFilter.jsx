import React from "react";
import { TextField } from "@mui/material";
import pokemonContext from "../pokemonContext";
import { useContext } from "react";

const PokemonFilter = () => {
  const { dispatch } = useContext(pokemonContext);
  return (
    <TextField
      label="Find..."
      variant="filled"
      onChange={(e) =>
        dispatch({
          type: "SET_FILTER",
          payload: e.target.value,
        })
      }
    />
  );
};
export default PokemonFilter;
