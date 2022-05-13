import React, { useState, useContext, useEffect } from 'react'
import { useRequestData } from '../hooks/useRequestData'
import { BASE_URL } from '../constants/Constants'
import { useNavigate, useParams } from 'react-router-dom'
import GlobalStateContext from "../global/GlobalStateContext"
import { GlobalState } from '../global/GlobalState'
import axios from 'axios';
import { useRequestDataPokemon } from '../hooks/useRequestDataPokemon';
import { goToHomePage } from '../routes/coordinator.js'
import Cards from '../components/Cards';
import { DivCards, PGreen, PRed, PBlue, Button, BoxInfoBlue, BoxInfoGreen, BoxInfoRed, TextoBotao1, H1, H3, P, Imagem, DivContain, DivHome} from "../styles/DetailsStyle";
import {TextoBotao, Pokebola, DivButtonPokedex  }  from "../styles/HomePageStyle";
import Poke_bola from "../img/pokebola.png"
import Gif from "../img/gof.gif"

const Details = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [pokemonDetails] = useRequestDataPokemon({}, `${BASE_URL}${params.name}/`);

  const { states, setters } = useContext(GlobalStateContext);
  const { details, pokemons, pokedex  } = states;
  const { setDetails, setPokemons, setPokedex } = setters;


  const settingDetails = () => {
    setDetails(pokemonDetails)
  }
  
  useEffect(() => {
     pokemonDetails.name && settingDetails();      
  }, [pokemonDetails])
  
    const abilitiesMap = details.name && details.abilities.map((pokemon) => {
      return (
          <PBlue><strong>{pokemon.ability.name.toUpperCase()} </strong></PBlue>
      )
    })


    const statsMap = details.name && details.stats.map((pokemon) => {
      return (
        <>
          <PGreen><strong>{pokemon.stat.name.toUpperCase()}: </strong></PGreen>
          <PRed><strong>{pokemon.base_stat}</strong> </PRed>
        </>
      )
    })

    const types = details.name && details.types.map((pokemon) => {
      return (
          <PRed><strong>Type Name:</strong> {pokemon.type.name}</PRed>
      )
    })

    const addToPokedex = (poke) => {
      const pokeIndex = pokemons.findIndex((pokemon) => {
        return (
          poke.name === pokemon.name
        )
      })
      const newPokemons = [...pokemons]; // tirar
      newPokemons.splice(pokeIndex, 1);
      //sort
      setPokemons(newPokemons);

      const newPokedex = [...pokedex, poke];
      
      setPokedex(newPokedex);

      alert(`${poke.name} foi adicionado a sua Pokedex`)

    }


  return (
    <DivContain>
      <DivHome>
        <Button onClick={() => goToHomePage(navigate)}>HomePage</Button>
      </DivHome>
    <DivCards>
      <div>
      {details.name && <Imagem src={details.sprites.front_default} />}
      {details.name && <Imagem src={details.sprites.back_default} />}
      </div>
      {details && <H1>{details.name}</H1>}
      <div>
      <BoxInfoBlue>
        <PBlue><strong>Abilities:</strong></PBlue>
        {abilitiesMap}
      </BoxInfoBlue>
      <BoxInfoGreen>
      {statsMap}
      </BoxInfoGreen>
      <BoxInfoRed>
      {types}
      <PRed><strong>Height:</strong> {details && details.height}</PRed>
      <PRed><strong>Weight:</strong> {details && details.weight}</PRed>
      </BoxInfoRed>
      </div>
      {/* <Button>Adicionar a Pokedex</Button> */}
      <Button onClick={() => { addToPokedex(details) }}><TextoBotao>Adicionar a Pokedex</TextoBotao><Pokebola src={Poke_bola} alt="Pokebola" /></Button>

    </DivCards>
    </DivContain>
  )
}

export default Details;
