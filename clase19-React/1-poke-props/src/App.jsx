import { useEffect, useState } from "react";
import "./App.css";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "60vw",
        paddingTop: "1rem",
      }}
    >
      <PokemonFilter setFilter={setFilter} />
      <h1 className="title">Pokemon Search</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "2rem",
        }}
      >
        <PokemonTable
          data={data}
          filter={filter}
          setSelectedPokemon={setSelectedPokemon}
        />
        {selectedPokemon && (
          <PokemonInfo
            {...selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        )}
      </div>
    </div>
  );
}

export default App;
