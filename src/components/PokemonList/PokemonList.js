import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import PokemonInfo from "../PokemonInfo"
import Pokemon from "./Pokemon/Pokemon"
import Pagination from "../Pagination"
import "./PokemonList.css"

function PokemonList({ pokemons, nextPage, prevPage }) {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div>
      <Routes>
        {!showInfo && (
          <Route
            path='/'
            element={
              <div className="container">
                <div className="pokemons-container">
                  {pokemons.map(pokemon => (
                    <Pokemon
                      url={pokemon.url}
                      name={pokemon.name}
                      onClick={() => setShowInfo(true)}
                    />
                  ))}
                </div>
                <Pagination nextPage={nextPage} prevPage={prevPage} />
              </div>
            }
          />
        )}
        {pokemons.map(pokemon => (
          <Route
            path={`/${pokemon.name}/:pokemonId`}
            element={<PokemonInfo name={pokemon.name} key={pokemon.name} />}
          />
        ))}
      </Routes>
    </div>
  )
}

export default PokemonList
