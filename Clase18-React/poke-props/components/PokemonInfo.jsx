import React from 'react'
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material"

const PokemonInfo = ({ name: { english }, base, setSelectedPokemon }) => {
    return (
        <Card sx={{ height: 350, width: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            <CardContent>
                <Typography variant='h5' gutterBottom>{english}</Typography>
                {Object.keys(base).map((key) => (<Typography key={key}
                >{key} : {base[key]}</Typography>)
                )}

            </CardContent>
            <CardActions>
                <Button variant='contained' color="warning" onClick={() => setSelectedPokemon(null)}>dismiss</Button>
            </CardActions>
        </Card>
    )
}

export default PokemonInfo