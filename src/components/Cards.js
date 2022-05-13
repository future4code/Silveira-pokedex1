import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { goToDetails, goToPokedex } from "../routes/coordinator";
import GlobalStateContext from "../global/GlobalStateContext"
import { useContext } from "react";



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


export default function Cards(props) {
  const navigate = useNavigate()
 
  return (
    <DivCards>
      <H3>Poke Card</H3>
      <P><strong>Name:</strong> {props.pokeName}</P>
      <P><strong>Url:</strong> {props.pokeUrl}</P>
      <button onClick={() => {goToDetails(navigate,props.pokeName)}}>Detalhes</button>
      <button onClick={() => {goToPokedex(navigate)}}>Adicionar a Pokedex</button>
    </DivCards>
  )
}

