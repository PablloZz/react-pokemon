import React, { useState, useEffect } from "react"
import axios from "axios"
import PokemonList from "./components/PokemonList/PokemonList"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  )
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => (cancel = c)),
      })
      .then(res => {
        setPokemons(res.data.results)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
        setLoading(false)
      })
    return () => {
      cancel()
    }
  }, [currentPageUrl])

  const prevPage = () => {
    setCurrentPageUrl(prevPageUrl)
  }

  const nextPage = () => {
    setCurrentPageUrl(nextPageUrl)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div className='App'>
      <PokemonList
        pokemons={pokemons}
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
    </div>
  )
}

export default App
