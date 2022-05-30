import React from "react";
import PokemonRow from "./PokemonRow";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const PokemonTable = ({ data, filter, setSelectedPokemon }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter(({ name: { english } }) =>
              english.toLowerCase().startsWith(filter.toLowerCase())
            )
            .slice(0, 10)
            .map((pokemon) => (
              <PokemonRow
                key={pokemon.id}
                pokemon={pokemon}
                setSelectedPokemon={setSelectedPokemon} //prop drilling
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonTable;
