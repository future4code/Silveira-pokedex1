import React, { useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import styled from "styled-components"
import GlobalStateContext from "../components/Contexts";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { goToDetails, goToPokedex } from "../routes/coordinator";

const CardsList = styled.div`
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 50px;
    margin: 40px;
`

const H1 = styled.h1`
    display: flex;
    justify-content: center;
    margin: 10px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #1abc9c 50%,#3498db 50%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

    :hover { 
    background-color: green; 

    transition: 1.0s;

    opacity: 0.8;

    }
`


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // APAGAR DEPOIS E VOLTAR PRO CARD
const DivCards = styled.div`
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px;
  border-radius: 5px;
  min-height:50vh;
  width: 20vw;
`
const P = styled.div `
  word-wrap: break-word;
  line-height: 20.0px;
`
const H3 = styled.h3`
  display: flex;
  justify-content: center;
  padding: 5px;
`
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // APAGAR DEPOIS E VOLTAR PRO CARD

const HomePage = () => {
    const navigate = useNavigate();
    
    const [pokemons] = useContext(GlobalStateContext);

    const pokemonsMap = pokemons && pokemons.map((pokemon, index) => {
        // return (
        //     <Cards key={index}
        //         pokeName={pokemon.name}
        //         pokeUrl={pokemon.url}>
        //     </Cards>}
        // )

        return (
            <DivCards key={index}>
              <H3>Poke Card</H3>
              <P><strong>Name:</strong> {pokemon.name}</P>
              <P><strong>Url:</strong> {pokemon.url}</P>
              <button onClick={() => {goToDetails(navigate, pokemon.name)}}>Detalhes</button>
              <button onClick={() => {goToPokedex(navigate)}}>Adicionar a Pokedex</button>
            </DivCards>
          )
    })


    return (
        <>
            <H1>Lista de pokemons</H1>
            <CardsList>
                {pokemonsMap}
            </CardsList>
        </>
    )
}

export default HomePage;
