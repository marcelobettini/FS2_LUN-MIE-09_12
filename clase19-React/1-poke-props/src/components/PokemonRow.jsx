import { Button, TableRow, TableCell } from "@mui/material";

// onDetail es un custom event, una función que actúa sobre el setter en el componente que tiene el estado (App).
const PokemonRow = ({ pokemon, setSelectedPokemon }) => (
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

export default PokemonRow;
