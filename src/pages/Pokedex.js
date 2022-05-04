import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator.js'
import { Button, TextoBotao1 } from "../styles/HomePageStyle";
import { useRequestData } from "../hooks/useRequestData";
import { BASE_URL } from "../constants/Constants";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext"

const Pokedex = () => {
  const navigate = useNavigate();

  const [getPokedex] = useRequestData([], `${BASE_URL}`);

  const { states, setters } = useContext(GlobalStateContext);
  const { pokedex } = states;
  const { setPokedex } = setters;


  return (
    <div>
      Pokedex

      <Button onClick={() => goToHomePage(navigate)}>HomePage</Button>

    </div>
  )
}

export default Pokedex;