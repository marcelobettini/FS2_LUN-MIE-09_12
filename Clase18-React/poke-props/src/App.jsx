import { useEffect, useState } from 'react'
import { Button, Typography } from '@mui/material'
import './App.css'
import PokemonTable from '../components/PokemonTable'
import PokemonFilter from '../components/PokemonFilter'
import PokemonInfo from '../components/PokemonInfo'

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [filter, setFilter] = useState("")
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  function handleError(res) {
    if (!res.ok) throw Error(res.status)
    return res.json()
  }


  useEffect(() => {
    fetch('http://localhost:3000/pokemon.json')
      .then(res => handleError(res))
      .then(data => setData(data))
      .catch(error => setError(true))
  }, [error])

  if (error) return (
    <>
      <h3>Error while fetching...</h3>
      <Button variant='contained' color="error" onClick={() => setError(false)}>Home</Button>
    </>

  )
  return (
    <main style={{ margin: 'auto', display: 'flex', flexDirection: 'column', width: '60vw', paddingTop: '1em' }}>
      <Typography variant="h3">Pokemon Finder</Typography>
      <PokemonFilter setFilter={setFilter} />
      <section style={{
        display: "grid",
        alignItems: 'center',
        gridTemplateColumns: "3fr 1fr",
        gap: "2rem",
      }}>
        <PokemonTable data={data} filter={filter} setSelectedPokemon={setSelectedPokemon} />
        {selectedPokemon && <PokemonInfo {...selectedPokemon} setSelectedPokemon={setSelectedPokemon} />}

      </section>
    </main>

  )
}

export default App
