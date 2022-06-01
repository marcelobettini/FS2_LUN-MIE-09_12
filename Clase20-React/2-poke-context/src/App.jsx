import { useEffect, useState } from "react";
import pokemonContext from "./pokemonContext";
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
    <pokemonContext.Provider
      value={{
        data,
        setData,
        filter,
        setFilter,
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      <div
        style={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          width: "60vw",
          paddingTop: "1rem",
        }}
      >
        <PokemonFilter />
        <h1 className="title">Pokemon Search</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: "2rem",
          }}
        >
          <PokemonTable />
          <PokemonInfo />
        </div>
      </div>
    </pokemonContext.Provider>
  );
}

export default App;
