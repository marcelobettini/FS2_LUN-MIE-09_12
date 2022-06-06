import { useEffect } from "react";
import { useReducer } from "react";
import pokemonContext from "./pokemonContext";
import pokemonReducer from "./pokemonReducer";
import "./App.css";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    data: [],
    filter: "",
    selectedPokemon: null,
  });
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "SET_DATA",
          payload: data,
        })
      );
  }, []);
  return (
    <pokemonContext.Provider value={{ state, dispatch }}>
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
