import { Button, TableRow, TableCell } from "@mui/material";
import pokemonContext from "../pokemonContext";
import { useContext } from "react";

// onDetail es un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App).
const PokemonRow = ({ pokemon }) => {
  const { setSelectedPokemon } = useContext(pokemonContext);
  return (
    <TableRow>
      <TableCell>{pokemon.name.english}</TableCell>
      <TableCell>{pokemon.type.join(", ")}</TableCell>
      <TableCell align="center">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setSelectedPokemon(pokemon)}
        >
          info
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PokemonRow;
