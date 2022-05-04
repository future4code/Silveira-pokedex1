import React, { useState, useContext, useEffect } from 'react'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from '../constants/Constants'
import { useNavigate, useParams } from 'react-router-dom'
import GlobalStateContext from "../components/Contexts";
import axios from 'axios';
import { useRequestDataPokemon } from '../hooks/useRequestDataPokemon';
import { goToHomePage } from '../routes/coordinator.js'
// import Cards from '../components/Cards';

const Details = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [pokemonDetails] = useRequestDataPokemon({}, `${BASE_URL}${params.name}/`);
  console.log(pokemonDetails);

  const abilitiesMap = pokemonDetails.name && pokemonDetails.abilities.map((pokemon) => {
    return (
      <div key={pokemon.ability.name}>
        <p> Abilities: {pokemon.ability.name} </p>
      </div>
    )
  })


  const statsMap = pokemonDetails.name && pokemonDetails.stats.map((pokemon) => {
    return (
      <div key={pokemon.stat.name}>
        <p>Name: {pokemon.stat.name}</p>
        <p>Value: {pokemon.base_stat}</p>
      </div>
    )
  })

  const types = pokemonDetails.name && pokemonDetails.types.map((pokemon) => {
    return (
      <div key={pokemon.type.name}>
        <p>Type Name: {pokemon.type.name}</p>
      </div>
    )
  })


  return (
    <div>
      <div>
        <button onClick={() => goToHomePage(navigate)}>HomePage</button>
      </div>
      {pokemonDetails.name && <img src={pokemonDetails.sprites.front_default} />}
      {pokemonDetails.name && <img src={pokemonDetails.sprites.back_default} />}
      {pokemonDetails && <p>{pokemonDetails.name}</p>}
      {abilitiesMap}
      {statsMap}
      {types}
      <p>Height: {pokemonDetails && pokemonDetails.height}</p>
      <p>Weight: {pokemonDetails && pokemonDetails.weight}</p>
    </div>
  )
}

export default Details;
