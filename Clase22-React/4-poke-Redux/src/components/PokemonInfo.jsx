import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import { setSelectedPokemon } from "../redux/pokemonSlice";


const PokemonInfo = () => {
  const dispatch = useDispatch()
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon)
  return (
    selectedPokemon && (
      <Card
        sx={{
          border: "1x solid lightGray",
          height: 310,
          minWidth: 250,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
            {selectedPokemon.name.japanese}
          </Typography>
          {Object.keys(selectedPokemon.base).map((key) => (
            <Typography key={key}>
              {key} : {selectedPokemon.base[key]}
            </Typography>
          ))}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              dispatch(setSelectedPokemon(null))}>
            dismiss
          </Button>
        </CardActions>
      </Card>
    )
  );
};

export default PokemonInfo;
