import React from "react";
import PokemonRow from "./PokemonRow";
import pokemonContext from "../pokemonContext";
import { useContext } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const PokemonTable = () => {
  const { data, filter } = useContext(pokemonContext);
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
              <PokemonRow key={pokemon.id} pokemon={pokemon} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokemonTable;
