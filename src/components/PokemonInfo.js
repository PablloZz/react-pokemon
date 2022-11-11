import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../common/Loading'

function PokemonInfo({ name }) {
  const [pokemonInfo, setPokemonInfo] = useState()

  let {pokemonId} = useParams()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then(res => res.json()).then(data => {
      console.log(data)
      setPokemonInfo(data)
    })
  }, [pokemonId])
  
  if (!pokemonInfo) {
    return <Loading /> 
  }

  return (
    <div>
      <div>
        <h1 style={{ textTransform: "capitalize", textAlign: "center" }}>
          {name}
        </h1>
        <img src={pokemonInfo.sprites.front_shiny} alt="pokemon" />
        <div>
          <h2>Abilities:</h2>
          <div>
            {pokemonInfo.abilities.map(ability => (
              <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
          </div>
        </div>
        <div>
          <h2>Forms:</h2>
          {pokemonInfo.forms.map(form => (
            <p key={form.name}>{form.name}</p>
          ))}
        </div>
      </div>
      <div>
        <h2>Moves:</h2>
        {pokemonInfo.moves.map(move => (
          <span key={move.move.name}>{move.move.name}, </span>
        ))}
      </div>
    </div>
  )
}

export default PokemonInfo