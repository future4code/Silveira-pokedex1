import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator.js'
import { Button, TextoBotao1 } from "../styles/HomePageStyle";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Constants";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext"
import { GlobalState } from "../global/GlobalState";
import { CardsList, H1, DivCards, P, H3, Imagem, TextoBotao, Pokebola, DivButtonPokedex } from "../styles/HomePageStyle";
import Poke_bola from "../img/pokebola.png"
import { goToDetails, goToPokedex } from "../routes/coordinator";

const Pokedex = () => {
  const navigate = useNavigate();

  const [ getPokedex ] = useRequestData([], `${BASE_URL}`);

  const { states, setters } = useContext(GlobalStateContext);
  const { pokemons, pokedex } = states;
  const { setPokemons, setPokedex } = setters;
  

  useEffect(() => {
    // console.log(pokemons)
  }, [])

  // console.log(pokedex)

  const removeFromPokedex = (poke) => {
    const pokeIndex = pokedex.findIndex((pokemon) => {
      return (
        poke.name === pokemon.name
      )
    })
    const newPokedex = [...pokedex]; // tirar
    newPokedex.splice(pokeIndex, 1);
    //sort
    setPokedex(newPokedex);
    const newPokemons = [poke, ...pokemons];   
    newPokemons.sort((a, b) => a.id - b.id)
    setPokemons(newPokemons);
  }


  const pokedexMap = pokedex && pokedex.sort((a, b) => a.id - b.id).map((pokemon, index) => {
    // return (
    //     <Cards key={index}
    //         pokeName={pokemon.name}
    //         pokeUrl={pokemon.url}>
    //     </Cards>}
    // )

    return (
      <DivCards key={index}>
        <H3>{pokemon.name.toUpperCase()}</H3>
        <Imagem src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Button onClick={() => { goToDetails(navigate, pokemon.name) }}><TextoBotao>Detalhes</TextoBotao></Button>
        <Button onClick={() => { removeFromPokedex(pokemon) }}><TextoBotao>Remover da Pokedex</TextoBotao><Pokebola src={Poke_bola} alt="Pokebola" /></Button>
      </DivCards>
    )
  })

  return (
    <div>

      <Button onClick={() => goToHomePage(navigate)}>HomePage</Button>
      <CardsList>
          {pokedex && pokedexMap} 
        </CardsList> 
    </div>
  )
}

export default Pokedex;