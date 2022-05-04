import React, { useState, useContext, useEffect } from 'react'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from '../constants/Constants'
import { useNavigate, useParams } from 'react-router-dom'
import GlobalStateContext from "../global/GlobalStateContext"
import { GlobalState } from '../global/GlobalState'
import axios from 'axios';
import { useRequestDataPokemon } from '../hooks/useRequestDataPokemon';
import { goToHomePage } from '../routes/coordinator.js'
// import Cards from '../components/Cards';
import {  Button, TextoBotao1} from "../styles/HomePageStyle";

const Details = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const [pokemonDetails] = useRequestDataPokemon({}, `${BASE_URL}${params.name}/`);

  const { states, setters } = useContext(GlobalStateContext);
  const { details } = states;
  const { setDetails } = setters;


  const settingDetails = () => {
    console.log(`Fui Chamado`)
    setDetails(pokemonDetails)
  }
  
  useEffect(() => {
     pokemonDetails.name && settingDetails();      
  }, [pokemonDetails])

  console.log(`PokemonDetails:`, pokemonDetails)
  console.log(`Detalhes:`, details)

  
    const abilitiesMap = details.name && details.abilities.map((pokemon) => {
      return (
        <div key={pokemon.ability.name}>
          <p> Abilities: {pokemon.ability.name} </p>
        </div>
      )
    })


    const statsMap = details.name && details.stats.map((pokemon) => {
      return (
        <div key={pokemon.stat.name}>
          <p>Name: {pokemon.stat.name}</p>
          <p>Value: {pokemon.base_stat}</p>
        </div>
      )
    })

    const types = details.name && details.types.map((pokemon) => {
      return (
        <div key={pokemon.type.name}>
          <p>Type Name: {pokemon.type.name}</p>
        </div>
      )
    })


  return (
    <div>
      <div>
        <Button onClick={() => goToHomePage(navigate)}>HomePage</Button>
      </div>
      {details.name && <img src={details.sprites.front_default} />}
      {details.name && <img src={details.sprites.back_default} />}
      {details && <p>{details.name}</p>}
      {abilitiesMap}
      {statsMap}
      {types}
      <p>Height: {details && details.height}</p>
      <p>Weight: {details && details.weight}</p>
    </div>
  )
}

export default Details;
