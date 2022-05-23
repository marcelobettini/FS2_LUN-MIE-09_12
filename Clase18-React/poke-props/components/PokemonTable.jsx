import React from 'react'
import PokemonRow from './PokemonRow'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"

function PokemonTable({ data, filter, setSelectedPokemon }) {

    return (
        <TableContainer component={Paper} sx={{ display: 'flex', mt: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data
                        .filter(({ name: { english } }) => english.toLowerCase().includes(filter.toLowerCase()))
                        .slice(0, 8)
                        .map((pokemon) =>
                            <PokemonRow key={pokemon.id} pokemon={pokemon} setSelectedPokemon={setSelectedPokemon} />
                        )}
                </TableBody>

            </Table>

        </TableContainer>
    )
}

export default PokemonTable