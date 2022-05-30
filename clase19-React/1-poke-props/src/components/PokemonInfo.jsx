import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
const PokemonInfo = ({ name: { japanese }, base, setSelectedPokemon }) => {
  return (
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
          {japanese}
        </Typography>
        {Object.keys(base).map((key) => (
          <Typography key={key}>
            {key} : {base[key]}
          </Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setSelectedPokemon(null)}
        >
          dismiss
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonInfo;
