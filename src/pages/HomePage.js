import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components"
import GlobalStateContext from "../global/GlobalStateContext"
import { GlobalState } from "../global/GlobalState";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { goToDetails, goToPokedex } from "../routes/coordinator";
import { CardsList, H1, DivCards, P, H3, Imagem, Button, TextoBotao, Pokebola } from "../styles/HomePageStyle";
import { BASE_URL, PIC_URL } from "../constants/Constants";
import { useRequestData } from "../hooks/useRequestData";
import { useRequestDataPokemon } from "../hooks/useRequestDataPokemon";
import Poke_bola from "../img/pokebola.png"



const HomePage = () => {
    const navigate = useNavigate();
    const { states, setters } = useContext(GlobalStateContext);
    const { pokemons } = states;
    const { setPokemons } = setters;

    const [ getPokemons ] = useRequestData([], `${BASE_URL}`);
    const settingPokemons = () => {
      setPokemons(getPokemons)
    }
    
    useEffect(() => {
      settingPokemons();
    }, [getPokemons])


    const pokemonsMap = pokemons && pokemons.map((pokemon, index) => {
        // return (
        //     <Cards key={index}
        //         pokeName={pokemon.name}
        //         pokeUrl={pokemon.url}>
        //     </Cards>}
        // )

        return (
            <DivCards key={index}>
              <H3>{pokemon.name.toUpperCase()}</H3>
              
              {/* <P><strong>Name:</strong> {pokemon.name}</P> */}
              <Imagem src={`${PIC_URL}${index+1}.png`} alt={pokemon.name} />
              {/* <P><strong>Url:</strong> {pokemon.url}</P> */}
              <Button onClick={() => {goToDetails(navigate, pokemon.name)}}><TextoBotao>Detalhes</TextoBotao></Button>
              <Button onClick={() => {goToPokedex(navigate)}}><TextoBotao>Adicionar a Pokedex</TextoBotao><Pokebola src={Poke_bola} alt="Pokebola" /></Button>
            </DivCards>
          )
    })


    return (
        <>
            <H1>Lista de pokemons</H1>
            <CardsList>
                {pokemons && pokemonsMap} 
            </CardsList>
        </>
    )
}

export default HomePage;
